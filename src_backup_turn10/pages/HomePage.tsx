import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Terminal, ArrowRight, Layers, User, Briefcase, Code2, Bot } from 'lucide-react';
import { ArcReactor } from '../components/ArcReactor';
import { AICore } from '../components/AICore';
import { SystemTelemetry } from '../components/SystemTelemetry';
import { GlassPanel } from '../components/GlassPanel';
import { AdaptiveCard } from '../components/AdaptiveCard';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Telemetry HUD */}
      <SystemTelemetry state="idle" activeSection="HOME_WORKSPACE" />

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: Identity & Controls */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 font-mono text-xs w-fit shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>STARK IND. // REVA AI PROTOCOL v4.2 // MK-85</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Welcome to my digital workspace.
            </h1>
            <div className="text-base sm:text-lg text-cyan-600 font-mono font-medium">
              Valluru Sai Manikanta Revanth
            </div>
            <div className="text-xs sm:text-sm text-cyan-500/80 font-mono">
              Full Stack Developer · AI Enthusiast · Web Developer
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xl pt-2">
              Building responsive web platforms, real-time architectures, mobile applications, and interactive AI workspaces with modern engineering standards.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              to="/projects"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_18px_rgba(6,182,212,0.35)] hover:scale-105"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/about"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-slate-700 font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
            >
              <User className="w-4 h-4 text-cyan-500" />
              <span>About Me</span>
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 text-slate-600 font-mono text-xs flex items-center gap-2 transition-all shadow-sm"
            >
              <Bot className="w-4 h-4 text-cyan-500" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Arc Reactor Panel */}
          <GlassPanel className="p-6 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl" hudCorners>
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 font-mono text-xs text-cyan-600 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>ARC TELEMETRY & REVA AI</span>
              </div>
              <p className="text-xs text-slate-500 max-w-xs">
                Active core synchronized. Ask REVA AI anything using the floating console.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-4 text-[11px] font-mono text-slate-400 pt-1">
                <span>LATENCY: 12ms</span>
                <span>•</span>
                <span className="text-cyan-500 font-semibold">REVA AI ONLINE</span>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <ArcReactor size="md" active={false} />
              <div className="absolute inset-0 flex items-center justify-center">
                <AICore state="idle" onCoreClick={() => {}} subtitle="REVA AI" />
              </div>
            </div>
          </GlassPanel>
        </div>

        {/* RIGHT: REVA AI intro panel */}
        <div className="lg:col-span-5">
          <GlassPanel className="p-6 rounded-2xl space-y-4" hudCorners>
            <div className="flex items-center gap-2.5 border-b border-cyan-100 pb-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center">
                <Bot className="w-4 h-4 text-cyan-500" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  REVA AI
                  <span className="text-[10px] text-emerald-500 flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    ONLINE
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-400">ADAPTIVE HOLOGRAPHIC WORKSPACE</div>
              </div>
            </div>

            <div className="text-xs text-slate-500 font-mono space-y-1.5">
              <p className="text-slate-600">Try asking REVA AI:</p>
              {[
                'Tell me about yourself.',
                'What are your technical skills?',
                'Explain VibeVerse.',
                'Tell me about the Destini.ai internship.',
                'How can I contact you?'
              ].map(q => (
                <div key={q} className="px-3 py-2 rounded-lg bg-cyan-50/80 border border-cyan-100 text-slate-600 cursor-default hover:bg-cyan-100 hover:text-cyan-700 transition-colors text-[11px]">
                  "{q}"
                </div>
              ))}
              <p className="text-[11px] text-slate-400 pt-1">Use the floating REVA AI console (bottom-right) to ask.</p>
            </div>
          </GlassPanel>
        </div>
      </div>

      {/* ADAPTIVE CARD WORKSPACE */}
      <div className="space-y-4 pt-4 border-t border-cyan-100">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase text-cyan-600 font-semibold tracking-wider flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>ADAPTIVE CARD WORKSPACE // CLICK CARD TO EXPAND & FOCUS</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">AUTO FOCUS SYNCHRONIZED WITH REVA AI</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Profile */}
          <AdaptiveCard
            cardId="home-profile-card"
            title="Personnel Profile"
            subtitle="Full Stack Software Developer"
            icon={<User className="w-5 h-5 text-cyan-500" />}
            badge="VERIFIED"
            defaultExpanded={true}
            summaryContent={
              <p className="text-slate-500">Valluru Sai Manikanta Revanth — Full Stack Developer (VIT-AP CSE, 8.45 CGPA).</p>
            }
          >
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Computer Science & Engineering graduate from VIT-AP University (2021–2025, 8.45 CGPA). Experienced in scalable web architectures, Android apps, real-time Socket.io engines, and AI workflow integrations.
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-mono">
                <span className="text-cyan-600">Primary: React.js, Node.js, Express, MongoDB</span>
                <Link to="/about" className="text-cyan-500 hover:underline flex items-center gap-1">
                  <span>Full Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </AdaptiveCard>

          {/* Card 2: Destini.ai */}
          <AdaptiveCard
            cardId="home-destini-card"
            title="Destini.ai Internship"
            subtitle="Full Stack Developer Intern · Oct 2025–Present"
            icon={<Briefcase className="w-5 h-5 text-emerald-500" />}
            badge="CURRENT ROLE"
            summaryContent={
              <p className="text-slate-500">Active internship: UI/UX, React Native Android, Azure AI translation, SSO payout.</p>
            }
          >
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Key production deliverables include converting an existing web app to Android with React Native, multilingual support via Azure AI Translation, and implementing SSO payout workflows.
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-mono">
                <span className="text-emerald-600">Status: Active Production Work</span>
                <Link to="/experience" className="text-cyan-500 hover:underline flex items-center gap-1">
                  <span>View Timeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </AdaptiveCard>

          {/* Card 3: VibeVerse */}
          <AdaptiveCard
            cardId="home-vibeverse-card"
            title="VibeVerse Platform"
            subtitle="Gaming-Focused Social Media & Real-Time Sync"
            icon={<Layers className="w-5 h-5 text-purple-500" />}
            badge="FEATURED WORK"
            summaryContent={
              <p className="text-slate-500">Social platform with real-time messaging, multiplayer games, JWT auth, and Brevo OTP.</p>
            }
          >
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connects gamers in real-time with live chat and synchronized multiplayer gameplay using Socket.io, Node.js REST APIs, MongoDB, and transactional email verification via Brevo.
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-mono">
                <span className="text-purple-600">Stack: React, Node, Socket.io, MongoDB</span>
                <Link to="/projects" className="text-cyan-500 hover:underline flex items-center gap-1">
                  <span>Explore in Bento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </AdaptiveCard>

          {/* Card 4: Skills */}
          <AdaptiveCard
            cardId="home-skills-card"
            title="Technical Subsystem Matrix"
            subtitle="6 Verified Capability Domains"
            icon={<Code2 className="w-5 h-5 text-cyan-500" />}
            badge="6 DOMAINS"
            summaryContent={
              <p className="text-slate-500">Programming, Frontend, Backend, Databases, Cloud & Deployment, and Developer Tooling.</p>
            }
          >
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hands-on implementation across Python, JavaScript, R, React.js, React Native, Node.js, Express, MongoDB, SQL, Microsoft Azure, Socket.io, Postman, and Tableau.
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-mono">
                <span className="text-cyan-600">Zero Fabricated Percentages</span>
                <Link to="/skills" className="text-cyan-500 hover:underline flex items-center gap-1">
                  <span>Interactive Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </AdaptiveCard>
        </div>
      </div>
    </div>
  );
};
