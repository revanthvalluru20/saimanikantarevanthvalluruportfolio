import { useState, useEffect, useRef, useCallback } from 'react';

// SpeechRecognition browser interface declarations
interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: {
    length: number;
    item(index: number): {
      isFinal: boolean;
      length: number;
      item(index: number): { transcript: string; confidence: number };
      0: { transcript: string; confidence: number };
    };
    [index: number]: {
      isFinal: boolean;
      0: { transcript: string; confidence: number };
    };
  };
}

interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}

interface SpeechRecognitionConstructor {
  new (): ISpeechRecognition;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

export function useSpeechRecognition() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionClass) {
      setIsSupported(true);
      try {
        const recognition = new SpeechRecognitionClass();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
          setIsListening(true);
          setError(null);
        };

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          let currentInterim = '';
          let currentFinal = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            const result = event.results[i];
            if (result.isFinal) {
              currentFinal += result[0].transcript;
            } else {
              currentInterim += result[0].transcript;
            }
          }

          if (currentFinal) {
            setTranscript(currentFinal.trim());
          }
          setInterimTranscript(currentInterim);
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          setIsListening(false);
          if (event.error === 'not-allowed') {
            setError('Microphone access denied. Please grant permission in browser settings.');
          } else if (event.error === 'no-speech') {
            setError('No speech detected. Please speak clearly into your mic.');
          } else if (event.error === 'network') {
            setError('Speech recognition network service issue. You can still type questions!');
          } else {
            setError(`Speech recognition: ${event.error}`);
          }
        };

        recognition.onend = () => {
          setIsListening(false);
          setInterimTranscript('');
        };

        recognitionRef.current = recognition;
      } catch (err) {
        console.warn('SpeechRecognition initialization error:', err);
        setIsSupported(false);
      }
    } else {
      setIsSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore cleanup abort
        }
      }
    };
  }, []);

  const startListening = useCallback(() => {
    if (!isSupported || !recognitionRef.current) {
      setError('Speech recognition is not supported in this browser. Please use the text input.');
      return;
    }

    try {
      setError(null);
      setTranscript('');
      setInterimTranscript('');
      recognitionRef.current.start();
    } catch {
      try {
        recognitionRef.current.stop();
        setTimeout(() => {
          recognitionRef.current?.start();
        }, 150);
      } catch (err) {
        console.error('Failed to restart speech recognition', err);
      }
    }
  }, [isSupported]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
    }
    setIsListening(false);
  }, [isListening]);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setInterimTranscript('');
    setError(null);
  }, []);

  return {
    isListening,
    transcript,
    interimTranscript,
    error,
    isSupported,
    startListening,
    stopListening,
    resetTranscript
  };
}
