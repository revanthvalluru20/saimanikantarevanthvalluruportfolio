import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Minimize2, ChevronRight, Sparkles } from 'lucide-react';
import { useCardWorkspace } from '../context/CardWorkspaceContext';

export interface AdaptiveCardProps {
  cardId: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
  summaryContent?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  defaultExpanded?: boolean;
}

export const AdaptiveCard: React.FC<AdaptiveCardProps> = ({
  cardId,
  title,
  subtitle,
  icon,
  badge,
  className = '',
  summaryContent,
  children,
  actions,
  defaultExpanded = false
}) => {
  const { activeCardId, setActiveCardId } = useCardWorkspace();

  const isExpanded = activeCardId === cardId || (activeCardId === null && defaultExpanded);
  const isMinimized = activeCardId !== null && activeCardId !== cardId;

  const handleCardClick = () => {
    if (!isExpanded) {
      setActiveCardId(cardId);
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isExpanded) {
      setActiveCardId(null);
    } else {
      setActiveCardId(cardId);
    }
  };

  return (
    <motion.div
      id={cardId}
      layout
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleCardClick}
      className={`rounded-2xl relative transition-all duration-300 hud-corner border ${
        isExpanded
          ? 'bg-white border-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.22),0_8px_30px_rgba(6,182,212,0.10)] ring-1 ring-cyan-200 z-20 scale-[1.01]'
          : isMinimized
          ? 'bg-white/70 border-slate-200 opacity-70 hover:opacity-95 cursor-pointer hover:border-cyan-200 hover:scale-[0.99] z-10'
          : 'bg-white border-cyan-100 shadow-glass z-10'
      } ${className}`}
    >
      {/* Specular top edge highlight */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl pointer-events-none transition-opacity ${
          isExpanded
            ? 'bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-80'
            : 'bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent opacity-40'
        }`}
      />

      <div className="p-5 sm:p-6 space-y-4">
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3.5">
          <div className="flex items-start gap-3">
            {icon && (
              <div
                className={`p-2 rounded-xl border transition-colors ${
                  isExpanded
                    ? 'bg-cyan-50 border-cyan-200 text-cyan-600 shadow-[0_0_10px_rgba(6,182,212,0.20)]'
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                {icon}
              </div>
            )}
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 tracking-wide">
                  {title}
                </h3>
                {badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-50 text-cyan-600 border border-cyan-200">
                    {badge}
                  </span>
                )}
                {isExpanded && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-600 font-mono text-[9px] font-bold border border-cyan-200">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>FOCUSED</span>
                  </span>
                )}
              </div>
              {subtitle && (
                <p className="text-xs font-mono text-cyan-500/80">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Expand/Minimize Button */}
          <div className="flex items-center gap-2">
            {actions}
            <button
              type="button"
              onClick={handleToggle}
              className={`p-1.5 rounded-lg border font-mono text-xs transition-colors ${
                isExpanded
                  ? 'bg-cyan-50 text-cyan-600 border-cyan-200 hover:bg-cyan-100'
                  : 'bg-slate-50 text-slate-400 border-slate-200 hover:text-slate-700 hover:border-slate-300'
              }`}
              title={isExpanded ? 'Minimize Card' : 'Expand Card'}
            >
              {isExpanded ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Card Body */}
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 font-sans text-sm text-slate-700"
            >
              {children}
            </motion.div>
          ) : (
            <motion.div
              key="minimized"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 text-xs text-slate-500 font-sans"
            >
              {summaryContent ? (
                summaryContent
              ) : (
                <p className="line-clamp-2">
                  Click card or ask REVA AI to expand and inspect full specifications.
                </p>
              )}
              <div className="flex items-center gap-1 font-mono text-[11px] text-cyan-500 pt-1">
                <span>Click to expand card</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
