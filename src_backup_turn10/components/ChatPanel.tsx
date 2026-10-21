import React, { useRef, useEffect } from 'react';
import { Send, Bot, User, Volume2, CornerDownRight, CheckCircle2 } from 'lucide-react';
import { ChatMessage } from '../types/portfolio';

interface ChatPanelProps {
  messages: ChatMessage[];
  inputValue: string;
  interimTranscript?: string;
  isProcessing: boolean;
  onInputChange: (val: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
  onSelectFollowUp: (q: string) => void;
  onReplayMessage: (text: string) => void;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({
  messages,
  inputValue,
  interimTranscript,
  isProcessing,
  onInputChange,
  onSubmit,
  onSelectFollowUp,
  onReplayMessage
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, interimTranscript]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="flex flex-col h-full rounded-2xl bg-white border border-cyan-200 overflow-hidden shadow-glass">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-cyan-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200">
            <Bot className="w-4 h-4 text-cyan-600" />
          </div>
          <div>
            <div className="font-mono text-xs font-bold text-slate-900 tracking-wider">
              REVA AI // INTERVIEW CONSOLE
            </div>
            <div className="text-[10px] text-cyan-600 font-mono">
              ADAPTIVE WORKSPACE ENGINE v3.0
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold">REVA AI ONLINE</span>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[420px] md:max-h-[480px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] font-mono text-slate-500">
              {msg.sender === 'user' ? (
                <>
                  <span>Recruiter / Visitor</span>
                  <User className="w-3 h-3 text-slate-400" />
                </>
              ) : (
                <>
                  <Bot className="w-3 h-3 text-cyan-600" />
                  <span className="text-cyan-700 font-semibold">REVA AI</span>
                </>
              )}
              <span className="text-slate-400">• {msg.timestamp}</span>
            </div>

            <div
              className={`max-w-[88%] md:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-cyan-50 border border-cyan-200 text-cyan-950 rounded-br-none shadow-xs'
                  : 'bg-slate-50 border border-slate-200 text-slate-800 rounded-bl-none shadow-xs'
              }`}
            >
              <div className="whitespace-pre-line">{msg.text}</div>

              {/* Action Banner if triggered */}
              {msg.action && msg.action.type !== 'NO_ACTION' && (
                <div className="mt-2.5 pt-2 border-t border-cyan-100 flex items-center gap-2 text-xs font-mono text-cyan-800 bg-white px-2.5 py-1 rounded-lg border border-cyan-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                  <span className="truncate">Focused workspace card: {msg.action.type.replace('SHOW_', '')}</span>
                </div>
              )}

              {/* Vocalize button on assistant messages */}
              {(msg.sender === 'reva' || msg.sender === 'jarvis') && (
                <div className="mt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => onReplayMessage(msg.text)}
                    className="p-1 rounded hover:bg-cyan-100 text-slate-400 hover:text-cyan-700 transition-colors"
                    title="Vocalize this response"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Interim Speech Transcription */}
        {interimTranscript && (
          <div className="flex flex-col items-end animate-pulse">
            <span className="text-[10px] font-mono text-amber-600 mb-0.5">Capturing speech...</span>
            <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-amber-50 border border-amber-200 text-amber-900 text-xs italic">
              "{interimTranscript}"
            </div>
          </div>
        )}

        {/* Processing Indicator */}
        {isProcessing && (
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 bg-cyan-50 px-3 py-1.5 rounded-lg border border-cyan-200 w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span>REVA AI is focusing the relevant card...</span>
          </div>
        )}
      </div>

      {/* Suggested Follow-Ups */}
      {messages.length > 0 && (messages[messages.length - 1].sender === 'reva' || messages[messages.length - 1].sender === 'jarvis') && (
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
          <CornerDownRight className="w-3 h-3 text-cyan-600 flex-shrink-0" />
          <span className="text-[11px] font-mono text-slate-500 flex-shrink-0">Next:</span>
          {["Tell me about yourself.", "Show my education.", "Explain technical skills.", "Explain VibeVerse.", "Show my projects."].map((follow, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectFollowUp(follow)}
              className="flex-shrink-0 px-2.5 py-0.5 rounded-full bg-white hover:bg-cyan-50 text-slate-700 hover:text-cyan-800 border border-slate-200 text-[11px] transition-colors"
            >
              {follow}
            </button>
          ))}
        </div>
      )}

      {/* Input Field */}
      <form onSubmit={onSubmit} className="p-3 bg-white border-t border-slate-100">
        <div className="relative flex items-center">
          <input
            type="text"
            id="reva-chat-input"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask REVA AI to focus any skill, project, or topic..."
            className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-800 placeholder-slate-400 text-xs md:text-sm transition-all focus:outline-none"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="absolute right-1.5 p-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-100 text-white disabled:text-slate-400 transition-colors cursor-pointer disabled:cursor-not-allowed"
            aria-label="Send query"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
