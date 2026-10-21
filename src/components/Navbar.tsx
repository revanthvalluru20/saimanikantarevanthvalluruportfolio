import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience & Education' },
    { id: 'skills', label: 'Technical Skills' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-3.5 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 pointer-events-auto bg-white/90 backdrop-blur-md border border-[#D7EAF8] shadow-sm shadow-[#087CF0]/5 rounded-2xl px-4 sm:px-6 py-2.5">
        {/* Brand */}
        <button
          type="button"
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-1.5 focus:outline-none flex-shrink-0 group cursor-pointer text-left"
        >
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#10233F] group-hover:opacity-90 transition-opacity">
            Revanth
          </span>
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#087CF0] group-hover:text-[#12B8F5] transition-colors">
            Valluru
          </span>
        </button>

        {/* Navigation Items (Desktop & Mobile Scrollable Row) */}
        <nav
          className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 sm:px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#087CF0] font-semibold bg-[#EFF8FF]'
                    : 'text-[#526B8A] hover:text-[#087CF0] hover:bg-[#F7FBFF]'
                }`}
              >
                {item.label}

                {/* Subtle active indicator underline */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute bottom-0 inset-x-2.5 h-0.5 bg-gradient-to-r from-[#087CF0] to-[#12B8F5] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
