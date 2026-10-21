import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'deep' | 'light' | 'interactive';
  hudCorners?: boolean;
  glow?: boolean;
  id?: string;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  variant = 'default',
  hudCorners = false,
  glow = false,
  id
}) => {
  const variantStyles = {
    default: 'glass-panel',
    deep: 'glass-panel-deep',
    light: 'glass-panel-light',
    interactive: 'glass-panel glass-panel-hover cursor-pointer',
  };

  const cornerClasses = hudCorners ? 'hud-corner' : '';
  const glowClasses = glow ? 'border-cyan-300/60 shadow-[0_0_22px_rgba(6,182,212,0.20),0_4px_16px_rgba(6,182,212,0.10)]' : '';

  return (
    <div
      id={id}
      className={`rounded-2xl transition-all ${variantStyles[variant]} ${cornerClasses} ${glowClasses} ${className}`}
    >
      {/* Specular Highlight Strip along top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none rounded-t-2xl" />
      {children}
    </div>
  );
};
