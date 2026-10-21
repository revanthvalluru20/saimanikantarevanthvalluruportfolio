import React from 'react';

interface ArcReactorProps {
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}

export const ArcReactor: React.FC<ArcReactorProps> = ({ size = 'md', active = true }) => {
  const sizeMap = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36',
    lg: 'w-48 h-48',
  };

  return (
    <div className={`relative ${sizeMap[size]} flex items-center justify-center select-none`}>
      {/* Outer Subtle Ambient Bloom */}
      <div className={`absolute inset-0 rounded-full bg-cyan-500/15 blur-xl pointer-events-none ${active ? 'animate-reactor-pulse opacity-100' : 'opacity-40'}`} />

      {/* Outer Thin Glass Ring with HUD ticks */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.25)] flex items-center justify-center">
        {/* Rotating Segmented Ring */}
        <div className="absolute inset-1 rounded-full border border-dashed border-cyan-400/40 animate-gyro-clockwise" />
      </div>

      {/* Counter-Rotating Technical Ring */}
      <div className="absolute inset-3 rounded-full border border-blue-400/30 animate-gyro-counter flex items-center justify-center">
        {/* 4 Compass HUD Marks */}
        <div className="absolute -top-1 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#00f0ff]" />
        <div className="absolute -bottom-1 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#00f0ff]" />
        <div className="absolute -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#00f0ff]" />
        <div className="absolute -right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#00f0ff]" />
      </div>

      {/* Middle Glass Stabilizer Ring */}
      <div className="absolute inset-6 rounded-full border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-950/60 to-blue-950/40 backdrop-blur-sm shadow-inner flex items-center justify-center">
        {/* Inner Segment Ring */}
        <div className="w-full h-full rounded-full border border-cyan-300/30 flex items-center justify-center">
          {/* Triangular / Hexagonal Light Core */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-300 to-white shadow-[0_0_20px_#00f0ff] animate-pulse flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
          </div>
        </div>
      </div>

      {/* Subtle Arc Energy Rays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />
      </div>
    </div>
  );
};
