import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SidebarNav } from './components/SidebarNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { NextSectionButton } from './components/NextSectionButton';

type SectionId = 'hero' | 'about' | 'experience' | 'skills' | 'portfolio' | 'certifications' | 'contact';
// Trigger HMR refresh

const SECTIONS: SectionId[] = ['hero', 'about', 'experience', 'skills', 'portfolio', 'certifications', 'contact'];

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  const navigateTo = useCallback((sectionId: string) => {
    if (SECTIONS.includes(sectionId as SectionId)) {
      setActiveSection(sectionId as SectionId);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;

      const activeEl = document.activeElement as HTMLElement | null;
      if (activeEl) {
        const tag = activeEl.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select' || activeEl.isContentEditable) return;
      }

      if (document.querySelector('[role="dialog"]')) return;

      const currentIndex = SECTIONS.indexOf(activeSection);

      switch (e.key) {
        case 'ArrowDown':
          if (currentIndex < SECTIONS.length - 1) { e.preventDefault(); navigateTo(SECTIONS[currentIndex + 1]); }
          break;
        case 'ArrowUp':
          if (currentIndex > 0) { e.preventDefault(); navigateTo(SECTIONS[currentIndex - 1]); }
          break;
        case 'Home':
          if (currentIndex !== 0) { e.preventDefault(); navigateTo('hero'); }
          break;
        case 'End':
          if (currentIndex !== SECTIONS.length - 1) { e.preventDefault(); navigateTo('contact'); }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, navigateTo]);

  // Hash sync on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && SECTIONS.includes(hash as SectionId)) setActiveSection(hash as SectionId);
  }, []);

  // Hash sync on section change
  useEffect(() => {
    window.history.replaceState(null, '', `#${activeSection}`);
  }, [activeSection]);

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [activeSection]);

  // Hash sync on mount and hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && SECTIONS.includes(hash as SectionId)) setActiveSection(hash as SectionId);
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':          return <HeroSection onNavigate={navigateTo} />;
      case 'about':         return <AboutSection />;
      case 'experience':    return <ExperienceSection />;
      case 'skills':        return <SkillsSection />;
      case 'portfolio':     return <PortfolioSection />;
      case 'certifications':return <CertificationsSection />;
      case 'contact':       return <ContactSection />;
      default:              return <HeroSection onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="app-root">
      {/* Left Icon Sidebar */}
      <SidebarNav activeSection={activeSection} onNavigate={navigateTo} />

      {/* Spacer so content doesn't hide behind sidebar */}
      <div className="sidebar-placeholder" />

      {/* Circular next-section button */}
      <NextSectionButton currentSection={activeSection} onNavigate={navigateTo} />

      {/* Section Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="section-container"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
