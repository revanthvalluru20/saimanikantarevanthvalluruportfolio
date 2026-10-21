import React from 'react';

interface HUDLabelProps {
  label: string;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
}

export const HUDLabel: React.FC<HUDLabelProps> = ({
  label,
  icon,
  badge,
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs backdrop-blur-md shadow-xs ${className}`}>
      {icon && <span className="text-cyan-600">{icon}</span>}
      <span className="tracking-wider font-semibold">{label}</span>
      {badge && (
        <span className="px-1.5 py-0.5 rounded text-[10px] bg-cyan-100 text-cyan-800 border border-cyan-300 font-bold">
          {badge}
        </span>
      )}
    </div>
  );
};
