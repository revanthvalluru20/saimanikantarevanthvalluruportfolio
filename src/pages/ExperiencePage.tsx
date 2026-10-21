import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Building2, Calendar, CheckCircle2, Cpu, Globe, KeyRound, Smartphone, Terminal, ArrowRight, GraduationCap } from 'lucide-react';
import { experienceData } from '../data/experience';
import { HUDLabel } from '../components/HUDLabel';
import { AdaptiveCard } from '../components/AdaptiveCard';

export const ExperiencePage: React.FC = () => {
  const destiniExp = experienceData[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-100 pb-5">
        <div className="space-y-1.5">
          <HUDLabel
            label="PRODUCTION MILESTONES // INDUSTRY INTERNSHIP TIMELINE"
            icon={<Briefcase className="w-3.5 h-3.5 text-cyan-600" />}
            badge="ACTIVE TELEMETRY"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Experience & Career Timeline
          </h1>
          <p className="text-sm text-slate-600 font-mono">
            Verified production engineering deliverables at Destini.ai alongside foundational academic credentials.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/architecture"
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.30)] flex items-center gap-1.5"
          >
            <Cpu className="w-4 h-4" />
            <span>Destini.ai Architecture</span>
          </Link>
        </div>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative border-l-2 border-cyan-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {/* MILESTONE 1: Destini.ai Full Stack Developer Internship */}
        <div className="relative space-y-4">
          {/* Glowing Timeline Marker */}
          <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-6 h-6 rounded-full bg-cyan-100 border-2 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-cyan-600 animate-ping" />
          </div>

          <AdaptiveCard
            cardId="destini-card"
            title={destiniExp.role}
            subtitle={`${destiniExp.company} • ${destiniExp.period} • ${destiniExp.location}`}
            icon={<Building2 className="w-5 h-5 text-cyan-600" />}
            badge={destiniExp.status}
            defaultExpanded={true}
            summaryContent={
              <p className="text-xs text-slate-600">
                Full Stack Developer Internship at <strong>{destiniExp.company}</strong> ({destiniExp.period}). Led Azure AI translation pipeline, React Native Android conversion, and SSO token verification.
              </p>
            }
          >
            {/* Destini.ai Content Body */}
            <div className="space-y-6">
              {/* Meta strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 text-cyan-700 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{destiniExp.period}</span>
                  </span>
                  <span>•</span>
                  <span>Location: {destiniExp.location}</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                    {destiniExp.status}
                  </span>
                </div>
                <div className="font-mono text-xs text-slate-500 bg-white px-2.5 py-1 rounded border border-slate-200">
                  ROLE ID: #DESTINI-FS-01
                </div>
              </div>

              {/* Overview Description */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                {destiniExp.description}
              </p>

              {/* Documented Responsibilities Grid */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-cyan-700 font-semibold tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-600" />
                  <span>VERIFIED PRODUCTION RESPONSIBILITIES & DELIVERABLES:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {destiniExp.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3 shadow-xs hover:border-cyan-300 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deep-Dive Highlight Cards */}
              <div className="space-y-3 pt-1">
                <div className="text-xs font-mono uppercase text-slate-500 font-semibold tracking-wider">
                  FEATURED ARCHITECTURAL SUBSYSTEMS AT DESTINI.AI:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {/* 1. Multilingual Support */}
                  <div className="p-3.5 rounded-xl bg-cyan-50/50 border border-cyan-100 space-y-1.5">
                    <div className="flex items-center gap-2 text-cyan-700 font-mono text-xs font-bold">
                      <Globe className="w-4 h-4 text-cyan-600" />
                      <span>Multilingual Engine</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Integrated Azure AI Translation Services with i18n, enabling automatic high-fidelity multilingual content rendering.
                    </p>
                  </div>

                  {/* 2. Mobile App Port */}
                  <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 space-y-1.5">
                    <div className="flex items-center gap-2 text-blue-700 font-mono text-xs font-bold">
                      <Smartphone className="w-4 h-4 text-blue-600" />
                      <span>React Native Android</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Converted web application architecture into a native Android app with mobile navigation and responsive layouts.
                    </p>
                  </div>

                  {/* 3. Payout & SSO */}
                  <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100 space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold">
                      <KeyRound className="w-4 h-4 text-purple-600" />
                      <span>SSO Payout Workflow</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Built single sign-on authentication token verification pipelines with backend APIs for payout operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Stack Strip */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="text-[11px] font-mono text-slate-500 uppercase">
                  Applied Technology Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {destiniExp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AdaptiveCard>
        </div>

        {/* MILESTONE 2: Academic Timeline Transition */}
        <div className="relative space-y-4">
          {/* Marker */}
          <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
          </div>

          <AdaptiveCard
            cardId="experience-academic-card"
            title="B.Tech in Computer Science and Engineering"
            subtitle="VIT-AP University • CGPA: 8.45 (2021 – 2025)"
            icon={<GraduationCap className="w-5 h-5 text-blue-600" />}
            badge="CGPA 8.45"
            defaultExpanded={false}
            summaryContent={
              <p className="text-xs text-slate-600">
                VIT-AP University (2021 – 2025) • CGPA: 8.45. Focus: Algorithms, Software Architecture, Full Stack Systems.
              </p>
            }
          >
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Specialized in core computer science, software engineering principles, full-stack systems, algorithmic problem solving, and modern distributed architectures.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between text-xs font-mono gap-2">
                <span className="text-slate-600">Intermediate: 88.6% • Secondary: 9.5 CGPA</span>
                <Link to="/about" className="text-cyan-600 hover:text-cyan-700 font-bold flex items-center gap-1">
                  <span>View Full Academic Record</span>
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
