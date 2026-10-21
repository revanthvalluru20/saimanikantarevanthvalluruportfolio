import React from 'react';
import { Mic, MicOff, Square, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { AssistantState } from '../types/portfolio';

interface VoiceControlsProps {
  state: AssistantState;
  isListening: boolean;
  isSpeaking: boolean;
  isMuted: boolean;
  isSpeechRecognitionSupported: boolean;
  onToggleListening: () => void;
  onStopSpeaking: () => void;
  onToggleMute: () => void;
  onReplay: () => void;
  errorMessage?: string | null;
}

export const VoiceControls: React.FC<VoiceControlsProps> = ({
  state,
  isListening,
  isSpeaking,
  isMuted,
  isSpeechRecognitionSupported,
  onToggleListening,
  onStopSpeaking,
  onToggleMute,
  onReplay,
  errorMessage
}) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
        {/* Left: State Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
          <div
            className={`w-2 h-2 rounded-full ${
              state === 'listening'
                ? 'bg-amber-500 animate-ping'
                : state === 'speaking'
                ? 'bg-cyan-500 animate-pulse'
                : state === 'processing'
                ? 'bg-purple-500 animate-spin'
                : state === 'error'
                ? 'bg-red-500'
                : 'bg-emerald-500'
            }`}
          />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700">
            {state}
          </span>
        </div>

        {/* Center/Right: Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Mic Button */}
          <button
            type="button"
            onClick={onToggleListening}
            disabled={!isSpeechRecognitionSupported}
            className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
              isListening
                ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)] animate-pulse'
                : isSpeechRecognitionSupported
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                : 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'
            }`}
            title={
              isSpeechRecognitionSupported
                ? isListening
                  ? "Stop listening"
                  : "Click to speak your question"
                : "Speech recognition not supported in this browser (use text input)"
            }
          >
            {isListening ? (
              <>
                <MicOff className="w-3.5 h-3.5 text-amber-600" />
                <span>Listening...</span>
              </>
            ) : (
              <>
                <Mic className="w-3.5 h-3.5 text-cyan-600" />
                <span>{isSpeechRecognitionSupported ? "Talk" : "Mic N/A"}</span>
              </>
            )}
          </button>

          {/* Stop Audio Button */}
          {isSpeaking && (
            <button
              type="button"
              onClick={onStopSpeaking}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-mono text-xs transition-colors"
              title="Stop speaking"
            >
              <Square className="w-3 h-3 fill-current" />
              <span>Stop</span>
            </button>
          )}

          {/* Replay Button */}
          <button
            type="button"
            onClick={onReplay}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
            title="Replay last answer"
          >
            <RotateCcw className="w-4 h-4 text-slate-600" />
          </button>

          {/* Mute / Unmute Toggle */}
          <button
            type="button"
            onClick={onToggleMute}
            className={`p-1.5 rounded-lg border transition-colors ${
              isMuted
                ? 'bg-slate-50 text-slate-400 border-slate-200'
                : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border-cyan-200'
            }`}
            title={isMuted ? "Unmute vocal responses" : "Mute vocal responses"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Warning/Error notification banner if speech fails */}
      {errorMessage && (
        <div className="px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-red-700 font-mono text-xs flex items-center justify-between animate-fadeIn">
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
