import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, User, Briefcase, FileText, Image, Mail, Award,
  Menu, X, Github, Linkedin, Code, Terminal
} from 'lucide-react';

interface NavDrawerProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: 'hero',           label: 'Home',                    icon: Home },
  { id: 'about',          label: 'About',                   icon: User },
  { id: 'experience',     label: 'Experience & Education',  icon: Briefcase },
  { id: 'skills',         label: 'Technical Skills',        icon: FileText },
  { id: 'portfolio',      label: 'Projects',                icon: Image },
  { id: 'certifications', label: 'Certifications',          icon: Award },
  { id: 'contact',        label: 'Contact',                 icon: Mail },
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/sai-manikanta-revanth-valluru-a36198272/',
    title: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://github.com/revanthvalluru20?tab=repositories',
    title: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://leetcode.com/u/revanthvalluru2073/',
    title: 'LeetCode',
    icon: Code,
  },
  {
    href: 'mailto:saimanikantarevanthv@gmail.com',
    title: 'Email',
    icon: Mail,
  },
];

export const NavDrawer: React.FC<NavDrawerProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    closeDrawer();
  };

  // Escape key closes drawer
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeDrawer();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Focus trap: focus first element on open
  useEffect(() => {
    if (isOpen && firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* ── Floating Hamburger Button ── */}
      <button
        onClick={openDrawer}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="nav-menu-btn"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="nav-backdrop"
            onClick={closeDrawer}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ── Drawer Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="nav-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              ref={firstFocusableRef}
              onClick={closeDrawer}
              aria-label="Close navigation menu"
              className="drawer-close-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Card */}
            <div className="drawer-profile">
              <div className="drawer-avatar-ring">
                <img
                  src="/assets/img/Revanth Valluru profile.png"
                  alt="Valluru Sai Manikanta Revanth"
                  className="drawer-avatar"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'assets/img/Revanth Valluru profile.png';
                  }}
                />
              </div>
              <h2 className="drawer-name">Revanth Valluru</h2>
              <p className="drawer-title">Full Stack Developer · VIT-AP</p>

              {/* Social links */}
              <div className="drawer-socials">
                {socialLinks.map(({ href, title, icon: Icon }) => (
                  <a
                    key={title}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    title={title}
                    className="drawer-social-btn"
                    onClick={closeDrawer}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="drawer-divider" />

            {/* Navigation items */}
            <nav className="drawer-nav" aria-label="Main navigation">
              <ul>
                {navItems.map(({ id, label, icon: Icon }) => {
                  const isActive = activeSection === id;
                  return (
                    <li key={id}>
                      <button
                        onClick={() => handleNavClick(id)}
                        className={`drawer-nav-item ${isActive ? 'active' : ''}`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className="drawer-nav-icon">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span>{label}</span>
                        {isActive && <span className="drawer-active-dot" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer */}
            <div className="drawer-footer">
              <Terminal className="w-3 h-3 text-[#0EA5E9]" />
              <span>© {new Date().getFullYear()} Revanth Valluru</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
