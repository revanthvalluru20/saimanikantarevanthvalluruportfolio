import React from 'react';

interface AudioWaveformProps {
  isActive: boolean;
  mode?: 'speaking' | 'listening';
  barCount?: number;
}

export const AudioWaveform: React.FC<AudioWaveformProps> = ({
  isActive,
  mode = 'speaking',
  barCount = 18
}) => {
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <div className="flex items-center justify-center gap-1 h-8 px-2" aria-label="Audio waveform visualizer">
      {bars.map((bar) => {
        // Compute pseudo-random heights or smooth frequency curve
        const baseHeight = Math.sin((bar / barCount) * Math.PI) * 100;
        const animationDelay = (bar * 0.08) % 1;
        const animationDuration = mode === 'listening' ? '0.7s' : '0.5s';

        return (
          <div
            key={bar}
            className={`w-1 rounded-full transition-all duration-150 ${
              isActive
                ? mode === 'listening'
                  ? 'bg-gradient-to-t from-amber-500 to-cyan-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                  : 'bg-gradient-to-t from-cyan-500 to-blue-400 shadow-[0_0_8px_rgba(0,240,255,0.7)]'
                : 'bg-slate-700/60 h-1.5'
            }`}
            style={{
              height: isActive ? `${Math.max(15, baseHeight)}%` : '4px',
              animation: isActive ? `wave ${animationDuration} ease-in-out infinite alternate` : 'none',
              animationDelay: `${animationDelay}s`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes wave {
          0% {
            height: 15%;
            opacity: 0.4;
          }
          100% {
            height: 95%;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
