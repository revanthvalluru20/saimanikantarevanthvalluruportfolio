import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Cpu, Layers, Sparkles, CheckCircle } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelectQuestion: (question: string) => void;
  onOpenArchitecture?: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectQuestion,
  onOpenArchitecture
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col h-full shadow-lg"
    >
      {/* Project Thumbnail Image with Tech Badge */}
      <div className="relative h-48 md:h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback image gradient if asset is missing
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-[#040814]/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 font-mono text-[11px] font-semibold text-cyan-300">
            {project.category}
          </span>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-900/90 text-slate-300 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-400 transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 border border-cyan-400/60 transition-colors"
                title="Open Live Deployment"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-xl font-bold text-white tracking-wide">
            {project.title}
          </h3>
          <p className="text-xs text-cyan-300 font-mono">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Overview */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {project.overview}
        </p>

        {/* Tech Stack Pills */}
        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400 mb-1.5">
            Verified Stack:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-700 text-slate-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features Preview */}
        <div>
          <div className="text-[10px] font-mono uppercase text-cyan-400/90 mb-1.5 font-semibold">
            Key Architecture Features:
          </div>
          <ul className="space-y-1 text-xs text-slate-300">
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Engineering Deep Dive (Problem, Contribution, Challenges) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3.5 pt-3 border-t border-slate-800 text-xs"
            >
              {/* Documented Contributions */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-400 font-semibold mb-2">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Documented Contributions:</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  {project.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono mt-0.5">›</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Complete Key Features */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 font-semibold mb-2">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Key Technical Capabilities:</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  {project.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action to view interactive architecture */}
              {onOpenArchitecture && project.hasArchitecture && (
                <button
                  type="button"
                  onClick={() => onOpenArchitecture(project.id)}
                  className="w-full py-2 px-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 text-cyan-300 font-mono text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Launch Interactive System Architecture</span>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand / Collapse Button */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/60 text-slate-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
        >
          <span>{isExpanded ? "Collapse Engineering Details" : "View Full Engineering Deep Dive"}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Related Interview Questions Chips */}
        {project.relatedQuestions && project.relatedQuestions.length > 0 && (
          <div className="pt-2 border-t border-slate-800">
            <div className="flex items-center gap-1 font-mono text-[10px] uppercase text-cyan-400 mb-1.5 font-semibold">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Ask REVA AI About This Project:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.relatedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelectQuestion(q)}
                  className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-cyan-950/60 border border-slate-700/80 hover:border-cyan-400/60 text-slate-300 hover:text-cyan-200 text-[11px] transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
