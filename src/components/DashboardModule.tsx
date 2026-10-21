import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Cloud, GitBranch, Terminal, Calendar, ChevronRight } from 'lucide-react';

interface DashboardModuleProps {
  id: string;
  title: string;
  category: string;
  summary: string;
  statusBadge: string;
  itemCount: number;
  iconName: string;
  isActive?: boolean;
  onClick: () => void;
}

export const DashboardModule: React.FC<DashboardModuleProps> = ({
  title,
  category,
  summary,
  statusBadge,
  itemCount,
  iconName,
  isActive = false,
  onClick
}) => {
  const renderIcon = () => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-purple-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-amber-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-rose-400" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-teal-400" />;
      default:
        return <Server className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-200 glass-panel border ${
        isActive
          ? 'border-cyan-400 bg-cyan-950/30 shadow-[0_0_25px_rgba(0,240,255,0.25)] ring-1 ring-cyan-400/50'
          : 'border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 shadow-lg'
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-pressed={isActive}
    >
      {/* Corner Tech Markings */}
      <div className="absolute top-2 right-2 flex items-center gap-1 font-mono text-[10px] text-slate-500">
        <span>[{itemCount} NODES]</span>
      </div>

      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-inner">
          {renderIcon()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[10px] uppercase font-semibold tracking-wider text-cyan-400/80">
              {category}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.2 rounded border border-emerald-500/30">
              {statusBadge}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 truncate">
            {title}
          </h3>

          <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {summary}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400">
        <span className="text-[11px] text-slate-500">CLICK TO INSPECT MODULE</span>
        <ChevronRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
};
