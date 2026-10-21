import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Cpu, Sparkles, Building2, Award } from 'lucide-react';
import { experienceData, educationData, certificationsData } from '../data/experience';

interface ExperienceSectionProps {
  onAskExperience: () => void;
  onAskAzureTranslation: () => void;
  onAskPaymentSso: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onAskExperience,
  onAskAzureTranslation,
  onAskPaymentSso
}) => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span>PRODUCTION TELEMETRY // CAREER & INTERNSHIP MILESTONES</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Experience & Engineering Timeline
        </h2>
        <p className="text-sm text-slate-400 font-mono max-w-2xl">
          Verified production engineering work at Destini.ai alongside foundational academic qualifications.
        </p>
      </div>

      {/* Featured Internship Card: Destini.ai */}
      {experienceData.map((exp) => (
        <div
          key={exp.id}
          className="p-6 md:p-8 rounded-2xl glass-panel border border-cyan-500/40 shadow-glass space-y-6 relative overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400" />

          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                <Building2 className="w-4 h-4" />
                <span className="font-bold tracking-wider">{exp.company}</span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold">
                  {exp.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {exp.role}
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </span>
                <span>Location: {exp.location}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onAskExperience}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Ask REVA AI About Destini.ai</span>
            </button>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {exp.description}
          </p>

          {/* Responsibilities Grid */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Documented Responsibilities & Deliverables:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {exp.responsibilities.map((resp, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverable Deep-Dive Buttons */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono text-slate-400">
              EXPLORE HIGHLIGHTED INTEGRATIONS:
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onAskAzureTranslation}
                className="px-3 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 font-mono text-xs transition-colors"
              >
                i18n & Azure Translation
              </button>
              <button
                type="button"
                onClick={onAskPaymentSso}
                className="px-3 py-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/40 text-blue-300 font-mono text-xs transition-colors"
              >
                Payout SSO Flow
              </button>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <div className="text-[10px] font-mono uppercase text-slate-500 mb-2">
              Documented Technologies:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {exp.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-300 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Education Timeline */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono text-sm">//</span>
          <span>Education Timeline</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-400 font-bold">{edu.score}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                  {edu.period}
                </span>
              </div>
              <h4 className="text-base font-bold text-white">{edu.degree}</h4>
              <p className="text-xs text-cyan-300 font-mono">{edu.field}</p>
              <p className="text-xs text-slate-400">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications and Externships */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-400" />
          <span>Certifications & Externships</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-400 font-bold uppercase">{cert.issuer}</span>
                <span className="font-mono text-xs text-slate-500">{cert.period}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-200">{cert.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
