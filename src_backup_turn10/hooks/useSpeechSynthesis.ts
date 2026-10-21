import { useState, useEffect, useRef, useCallback } from 'react';

export function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const lastSpokenTextRef = useRef<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);

      const updateVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };

      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    } else {
      setIsSupported(false);
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  const speak = useCallback((text: string) => {
    if (!text || isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    lastSpokenTextRef.current = text;

    // Cancel existing utterance to prevent speech overlaps
    window.speechSynthesis.cancel();

    // Clean text of markdown/code artifacts for natural speech
    const cleanSpeechText = text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[`*_#~]/g, '')
      .replace(/https?:\/\/\S+/g, 'link')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanSpeechText);
    utterance.rate = 1.05;
    utterance.pitch = 0.98; // Slightly deeper, futuristic cadence

    // Prefer clear English voice
    if (voices.length > 0) {
      const preferredVoice =
        voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'))) ||
        voices.find(v => v.lang.startsWith('en')) ||
        voices[0];

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [isMuted, voices]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      if (!prev) {
        stopSpeaking();
      }
      return !prev;
    });
  }, [stopSpeaking]);

  const replayLast = useCallback(() => {
    if (lastSpokenTextRef.current) {
      speak(lastSpokenTextRef.current);
    }
  }, [speak]);

  return {
    isSpeaking,
    isMuted,
    isSupported,
    speak,
    stopSpeaking,
    toggleMute,
    replayLast
  };
}
