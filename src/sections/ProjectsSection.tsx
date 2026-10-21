import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Filter } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsSectionProps {
  onSelectQuestion: (question: string) => void;
  onOpenArchitecture: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectQuestion,
  onOpenArchitecture
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Projects');

  const categories = ['All Projects', 'Web Development', 'AI and NLP', 'Data Analytics', 'Games'];

  const filteredProjects = selectedFilter === 'All Projects'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>PROJECT EXPLORER // VERIFIED PORTFOLIO WORKS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Featured Projects & Work
          </h2>
          <p className="text-sm text-slate-400 font-mono max-w-2xl">
            Seven documented engineering implementations across full-stack systems, interactive AI workspaces, data analytics, and games.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs overflow-x-auto">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-2 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedFilter === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            id={`project-${project.id}`}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }
              }
            }}
          >
            <ProjectCard
              project={project}
              onSelectQuestion={onSelectQuestion}
              onOpenArchitecture={onOpenArchitecture}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
