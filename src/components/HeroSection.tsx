import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Folder, GraduationCap, Code2, Zap, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden select-none"
    >
      {/* ── Soft glowing ambient light orbs ─────────────────── */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 75% 30%, rgba(18,184,245,0.14) 0%, rgba(8,124,240,0.08) 35%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 80%, rgba(18,184,245,0.12) 0%, transparent 60%)',
        }}
      />

      {/* ── Subtle glowing curved orbital vector lines ───────── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M 600,450 C 750,550 1100,560 1350,380"
          stroke="url(#orbitGradient1)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.45"
        />
        <path
          d="M 680,180 C 850,80 1200,120 1400,280"
          stroke="url(#orbitGradient2)"
          strokeWidth="1.2"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="orbitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#12B8F5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#087CF0" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="orbitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#087CF0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#12B8F5" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── Main Two-Column Container ───────────────────────── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-6">

        {/* ── LEFT COLUMN: Text, Buttons, Badges ────────────── */}
        <div className="w-full lg:w-[48%] space-y-5 text-center lg:text-left z-10">

          {/* "HI, I'M" small label */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#526B8A] uppercase"
          >
            HI, I'M
          </motion.p>

          {/* Giant name — "Revanth" in navy / "Valluru" in vibrant blue */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="leading-[1.04] font-extrabold font-raleway tracking-tight"
            style={{ fontSize: 'clamp(3.2rem, 6.5vw, 5.2rem)' }}
          >
            <span className="block text-[#10233F]">Revanth</span>
            <span className="block text-[#087CF0]">Valluru</span>
          </motion.h1>

          {/* Role subtitle with cyan underline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.17 }}
            className="space-y-1.5"
          >
            <p className="text-sm sm:text-base font-semibold text-[#10233F] leading-snug">
              Full Stack Developer
              <span className="text-[#087CF0] mx-2">|</span>
              Android Developer
              <span className="text-[#087CF0] mx-2">|</span>
              AI Application Developer
            </p>
            <div className="h-[3px] w-20 bg-gradient-to-r from-[#087CF0] to-[#12B8F5] rounded-full mx-auto lg:mx-0" />
          </motion.div>

          {/* Bio paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="text-[13px] sm:text-sm text-[#526B8A] max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            I build production-ready web and mobile applications, and
            AI-powered interfaces with clean code, modern architecture
            and a focus on real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.33 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1"
          >
            {/* Hire Me */}
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#087CF0] to-[#12B8F5] hover:from-[#0670d4] hover:to-[#0da8e0] text-white text-sm font-semibold shadow-lg shadow-[#087CF0]/30 hover:shadow-[#087CF0]/45 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* View Projects */}
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F0F7FF] text-[#10233F] text-sm font-semibold border border-[#D7EAF8] hover:border-[#087CF0]/50 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Folder className="w-4 h-4 text-[#087CF0]" />
              <span>View Projects</span>
            </button>
          </motion.div>

          {/* Achievement Row — 3 items with dividers */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.42 }}
            className="flex items-center justify-center lg:justify-start gap-5 sm:gap-6 pt-3 border-t border-[#D7EAF8]/80"
          >
            {/* VIT-AP */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#EFF8FF] text-[#087CF0] flex items-center justify-center border border-[#D7EAF8] flex-shrink-0">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <p className="text-[13px] font-extrabold text-[#10233F]">VIT-AP</p>
                <p className="text-[11px] text-[#526B8A]">University</p>
              </div>
            </div>

            <div className="h-7 w-px bg-[#D7EAF8]" />

            {/* Full Stack */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#EFF8FF] text-[#087CF0] flex items-center justify-center border border-[#D7EAF8] flex-shrink-0">
                <Code2 className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <p className="text-[13px] font-extrabold text-[#10233F]">Full Stack</p>
                <p className="text-[11px] text-[#526B8A]">Developer</p>
              </div>
            </div>

            <div className="h-7 w-px bg-[#D7EAF8]" />

            {/* Problem Solver */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#EFF8FF] text-[#087CF0] flex items-center justify-center border border-[#D7EAF8] flex-shrink-0">
                <Zap className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <p className="text-[13px] font-extrabold text-[#10233F]">Problem Solver</p>
                <p className="text-[11px] text-[#526B8A]">Always Learning</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Developer Showcase Image ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[52%] flex items-center justify-center lg:justify-end relative z-10 mt-4 lg:mt-0"
        >
          <div
            className="relative select-none w-full max-w-[660px]"
            style={{
              /*
               * Multi-stop mask that:
               *  – fades in from the LEFT (transparent → opaque over 15%)
               *  – fades in from the TOP  (transparent → opaque over 10%)
               *  – fades out at the BOTTOM (opaque → transparent over last 12%)
               *  – fades out on the RIGHT edge (opaque → transparent over last 8%)
               * Combined with mix-blend-mode: multiply the light-blue JPG background
               * dissolves perfectly into the page background.
               */
              WebkitMaskImage: [
                'linear-gradient(to right,  transparent 0%, black 18%, black 92%, transparent 100%)',
                'linear-gradient(to bottom, transparent 0%, black 10%, black 88%, transparent 100%)',
              ].join(', '),
              maskImage: [
                'linear-gradient(to right,  transparent 0%, black 18%, black 92%, transparent 100%)',
                'linear-gradient(to bottom, transparent 0%, black 10%, black 88%, transparent 100%)',
              ].join(', '),
              WebkitMaskComposite: 'intersect',
              maskComposite: 'intersect',
            }}
          >
            <img
              src={getAssetUrl('assets/img/revanth-hero-showcase.jpg')}
              alt="Revanth Valluru - Full Stack Developer"
              className="w-full h-auto object-contain"
              style={{ mixBlendMode: 'multiply' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = getAssetUrl('assets/img/Revanth Valluru profile.png');
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
