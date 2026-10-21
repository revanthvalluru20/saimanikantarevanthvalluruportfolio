import React, { useState } from 'react';
import { Terminal, Menu, X, Cpu, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  isMuted: boolean;
  onToggleMute: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isMuted,
  onToggleMute,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home / REVA AI' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'architecture', label: 'Architecture Lab' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040814]/85 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.25)] group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <div className="font-mono text-xs font-bold text-slate-100 tracking-wider flex items-center gap-1.5">
              <span>REVA AI</span>
              <span className="text-cyan-400">//</span>
              <span>REVANTH VALLURU</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>FULL STACK AI COMMAND CENTER</span>
            </div>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-950/70 p-1.5 rounded-xl border border-slate-800 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Audio toggle button */}
          <button
            type="button"
            onClick={onToggleMute}
            className={`p-2 rounded-xl border font-mono text-xs transition-colors flex items-center gap-1.5 ${
              isMuted
                ? 'bg-slate-900 text-slate-500 border-slate-800'
                : 'bg-cyan-950/40 text-cyan-400 border-cyan-500/40 hover:bg-cyan-900/50 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
            }`}
            title={isMuted ? "Audio muted (Click to enable speech)" : "Audio enabled (Click to mute speech)"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            <span className="hidden sm:inline">{isMuted ? 'Muted' : 'Audio ON'}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-cyan-500/30 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-mono text-xs flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>{item.label}</span>
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
