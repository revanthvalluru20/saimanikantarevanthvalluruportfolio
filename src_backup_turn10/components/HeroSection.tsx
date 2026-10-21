import React, { useState, useEffect } from 'react';
import { Mail, Briefcase } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  // Pure, clean titles as requested (No Azure, No Node & Express)
  const words = [
    'Full Stack Developer',
    'Web Developer',
    'Android Developer',
    'AI Application Developer',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText.length + 1 === fullWord.length) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

  return (
    <section
      id="hero"
      className="hero relative min-h-[100svh] w-full flex flex-col justify-center items-center lg:items-start px-6 sm:px-12 md:px-16 lg:px-24 text-[#102A43] overflow-hidden select-none"
    >
      {/* Background: homebg1 asset with light translucent gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/img/homebg1.jpeg"
          alt="Home Background Workspace"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'assets/img/homebg1.jpeg';
          }}
        />
        {/* Translucent overlay maintaining white/light theme contrast and crisp text readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 relative z-10 py-12">
        {/* Left Column: Headline and Actions */}
        <div className="max-w-2xl space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-raleway tracking-tight text-[#102A43] leading-tight">
            Revanth Valluru
          </h1>

          <p className="text-xl sm:text-3xl md:text-4xl font-poppins text-[#526579]">
            I'm passionate{' '}
            <span className="text-[#0EA5E9] font-bold border-b-2 border-[#0EA5E9] pb-0.5">
              {currentText}
            </span>
            <span className="typed-cursor text-[#0EA5E9] font-light">|</span>
          </p>

          <p className="text-sm sm:text-base text-[#526579] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Full Stack &amp; Mobile App Engineer building production web solutions, React Native Android applications, and AI-powered interfaces with clean code and modern architecture.
          </p>

          {/* Buttons Section */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xs sm:text-sm font-semibold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-sky-500/25 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
            </button>

            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-[#102A43] hover:text-[#0EA5E9] text-xs sm:text-sm font-semibold border border-slate-300 hover:border-[#0EA5E9] shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              <span>View Projects</span>
            </button>
          </div>
        </div>

        {/* Right Column: Clean Blackish-Blue Navy Profile Card */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="w-72 sm:w-80 rounded-2xl bg-[#102235] border border-slate-700/60 shadow-2xl overflow-hidden hover:border-[#38BDF8] transition-all duration-300 group">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#172F46]">
              <img
                src="/assets/img/Revanth Valluru profile.png"
                alt="Revanth Valluru"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'assets/img/Revanth Valluru profile.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102235] via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-4 bg-[#102235] border-t border-slate-700/50 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold font-raleway text-[#F8FAFC]">Revanth Valluru</p>
                <p className="text-xs text-[#0EA5E9] font-medium">Full Stack &amp; Mobile Developer</p>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9] shadow-[0_0_8px_#0EA5E9]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
