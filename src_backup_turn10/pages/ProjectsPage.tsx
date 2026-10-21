import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Filter, ExternalLink, Github, GitBranch, CheckCircle2, X, ArrowRight, ShieldCheck, Terminal, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types/portfolio';
import { HUDLabel } from '../components/HUDLabel';
import { AdaptiveCard } from '../components/AdaptiveCard';

export const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Projects');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All Projects', 'Web Development', 'AI and NLP', 'Data Analytics', 'Games'];

  const filteredProjects = selectedFilter === 'All Projects'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  const featuredProject = projectsData.find(p => p.id === 'vibeverse') || projectsData[0];
  const secondaryProjects = filteredProjects.filter(p => selectedFilter !== 'All Projects' ? true : p.id !== 'vibeverse');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-cyan-100 pb-5">
        <div className="space-y-1.5">
          <HUDLabel
            label="PROJECT SHOWCASE // EDITORIAL BENTO GRID"
            icon={<Layers className="w-3.5 h-3.5 text-cyan-600" />}
            badge="6 VERIFIED WORKS"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Verified Engineering Works & Systems
          </h1>
          <p className="text-sm text-slate-600 font-mono max-w-2xl">
            Documented portfolio projects spanning real-time full-stack architectures, interactive AI developer workspaces, healthcare data analytics, and interactive games.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 font-mono text-xs overflow-x-auto shadow-xs">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-2 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedFilter === cat
                  ? 'bg-cyan-500 text-white font-bold shadow-[0_0_12px_rgba(6,182,212,0.30)]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Bento Grid Layout */}
      {selectedFilter === 'All Projects' ? (
        <div className="space-y-6">
          {/* FEATURED BENTO HERO: VibeVerse */}
          <AdaptiveCard
            cardId="project-vibeverse"
            title={featuredProject.title}
            subtitle={featuredProject.subtitle}
            icon={<Sparkles className="w-5 h-5 text-cyan-600" />}
            badge="FEATURED SYSTEM"
            defaultExpanded={true}
            summaryContent={
              <p className="text-xs text-slate-600">
                <strong>{featuredProject.title}</strong>: {featuredProject.overview}
              </p>
            }
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-1">
              {/* Left Image Preview */}
              <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-cyan-200 shadow-sm group">
                <div className="aspect-[16/9] w-full bg-slate-100 relative overflow-hidden">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 border border-cyan-200 text-cyan-800 font-mono text-xs font-bold backdrop-blur-md shadow-xs">
                    REAL-TIME SOCIAL & GAMING
                  </div>
                </div>
              </div>

              {/* Right Content & Actions */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyan-600 uppercase font-bold tracking-wider">
                    {featuredProject.category}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {featuredProject.overview}
                  </p>
                </div>

                {/* Key Features highlights */}
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                    <span>Real-time communication & multiplayer sync via Socket.io</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                    <span>JWT auth & OTP email verification with Brevo API</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                    <span>REST API controllers with Node.js & MongoDB models</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredProject.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/architecture?project=vibeverse"
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] flex items-center gap-1.5"
                  >
                    <GitBranch className="w-4 h-4" />
                    <span>View Architecture</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(featuredProject)}
                    className="px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-300 text-slate-600 hover:text-cyan-700 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </AdaptiveCard>

          {/* SECONDARY BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <AdaptiveCard
                key={project.id}
                cardId={`project-${project.id}`}
                title={project.title}
                subtitle={project.subtitle}
                badge={project.category}
                defaultExpanded={false}
                summaryContent={
                  <div className="space-y-2">
                    <div className="aspect-[16/10] rounded-lg overflow-hidden bg-slate-100 relative border border-slate-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter brightness-95"
                      />
                    </div>
                    <p className="line-clamp-2 text-xs text-slate-600">
                      {project.overview}
                    </p>
                  </div>
                }
              >
                <div className="space-y-3 pt-1">
                  {/* Card Image Preview */}
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative border border-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-95"
                    />
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    {project.overview}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProject(project);
                      }}
                      className="text-xs font-mono text-cyan-600 hover:text-cyan-700 font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Details & Metrics</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.hasArchitecture && (
                        <Link
                          to={`/architecture?project=${project.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200 hover:border-cyan-400 text-cyan-700 transition-colors"
                          title="View System Architecture"
                        >
                          <GitBranch className="w-3.5 h-3.5" />
                        </Link>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-colors"
                          title="Open Live Demonstration"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-cyan-300 text-slate-600 hover:text-cyan-700 transition-colors"
                          title="GitHub Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AdaptiveCard>
            ))}
          </div>
        </div>
      ) : (
        /* Filtered List View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <AdaptiveCard
              key={project.id}
              cardId={`project-${project.id}`}
              title={project.title}
              subtitle={project.subtitle}
              badge={project.category}
              defaultExpanded={false}
              summaryContent={
                <div className="space-y-2">
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-slate-100 relative border border-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-95"
                    />
                  </div>
                  <p className="line-clamp-2 text-xs text-slate-600">
                    {project.overview}
                  </p>
                </div>
              }
            >
              <div className="space-y-3 pt-1">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative border border-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-95"
                  />
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProject(project);
                    }}
                    className="text-xs font-mono text-cyan-600 hover:text-cyan-700 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Details & Metrics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.hasArchitecture && (
                      <Link
                        to={`/architecture?project=${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200 hover:border-cyan-400 text-cyan-700 transition-colors"
                        title="View System Architecture"
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                      </Link>
                    )}

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-colors"
                        title="Open Live Demonstration"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-cyan-300 text-slate-600 hover:text-cyan-700 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AdaptiveCard>
          ))}
        </div>
      )}

      {/* Interactive Project Details Modal Overlay */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 border border-cyan-200 shadow-2xl space-y-6">
            {/* Top Close Button */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-600 font-bold uppercase">
                  {activeModalProject.category} // SYSTEM TELEMETRY
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-500">
                  {activeModalProject.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-cyan-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <p className="text-sm text-slate-700 leading-relaxed">
              {activeModalProject.overview}
            </p>

            {/* Key Features */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-cyan-700 font-semibold tracking-wider flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-600" />
                <span>Documented Key Features:</span>
              </div>
              <div className="space-y-1.5">
                {activeModalProject.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contributions */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-cyan-700 font-semibold tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                <span>Engineering Contributions:</span>
              </div>
              <div className="space-y-1.5">
                {activeModalProject.contributions.map((cont, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span>{cont}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-slate-500 uppercase">
                Applied Technologies:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {activeModalProject.hasArchitecture && (
                  <Link
                    to={`/architecture?project=${activeModalProject.id}`}
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <GitBranch className="w-4 h-4" />
                    <span>Open in Architecture Lab</span>
                  </Link>
                )}

                {activeModalProject.liveDemoUrl && (
                  <a
                    href={activeModalProject.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demonstration</span>
                  </a>
                )}
              </div>

              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 hover:border-cyan-300 text-slate-700 font-mono text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
