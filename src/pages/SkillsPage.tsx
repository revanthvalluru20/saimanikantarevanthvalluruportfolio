import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Layout, Server, Database, Cloud, Wrench, CheckCircle, ArrowRight, Sparkles, Terminal, Layers, GitBranch, ShieldCheck } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { SkillItem, SkillCategory } from '../types/portfolio';
import { GlassPanel } from '../components/GlassPanel';
import { HUDLabel } from '../components/HUDLabel';

export const SkillsPage: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('programming');
  const [selectedSkillName, setSelectedSkillName] = useState<string>('Python');

  const selectedCategory: SkillCategory =
    skillCategories.find(c => c.id === selectedCategoryId) || skillCategories[0];

  const currentSkill: SkillItem =
    selectedCategory.skills.find(s => s.name === selectedSkillName) || selectedCategory.skills[0];

  const handleCategoryChange = (catId: string) => {
    setSelectedCategoryId(catId);
    const cat = skillCategories.find(c => c.id === catId);
    if (cat && cat.skills.length > 0) {
      setSelectedSkillName(cat.skills[0].name);
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-cyan-600" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-blue-600" />;
      case 'Server':
        return <Server className="w-4 h-4 text-purple-600" />;
      case 'Database':
        return <Database className="w-4 h-4 text-emerald-600" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-amber-600" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-teal-600" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-100 pb-5">
        <div className="space-y-1.5">
          <HUDLabel
            label="TECHNICAL SUBSYSTEM MATRIX // 6 DOMAINS"
            icon={<Server className="w-3.5 h-3.5 text-cyan-600" />}
            badge="VERIFIED CAPABILITIES"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Capability Map & Subsystems
          </h1>
          <p className="text-sm text-slate-600 font-mono">
            Modular engineering stack mapped directly to documented architectures and production deliverables.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/architecture"
            className="px-4 py-2 rounded-xl bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-800 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <GitBranch className="w-4 h-4 text-cyan-600" />
            <span>Architecture Lab</span>
          </Link>
        </div>
      </div>

      {/* Subsystem Selector Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {skillCategories.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryChange(cat.id)}
              className={`p-3 rounded-xl font-mono text-xs text-left transition-all duration-200 border flex flex-col justify-between h-20 shadow-xs ${
                isSelected
                  ? 'bg-cyan-50 text-cyan-800 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.20)] ring-1 ring-cyan-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-cyan-300 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                {getCategoryIcon(cat.icon)}
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-semibold">
                  {cat.skills.length} MODULES
                </span>
              </div>
              <div className="font-bold tracking-wide truncate mt-2 text-slate-800">
                {cat.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Modular Two-Pane Capability Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT: Active Subsystem Module Cluster */}
        <div className="lg:col-span-7 space-y-4">
          <GlassPanel className="p-6 md:p-7 space-y-5 bg-white border border-cyan-200 shadow-glass" hudCorners>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-700 font-bold">
                {getCategoryIcon(selectedCategory.icon)}
                <span>ACTIVE DOMAIN: {selectedCategory.title.toUpperCase()}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                SELECT MODULE FOR TELEMETRY
              </span>
            </div>

            {/* Interactive Module Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {selectedCategory.skills.map((skill) => {
                const isSkillSelected = currentSkill.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setSelectedSkillName(skill.name)}
                    className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group ${
                      isSkillSelected
                        ? 'bg-cyan-50/70 border-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.20)] ring-1 ring-cyan-300'
                        : 'bg-slate-50/80 border-slate-200 hover:border-cyan-300 hover:bg-slate-100'
                    }`}
                  >
                    {isSkillSelected && (
                      <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                        <div className="bg-cyan-500 transform rotate-45 translate-x-3 -translate-y-3 w-8 h-3 shadow-xs" />
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-slate-800 text-base flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 ${isSkillSelected ? 'text-cyan-600' : 'text-slate-400'}`} />
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 font-medium">
                        {isSkillSelected ? 'ACTIVE' : 'READY'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </GlassPanel>

          {/* Quick Subsystem Summary */}
          <div className="p-3.5 rounded-xl bg-cyan-50/50 border border-cyan-100 text-xs font-mono text-slate-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-600 flex-shrink-0" />
              <span>All skills reflect verified implementations in production or completed academic projects.</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Deep-Dive Subsystem Inspector Pane */}
        <div className="lg:col-span-5 space-y-4">
          <GlassPanel className="p-6 md:p-7 space-y-6 bg-white border border-cyan-200 shadow-glass" hudCorners glow>
            {/* Inspector Header */}
            <div className="flex items-center justify-between border-b border-cyan-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 font-bold">
                <Terminal className="w-4 h-4 text-cyan-600" />
                <span>MODULE INSPECTOR // DEEP DIVE</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 text-[10px] font-mono font-bold">
                STATUS: VERIFIED
              </span>
            </div>

            {/* Selected Skill Title */}
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-cyan-600 font-bold uppercase tracking-wider">
                {selectedCategory.title} Subsystem
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {currentSkill.name}
              </h2>
            </div>

            {/* Technical Capability Description */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono text-slate-500 uppercase font-medium">
                Technical Specification:
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                {currentSkill.description}
              </p>
            </div>

            {/* Verified Project Applications */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono uppercase text-cyan-700 font-semibold tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                <span>Documented Project Applications & Evidence:</span>
              </div>
              <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-xs text-slate-700 leading-relaxed font-mono">
                {currentSkill.evidence}
              </div>
            </div>

            {/* Action to explore related projects */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/projects"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
              >
                <Layers className="w-4 h-4" />
                <span>View in Projects Bento</span>
              </Link>

              <Link
                to="/architecture"
                className="text-xs font-mono text-cyan-600 hover:text-cyan-700 font-bold flex items-center gap-1 transition-colors"
              >
                <span>View System Topology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
};
