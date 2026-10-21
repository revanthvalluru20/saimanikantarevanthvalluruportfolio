import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Layers, ShieldCheck, Server, Database, Globe, Cpu, Bot, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { architectureGraphs } from '../data/architectures';
import { ArchitectureNode } from '../types/portfolio';

interface ArchitectureViewerProps {
  selectedProjectId?: string;
  selectedNodeId?: string;
  onAskQuestion: (question: string) => void;
}

export const ArchitectureViewer: React.FC<ArchitectureViewerProps> = ({
  selectedProjectId = "vibeverse",
  selectedNodeId,
  onAskQuestion
}) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(selectedProjectId);
  const currentGraph = architectureGraphs[activeProjectId] || architectureGraphs["vibeverse"];
  const [activeNode, setActiveNode] = useState<ArchitectureNode>(() => {
    if (selectedNodeId) {
      const match = currentGraph.nodes.find(n => n.id === selectedNodeId);
      if (match) return match;
    }
    return currentGraph.nodes[0];
  });

  // Switch project
  const handleProjectChange = (pid: string) => {
    setActiveProjectId(pid);
    const newGraph = architectureGraphs[pid];
    if (newGraph && newGraph.nodes.length > 0) {
      setActiveNode(newGraph.nodes[0]);
    }
  };

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
      case 'Grid':
        return <Monitor className="w-5 h-5 text-cyan-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck':
      case 'ShieldAlert':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-teal-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-600" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-indigo-600" />;
      default:
        return <Server className="w-5 h-5 text-cyan-600" />;
    }
  };

  return (
    <div className="w-full flex flex-col rounded-2xl bg-white border border-cyan-200 overflow-hidden shadow-glass">
      {/* Top Header & Project Selector Tabs */}
      <div className="p-4 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-600" />
            <h3 className="font-mono text-sm font-bold text-slate-900 tracking-wider">
              {currentGraph.projectName}
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {currentGraph.description}
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs">
          {Object.keys(architectureGraphs).map((pid) => (
            <button
              key={pid}
              type="button"
              onClick={() => handleProjectChange(pid)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeProjectId === pid
                  ? 'bg-cyan-500 text-white font-bold shadow-[0_0_12px_rgba(6,182,212,0.30)]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {pid === 'vibeverse'
                ? 'VibeVerse'
                : pid === 'mentorai-codespace'
                ? 'MentorAI'
                : pid === 'chess-game'
                ? 'Chess Game'
                : 'Destini.ai'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Architecture Interactive Grid */}
      <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/60 min-h-[380px]">
        {/* Left: Interactive Node Canvas Diagram */}
        <div className="lg:col-span-7 flex flex-col justify-center relative">
          <div className="text-[11px] font-mono text-slate-500 mb-3 flex items-center justify-between">
            <span className="text-cyan-700 font-bold tracking-wider uppercase">
              // INTERACTIVE TOPOLOGY MAP (CLICK ANY NODE)
            </span>
            <span className="text-slate-500">{currentGraph.nodes.length} Verified Components</span>
          </div>

          {/* Node Flow Representation */}
          <div className="space-y-3 relative">
            {currentGraph.nodes.map((node, index) => {
              const isSelected = activeNode.id === node.id;
              return (
                <div key={node.id} className="relative">
                  <motion.div
                    whileHover={{ scale: 1.01, x: 4 }}
                    onClick={() => setActiveNode(node)}
                    className={`p-3.5 rounded-xl cursor-pointer border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-50/80 border-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.20)] ring-1 ring-cyan-300'
                        : 'bg-white border-slate-200 hover:border-cyan-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg border ${
                        isSelected ? 'bg-cyan-100 border-cyan-300 text-cyan-800' : 'bg-slate-50 border-slate-200 text-slate-500'
                      }`}>
                        {getNodeIcon(node.icon)}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-800">
                            {node.label}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase ${
                            node.type === 'ui' ? 'bg-cyan-50 text-cyan-700 border border-cyan-200' :
                            node.type === 'frontend' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                            node.type === 'auth' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                            node.type === 'backend' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                            node.type === 'database' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                            'bg-teal-50 text-teal-700 border border-teal-200'
                          }`}>
                            {node.type}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 font-mono mt-0.5">
                          {node.tech}
                        </div>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-600 translate-x-1' : 'text-slate-400'}`} />
                  </motion.div>

                  {/* Flow connector line between items */}
                  {index < currentGraph.nodes.length - 1 && (
                    <div className="h-2.5 flex items-center justify-center">
                      <div className="w-0.5 h-full bg-gradient-to-b from-cyan-300 to-slate-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Node Telemetry & Deep-Dive Drawer */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Header */}
              <div className="border-b border-slate-100 pb-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-cyan-700 uppercase tracking-widest font-bold">
                    NODE TELEMETRY // {activeNode.type}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mt-1">
                  {activeNode.label}
                </h4>
                <div className="font-mono text-xs text-cyan-700 mt-0.5 font-medium">
                  Tech Stack: {activeNode.tech}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <div className="text-xs font-mono uppercase text-slate-500 font-semibold mb-1.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Primary Responsibilities:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeNode.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-600 font-mono mt-0.5">›</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inputs & Outputs */}
              <div className="grid grid-cols-1 gap-2 pt-1">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-blue-700 block font-semibold">
                    Inputs / Triggers:
                  </span>
                  <span className="text-xs text-slate-700">{activeNode.inputs.join(', ')}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-emerald-700 block font-semibold">
                    Outputs / Dispatches:
                  </span>
                  <span className="text-xs text-slate-700">{activeNode.outputs.join(', ')}</span>
                </div>
              </div>

              {/* Relationship with other components */}
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-purple-700 block font-semibold mb-0.5">
                  Subsystem Relationship:
                </span>
                <span className="text-xs text-slate-700">{activeNode.relationships.join(' ')}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Ask Related Question to REVA AI Button */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => onAskQuestion(`Explain the role of ${activeNode.label} in ${currentGraph.projectName}.`)}
              className="w-full py-2.5 px-4 rounded-xl bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-800 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs group"
            >
              <Sparkles className="w-4 h-4 text-cyan-600 group-hover:rotate-12 transition-transform" />
              <span>Ask REVA AI about {activeNode.label}</span>
              <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
