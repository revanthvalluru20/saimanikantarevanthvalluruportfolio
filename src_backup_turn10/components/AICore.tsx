import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Volume2, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { AssistantState } from '../types/portfolio';
import { AudioWaveform } from './AudioWaveform';

interface AICoreProps {
  state: AssistantState;
  onCoreClick?: () => void;
  subtitle?: string;
}

export const AICore: React.FC<AICoreProps> = ({
  state,
  onCoreClick,
  subtitle = "SYSTEM OPERATIONAL"
}) => {
  // State styling presets
  const getStateColors = () => {
    switch (state) {
      case 'listening':
        return {
          glow: 'shadow-[0_0_35px_rgba(245,158,11,0.35)]',
          border: 'border-amber-400',
          ring: 'border-amber-400/50',
          accent: 'text-amber-700',
          bg: 'from-white via-amber-50 to-amber-100',
          label: 'LISTENING FOR AUDIO'
        };
      case 'processing':
        return {
          glow: 'shadow-[0_0_35px_rgba(168,85,247,0.35)]',
          border: 'border-purple-400',
          ring: 'border-purple-400/50',
          accent: 'text-purple-700',
          bg: 'from-white via-purple-50 to-purple-100',
          label: 'PROCESSING INTENT'
        };
      case 'speaking':
        return {
          glow: 'shadow-[0_0_40px_rgba(6,182,212,0.40)]',
          border: 'border-cyan-400',
          ring: 'border-cyan-400/60',
          accent: 'text-cyan-700',
          bg: 'from-white via-cyan-50 to-cyan-100',
          label: 'VOCALIZING RESPONSE'
        };
      case 'error':
        return {
          glow: 'shadow-[0_0_35px_rgba(239,68,68,0.35)]',
          border: 'border-red-400',
          ring: 'border-red-400/50',
          accent: 'text-red-700',
          bg: 'from-white via-red-50 to-red-100',
          label: 'TELEMETRY EXCEPTION'
        };
      case 'idle':
      default:
        return {
          glow: 'shadow-[0_0_30px_rgba(6,182,212,0.25)]',
          border: 'border-cyan-400',
          ring: 'border-cyan-300',
          accent: 'text-cyan-700',
          bg: 'from-white via-cyan-50/70 to-cyan-100/60',
          label: 'REVA AI ONLINE'
        };
    }
  };

  const style = getStateColors();

  return (
    <div className="flex flex-col items-center justify-center p-4 relative select-none">
      {/* Outer rotating decorative HUD rings */}
      <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
        {/* Outer dotted tracking circle */}
        <div
          className={`absolute inset-0 rounded-full border border-dashed ${style.ring} animate-spin-slow pointer-events-none opacity-60`}
          style={{ animationDuration: '28s' }}
        />

        {/* Counter-rotating segmented ring */}
        <div
          className={`absolute inset-3 rounded-full border border-dotted ${style.ring} animate-spin-reverse pointer-events-none opacity-70`}
          style={{ animationDuration: '20s' }}
        />

        {/* Concentric radar pulse ring */}
        <div
          className={`absolute inset-7 rounded-full border ${style.ring} animate-ping pointer-events-none opacity-20`}
          style={{ animationDuration: '4s' }}
        />

        {/* Interactive Center Core */}
        <motion.button
          type="button"
          onClick={onCoreClick}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`relative z-10 w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br ${style.bg} border-2 ${style.border} ${style.glow} flex flex-col items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 group overflow-hidden`}
          aria-label={`AI Core Status: ${style.label}. Click to interact.`}
        >
          {/* Subtle grid background inside core */}
          <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

          {/* Core State Icon */}
          <div className="relative z-10 flex flex-col items-center gap-1">
            {state === 'listening' && (
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.2 }}>
                <Mic className="w-8 h-8 text-amber-600" />
              </motion.div>
            )}

            {state === 'processing' && (
              <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
            )}

            {state === 'speaking' && (
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
                <Volume2 className="w-8 h-8 text-cyan-600" />
              </motion.div>
            )}

            {state === 'error' && (
              <AlertCircle className="w-8 h-8 text-red-600" />
            )}

            {state === 'idle' && (
              <Sparkles className="w-8 h-8 text-cyan-600 group-hover:rotate-12 transition-transform" />
            )}

            {/* Core Label */}
            <span className="font-mono text-xs font-bold tracking-widest text-slate-900 mt-1">
              REVA AI
            </span>
            <span className={`font-mono text-[10px] tracking-wider uppercase font-bold ${style.accent}`}>
              {state}
            </span>
          </div>

          {/* Live Waveform inside core when active */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none">
            <AudioWaveform isActive={state === 'speaking' || state === 'listening'} mode={state === 'listening' ? 'listening' : 'speaking'} barCount={12} />
          </div>
        </motion.button>
      </div>

      {/* Subtitle & Telemetry Text */}
      <div className="mt-3 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 font-mono text-[11px] text-slate-700 shadow-xs">
          <span className={`w-2 h-2 rounded-full ${state === 'error' ? 'bg-red-500' : state === 'listening' ? 'bg-amber-500' : 'bg-cyan-500'} animate-pulse`} />
          <span className="tracking-wider font-semibold">{style.label}</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-500">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};
