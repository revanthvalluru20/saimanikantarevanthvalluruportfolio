import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Home, User, Briefcase, BookOpen, Image, Award, Mail
} from 'lucide-react';

interface SidebarNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'hero',           icon: Home,      label: 'Home' },
  { id: 'about',          icon: User,      label: 'About' },
  { id: 'experience',     icon: Briefcase, label: 'Experience' },
  { id: 'skills',         icon: BookOpen,  label: 'Skills' },
  { id: 'portfolio',      icon: Image,     label: 'Projects' },
  { id: 'certifications', icon: Award,     label: 'Certifications' },
  { id: 'contact',        icon: Mail,      label: 'Contact' },
];

export const SidebarNav: React.FC<SidebarNavProps> = ({ activeSection, onNavigate }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <aside className="fixed left-0 top-0 h-full z-50 flex items-center">
      <nav className="ml-3 sm:ml-4 flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur-md border border-[#D7EAF8] rounded-2xl shadow-sm shadow-[#087CF0]/8 py-3 px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredId === item.id;
          const IconComp = item.icon;

          return (
            <div key={item.id} className="relative flex items-center" style={{ isolation: 'isolate' }}>
              {/* Active indicator dot on left edge */}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-dot"
                  className="absolute -left-2 w-1 h-5 bg-gradient-to-b from-[#087CF0] to-[#12B8F5] rounded-r-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              {/* Tooltip */}
              {isHovered && (
                <div
                  className="absolute left-full ml-3 px-3 py-1.5 bg-[#10233F] text-white text-xs font-semibold rounded-xl shadow-lg whitespace-nowrap z-[9999] pointer-events-none"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  {item.label}
                  {/* Tooltip arrow */}
                  <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#10233F]" />
                </div>
              )}

              <button
                type="button"
                onClick={() => onNavigate(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={item.label}
                className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-[#087CF0] text-white shadow-md shadow-[#087CF0]/30'
                    : 'text-[#526B8A] hover:bg-[#EFF8FF] hover:text-[#087CF0]'
                }`}
              >
                <IconComp className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};
