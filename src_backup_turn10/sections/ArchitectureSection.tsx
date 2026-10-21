import React, { useState } from 'react';
import { GitBranch, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { ArchitectureViewer } from '../components/ArchitectureViewer';
import { ApiExplorer } from '../components/ApiExplorer';

interface ArchitectureSectionProps {
  selectedProjectId?: string;
  selectedNodeId?: string;
  onAskQuestion: (question: string) => void;
}

export const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({
  selectedProjectId,
  selectedNodeId,
  onAskQuestion
}) => {
  const [activeTab, setActiveTab] = useState<'topologies' | 'api-explorer'>('topologies');

  return (
    <section id="architecture" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARCHITECTURE LAB // TOPOLOGY MAPS & VERIFIED API CONTRACTS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Architecture Lab & API Explorer
          </h2>
          <p className="text-sm text-slate-400 font-mono max-w-2xl">
            Interactive system topologies, component data flows, and representative REST API request/response demonstrations.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('topologies')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'topologies'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>System Topologies</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('api-explorer')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'api-explorer'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Verified API Explorer</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      {activeTab === 'topologies' ? (
        <div className="space-y-4">
          <ArchitectureViewer
            selectedProjectId={selectedProjectId}
            selectedNodeId={selectedNodeId}
            onAskQuestion={onAskQuestion}
          />
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Select any component node to inspect its responsibilities, I/O triggers, and query REVA AI about that component.</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <ApiExplorer />
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Representative API flows demonstrate verified contracts from VibeVerse, MentorAI, and Destini.ai. No external server calls are made.</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
