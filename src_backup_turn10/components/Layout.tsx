import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlassNavbar } from './GlassNavbar';
import { RevaAI } from './RevaAI';
import { useCardWorkspace } from '../context/CardWorkspaceContext';
import { Shield } from 'lucide-react';
import { profileData } from '../data/profile';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { assistantEngine } from '../services/assistantEngine';
import { AssistantState, ChatMessage, PortfolioAction } from '../types/portfolio';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { focusCard } = useCardWorkspace();

  const [isRevaOpen, setIsRevaOpen] = useState(false);
  const [chatInput, setChatInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'reva',
      text: profileData.welcomeMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action: { type: 'NO_ACTION' }
    }
  ]);

  // Voice Recognition & Speech Synthesis
  const {
    isListening,
    transcript,
    interimTranscript,
    error: speechError,
    isSupported: isSpeechRecognitionSupported,
    startListening,
    stopListening,
    resetTranscript
  } = useSpeechRecognition();

  const {
    isSpeaking,
    isMuted,
    speak,
    stopSpeaking,
    toggleMute,
    replayLast
  } = useSpeechSynthesis();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // Assistant state
  const assistantState: AssistantState = speechError
    ? 'error'
    : isListening
    ? 'listening'
    : isProcessing
    ? 'processing'
    : isSpeaking
    ? 'speaking'
    : 'idle';

  // Action executor
  const executePortfolioAction = useCallback((action: PortfolioAction) => {
    switch (action.type) {
      case 'SHOW_ABOUT':
        focusCard('profile-card', '/about');
        break;
      case 'SHOW_EDUCATION':
        focusCard('education-card', '/about');
        break;
      case 'SHOW_SKILLS':
        navigate('/skills');
        break;
      case 'SHOW_EXPERIENCE':
        focusCard('destini-card', '/experience');
        break;
      case 'SHOW_PROJECT':
        focusCard(action.projectId ? `project-${action.projectId}` : 'project-vibeverse', '/projects');
        break;
      case 'SHOW_ARCHITECTURE':
        if (action.projectId) {
          navigate(`/architecture?project=${action.projectId}`);
        } else {
          navigate('/architecture');
        }
        break;
      case 'SHOW_CONTACT':
        focusCard('contact-card', '/contact');
        break;
      case 'FOCUS_CARD':
        if (action.cardId) {
          focusCard(action.cardId, action.page);
        }
        break;
      case 'NO_ACTION':
      default:
        break;
    }
  }, [focusCard, navigate]);

  // Query handler
  const handleQuerySubmit = useCallback(async (queryText: string) => {
    const trimmed = queryText.trim();
    if (!trimmed) return;

    stopSpeaking();
    setIsProcessing(true);
    setIsRevaOpen(true);

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: now
    };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');

    try {
      const result = await assistantEngine.ask(trimmed);

      const revaMsg: ChatMessage = {
        id: `reva-${Date.now()}`,
        sender: 'reva',
        text: result.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: result.action,
        intent: result.intent
      };

      setChatMessages(prev => [...prev, revaMsg]);

      if (!isMuted) {
        speak(result.message);
      }

      if (result.action && result.action.type !== 'NO_ACTION') {
        executePortfolioAction(result.action);
      }
    } catch (err) {
      console.error('Failed to process assistant query:', err);
      const errorMsg: ChatMessage = {
        id: `reva-err-${Date.now()}`,
        sender: 'reva',
        text: 'I encountered a processing anomaly. Please try asking again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: { type: 'NO_ACTION' }
      };
      setChatMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsProcessing(false);
    }
  }, [stopSpeaking, isMuted, speak, executePortfolioAction]);

  // Watch speech transcript
  const prevTranscriptRef = useRef<string>('');
  useEffect(() => {
    if (transcript && transcript !== prevTranscriptRef.current) {
      prevTranscriptRef.current = transcript;
      handleQuerySubmit(transcript);
      resetTranscript();
    }
  }, [transcript, handleQuerySubmit, resetTranscript]);

  // Global event listener for REVA queries from any component
  useEffect(() => {
    const handleRevaEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        handleQuerySubmit(customEvent.detail);
      }
    };
    window.addEventListener('reva-query', handleRevaEvent);
    return () => window.removeEventListener('reva-query', handleRevaEvent);
  }, [handleQuerySubmit]);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-cyan-200 selection:text-cyan-900 relative overflow-x-hidden">
        {/* BACKGROUND: Preserved homebg1.jpeg with light overlay */}
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
          <img
            src="/assets/img/homebg1.jpeg"
            alt="Developer workspace background"
            className="w-full h-full object-cover object-center filter brightness-[0.28] saturate-50 blur-[1px]"
          />
          {/* White glass-like overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/82 to-white/92" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-50/60 via-transparent to-transparent" />
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-tech-grid opacity-40" />
        </div>

        {/* Very subtle scanline on white */}
        <div className="fixed inset-0 -z-10 scanlines-overlay opacity-15 pointer-events-none" />

        {/* Navigation */}
        <GlassNavbar isMuted={isMuted} onToggleMute={toggleMute} />

        {/* Page Content */}
        <main className="flex-1 pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-cyan-200/60 bg-white/70 backdrop-blur-md py-6 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-500" />
              <span className="text-slate-600 font-bold">STARK INDUSTRIES INTERFACE LAB</span>
              <span className="text-cyan-500">//</span>
              <span>SYSTEM v4.28</span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <span>COORDINATES: 16.8290° N, 81.5335° E</span>
              <span>•</span>
              <span>SECURITY CLEARANCE: VERIFIED</span>
            </div>

            <div className="text-slate-500">
              © {new Date().getFullYear()} {profileData.fullName}
            </div>
          </div>
        </footer>

        {/* PERSISTENT REVA AI — floats on every page */}
        <RevaAI
          assistantState={assistantState}
          isListening={isListening}
          isSpeaking={isSpeaking}
          isMuted={isMuted}
          isSpeechRecognitionSupported={isSpeechRecognitionSupported}
          speechError={speechError}
          chatMessages={chatMessages}
          chatInput={chatInput}
          interimTranscript={interimTranscript}
          isProcessing={isProcessing}
          onToggleListening={() => {
            if (isListening) {
              stopListening();
            } else {
              startListening();
            }
          }}
          onStopSpeaking={stopSpeaking}
          onToggleMute={toggleMute}
          onReplayAudio={replayLast}
          onChatInputChange={setChatInput}
          onChatSubmit={(e) => {
            if (e) e.preventDefault();
            handleQuerySubmit(chatInput);
          }}
          onSelectQuestion={handleQuerySubmit}
          isOpen={isRevaOpen}
          onToggleOpen={() => setIsRevaOpen(prev => !prev)}
        />
      </div>
  );
};
