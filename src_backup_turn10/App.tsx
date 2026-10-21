import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavDrawer } from './components/NavDrawer';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { NextSectionButton } from './components/NextSectionButton';

type SectionId = 'hero' | 'about' | 'experience' | 'skills' | 'portfolio' | 'certifications' | 'contact';

const SECTIONS: SectionId[] = ['hero', 'about', 'experience', 'skills', 'portfolio', 'certifications', 'contact'];

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  const navigateTo = useCallback((sectionId: string) => {
    if (SECTIONS.includes(sectionId as SectionId)) {
      setActiveSection(sectionId as SectionId);
    }
  }, []);

  // Keyboard navigation between portfolio sections
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not intercept if user holds modifier keys
      if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
        return;
      }

      // Do not intercept when typing in form controls or editable areas
      const activeEl = document.activeElement as HTMLElement | null;
      if (activeEl) {
        const tagName = activeEl.tagName.toLowerCase();
        if (
          tagName === 'input' ||
          tagName === 'textarea' ||
          tagName === 'select' ||
          activeEl.isContentEditable ||
          activeEl.getAttribute('role') === 'textbox'
        ) {
          return;
        }
      }

      // Do not intercept when navigation drawer or a modal/dialog is open
      const isDrawerOpen = Boolean(document.querySelector('.nav-drawer'));
      const isModalOpen = Boolean(document.querySelector('[role="dialog"]'));
      if (isDrawerOpen || isModalOpen) {
        return;
      }

      const currentIndex = SECTIONS.indexOf(activeSection);

      switch (e.key) {
        case 'ArrowDown': {
          if (currentIndex < SECTIONS.length - 1) {
            e.preventDefault();
            navigateTo(SECTIONS[currentIndex + 1]);
          }
          break;
        }
        case 'ArrowUp': {
          if (currentIndex > 0) {
            e.preventDefault();
            navigateTo(SECTIONS[currentIndex - 1]);
          }
          break;
        }
        case 'Home': {
          if (currentIndex !== 0) {
            e.preventDefault();
            navigateTo('hero');
          }
          break;
        }
        case 'End': {
          if (currentIndex !== SECTIONS.length - 1) {
            e.preventDefault();
            navigateTo('contact');
          }
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection, navigateTo]);

  // Handle browser hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && SECTIONS.includes(hash as SectionId)) {
      setActiveSection(hash as SectionId);
    }
  }, []);

  // Update hash when section changes (enables back/forward nav)
  useEffect(() => {
    window.history.replaceState(null, '', `#${activeSection}`);
  }, [activeSection]);

  // Reset scroll position to top whenever active section changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [activeSection]);

  // Handle popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && SECTIONS.includes(hash as SectionId)) {
        setActiveSection(hash as SectionId);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroSection onNavigate={navigateTo} />;
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'skills':
        return <SkillsSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'certifications':
        return <CertificationsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="app-root">
      {/* Floating nav drawer — always on top */}
      <NavDrawer activeSection={activeSection} onNavigate={navigateTo} />

      {/* Floating next-section button — visible on all sections except contact */}
      <NextSectionButton currentSection={activeSection} onNavigate={navigateTo} />

      {/* Full-screen section content with fade transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          className="section-container"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
