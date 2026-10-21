import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Database, Cloud, Wrench, CheckCircle, HelpCircle } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { SkillCategory } from '../types/portfolio';

interface SkillsSectionProps {
  onAskQuestion: (question: string) => void;
  initialCategory?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  onAskQuestion,
  initialCategory
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(initialCategory || 'programming');

  const selectedCategory: SkillCategory =
    skillCategories.find(c => c.id === selectedCategoryId) || skillCategories[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-blue-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-purple-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-teal-400" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
          <Server className="w-3.5 h-3.5 text-cyan-400" />
          <span>TECHNICAL SUBSYSTEM MATRIX // DOCUMENTED SKILLS</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Technical Skills & Tooling
        </h2>
        <p className="text-sm text-slate-400 font-mono max-w-2xl">
          Organized into six verified domains backed by documented implementations and projects.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5">
        {skillCategories.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all duration-200 border ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.title}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isSelected ? 'bg-slate-950/40 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.skills.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Category Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {selectedCategory.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 space-y-2.5 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-1.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>{skill.name}</span>
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 block font-semibold mb-0.5">
                    Verified Application:
                  </span>
                  <span className="text-slate-300 text-[11px]">{skill.evidence}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onAskQuestion(`How have you used ${skill.name} in your projects?`)}
                  className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <HelpCircle className="w-3 h-3" />
                  <span>Ask REVA AI about {skill.name}</span>
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
