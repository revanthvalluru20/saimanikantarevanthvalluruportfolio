import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Cpu, Menu, X, Volume2, VolumeX } from 'lucide-react';

interface GlassNavbarProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

export const GlassNavbar: React.FC<GlassNavbarProps> = ({
  isMuted,
  onToggleMute
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home / REVA AI' },
    { to: '/about', label: 'About Me' },
    { to: '/skills', label: 'Skills' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/architecture', label: 'Architecture Lab' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-cyan-200/60 shadow-[0_2px_20px_rgba(6,182,212,0.10)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 text-left focus:outline-none group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 border border-cyan-300 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5 text-cyan-600 group-hover:animate-pulse" />
          </div>
          <div>
            <div className="font-mono text-xs font-bold text-slate-800 tracking-wider flex items-center gap-1.5">
              <span>STARK IND.</span>
              <span className="text-cyan-500">//</span>
              <span>REVA AI</span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-[9px] text-cyan-600">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
                ONLINE
              </span>
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              REVANTH VALLURU // ADAPTIVE WORKSPACE
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-50/90 p-1.5 rounded-xl border border-slate-200 font-mono text-xs">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-white font-bold shadow-[0_0_12px_rgba(6,182,212,0.40)]'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleMute}
            className={`px-3 py-1.5 rounded-xl border font-mono text-xs transition-colors flex items-center gap-1.5 ${
              isMuted
                ? 'bg-slate-50 text-slate-400 border-slate-200 hover:border-slate-300'
                : 'bg-cyan-50 text-cyan-600 border-cyan-200 hover:bg-cyan-100 shadow-sm'
            }`}
            title={isMuted ? 'Audio muted — Click to enable REVA AI voice' : 'Audio active — Click to mute REVA AI voice'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-500 animate-pulse" />}
            <span className="hidden sm:inline">{isMuted ? 'Muted' : 'Voice ON'}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 border-b border-cyan-200/60 px-4 pt-3 pb-5 space-y-1.5 font-mono text-xs backdrop-blur-2xl">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-cyan-50 hover:text-cyan-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
