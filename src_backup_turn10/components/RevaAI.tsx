import React, { useRef, useEffect } from 'react';
import { Bot, Volume2, VolumeX, Mic, MicOff, Send, X, Sparkles, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { AssistantState, ChatMessage } from '../types/portfolio';

interface RevaAIProps {
  assistantState: AssistantState;
  isListening: boolean;
  isSpeaking: boolean;
  isMuted: boolean;
  isSpeechRecognitionSupported: boolean;
  speechError: string | null;
  chatMessages: ChatMessage[];
  chatInput: string;
  interimTranscript?: string;
  isProcessing: boolean;
  onToggleListening: () => void;
  onStopSpeaking: () => void;
  onToggleMute: () => void;
  onReplayAudio: () => void;
  onChatInputChange: (val: string) => void;
  onChatSubmit: (e?: React.FormEvent) => void;
  onSelectQuestion: (q: string) => void;
  isOpen: boolean;
  onToggleOpen: () => void;
}

const revaSuggestedQuestions = [
  "Tell me about yourself.",
  "Show my education.",
  "What are my technical skills?",
  "Tell me about my internship at Destini.ai.",
  "Explain VibeVerse.",
  "Explain MentorAI-CodeSpace.",
  "Show me your projects.",
  "Explain the architecture.",
  "How can I contact you?"
];

export const RevaAI: React.FC<RevaAIProps> = ({
  assistantState,
  isListening,
  isSpeaking,
  isMuted,
  isSpeechRecognitionSupported,
  speechError,
  chatMessages,
  chatInput,
  interimTranscript,
  isProcessing,
  onToggleListening,
  onStopSpeaking,
  onToggleMute,
  onReplayAudio,
  onChatInputChange,
  onChatSubmit,
  onSelectQuestion,
  isOpen,
  onToggleOpen
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isOpen, isProcessing]);

  return (
    <>
      {/* 1. PERSISTENT FLOATING REVA AI DOCK */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 select-none">
        {/* Mute Button */}
        <button
          type="button"
          onClick={onToggleMute}
          className={`p-2 rounded-xl border text-xs transition-colors shadow-sm ${
            isMuted
              ? 'bg-white text-slate-400 border-slate-200'
              : 'bg-cyan-50 text-cyan-600 border-cyan-200 shadow-[0_0_8px_rgba(6,182,212,0.18)]'
          }`}
          title={isMuted ? 'Voice Muted — Click to enable' : 'Voice Enabled — Click to mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-500 animate-pulse" />}
        </button>

        {/* Main REVA AI Launcher Pill */}
        <button
          type="button"
          onClick={onToggleOpen}
          className={`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border transition-all duration-300 shadow-lg group ${
            isOpen
              ? 'border-cyan-400 bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)]'
              : 'border-cyan-200 bg-white hover:border-cyan-400 hover:shadow-[0_0_14px_rgba(6,182,212,0.22)] text-slate-700'
          }`}
          title="Open or Minimize REVA AI Console"
        >
          {/* Pulsing Core */}
          <div className={`relative w-6 h-6 rounded-lg flex items-center justify-center border ${
            isOpen ? 'bg-white/20 border-white/40' : 'bg-cyan-50 border-cyan-200'
          }`}>
            <Bot className={`w-3.5 h-3.5 ${isOpen ? 'text-white' : 'text-cyan-600'} group-hover:scale-110 transition-transform`} />
            <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-pulse shadow-sm ${
              isOpen ? 'bg-white' : 'bg-cyan-400'
            }`} />
          </div>

          <div className="text-left font-mono">
            <div className={`text-xs font-bold flex items-center gap-1.5 ${isOpen ? 'text-white' : 'text-slate-800'}`}>
              <span>REVA AI</span>
              <span className={`text-[10px] ${isOpen ? 'text-white/80' : 'text-cyan-500'}`}>ONLINE</span>
            </div>
            <div className={`text-[9px] ${isOpen ? 'text-white/70' : 'text-slate-400'}`}>
              {assistantState === 'listening' ? (
                <span className="text-amber-500 animate-pulse">LISTENING...</span>
              ) : assistantState === 'speaking' ? (
                <span className="animate-pulse">SPEAKING...</span>
              ) : assistantState === 'processing' ? (
                <span>ADAPTING...</span>
              ) : (
                'ADAPTIVE WORKSPACE'
              )}
            </div>
          </div>

          <div className="ml-1">
            {isOpen
              ? <ChevronDown className="w-4 h-4 text-white/80" />
              : <ChevronUp className="w-4 h-4 text-slate-500 group-hover:text-cyan-600" />
            }
          </div>
        </button>
      </div>

      {/* 2. FLOATING REVA AI CONSOLE DRAWER */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[95vw] sm:w-[440px] max-h-[80vh] flex flex-col rounded-2xl bg-white/95 border border-cyan-200 shadow-[0_20px_60px_rgba(6,182,212,0.18),0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-2xl overflow-hidden hud-corner">
          {/* Console Header */}
          <div className="p-3.5 bg-white border-b border-cyan-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center">
                <Bot className="w-4 h-4 text-cyan-600" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span>REVA AI</span>
                  <span className="text-cyan-400">//</span>
                  <span className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    ONLINE
                  </span>
                </div>
                <div className="text-[9px] font-mono text-slate-400">
                  ADAPTIVE HOLOGRAPHIC CARD WORKSPACE
                </div>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1.5">
              {isSpeaking && (
                <button
                  type="button"
                  onClick={onStopSpeaking}
                  className="px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-600 font-mono text-[10px]"
                >
                  Stop
                </button>
              )}
              <button
                type="button"
                onClick={onToggleMute}
                className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-cyan-600 transition-colors"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-500" />}
              </button>
              <button
                type="button"
                onClick={onToggleOpen}
                className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
                title="Minimize REVA AI Console"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Conversation Thread */}
          <div className="flex-1 p-3.5 overflow-y-auto max-h-[360px] space-y-3 font-sans text-xs bg-slate-50/50">
            {chatMessages.map((msg) => {
              const isReva = msg.sender === 'reva' || msg.sender === 'jarvis';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isReva ? 'items-start' : 'items-end'}`}
                >
                  <div className="text-[9px] font-mono text-slate-400 mb-0.5 px-1 flex items-center gap-1">
                    <span>{isReva ? 'REVA AI' : 'VISITOR'}</span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                    {isReva && (
                      <button
                        type="button"
                        onClick={onReplayAudio}
                        className="ml-1 p-0.5 text-slate-400 hover:text-cyan-600 transition-colors"
                        title="Replay voice audio"
                      >
                        <Volume2 className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>
                  <div
                    className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                      isReva
                        ? 'bg-white border border-cyan-100 text-slate-700 shadow-sm'
                        : 'bg-cyan-500 border border-cyan-500 text-white shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}

            {isProcessing && (
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 font-mono text-xs">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-spin" />
                <span>REVA AI is focusing the relevant workspace card...</span>
              </div>
            )}

            {interimTranscript && (
              <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 font-mono text-xs">
                Listening: "{interimTranscript}"
              </div>
            )}

            {speechError && (
              <div className="p-2 rounded-xl bg-red-50 border border-red-200 text-red-600 font-mono text-[11px]">
                {speechError}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions */}
          <div className="p-2.5 bg-white border-t border-slate-100 space-y-1.5">
            <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-cyan-500" />
              <span>SUGGESTED TOPICS // CLICK TO FOCUS CARD:</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {revaSuggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => onSelectQuestion(q)}
                  className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-slate-600 hover:text-cyan-700 font-mono text-[10px] whitespace-nowrap transition-colors flex-shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <form onSubmit={onChatSubmit} className="p-2.5 bg-white border-t border-cyan-100 flex items-center gap-2">
            {/* Microphone */}
            <button
              type="button"
              onClick={onToggleListening}
              className={`p-2 rounded-xl border transition-colors ${
                isListening
                  ? 'bg-amber-400 text-white border-amber-300 shadow-sm animate-pulse'
                  : 'bg-slate-50 border-slate-200 text-cyan-500 hover:border-cyan-300'
              }`}
              title={
                isSpeechRecognitionSupported
                  ? isListening
                    ? 'Listening — Click to stop'
                    : 'Click to speak'
                  : 'Speech recognition unsupported in this browser'
              }
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            {/* Text Input */}
            <input
              type="text"
              value={chatInput}
              onChange={(e) => onChatInputChange(e.target.value)}
              placeholder="Ask REVA AI to focus any skill, project, or topic..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 text-slate-800 font-sans text-xs focus:outline-none transition-colors placeholder-slate-400"
            />

            {/* Send */}
            <button
              type="submit"
              disabled={!chatInput.trim() || isProcessing}
              className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 disabled:opacity-40 text-white font-bold transition-all shadow-sm"
              title="Submit query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
