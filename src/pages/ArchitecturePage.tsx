import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GitBranch, Terminal, ShieldCheck, Sparkles } from 'lucide-react';
import { ArchitectureViewer } from '../components/ArchitectureViewer';
import { ApiExplorer } from '../components/ApiExplorer';
import { GlassPanel } from '../components/GlassPanel';
import { HUDLabel } from '../components/HUDLabel';

export const ArchitecturePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const projectParam = searchParams.get('project');
  const [activeTab, setActiveTab] = useState<'topologies' | 'api-explorer'>('topologies');
  const [currentProjectId, setCurrentProjectId] = useState<string>(projectParam || 'vibeverse');

  useEffect(() => {
    if (projectParam) {
      setCurrentProjectId(projectParam);
    }
  }, [projectParam]);

  const handleQuery = (q: string) => {
    window.dispatchEvent(new CustomEvent('reva-query', { detail: q }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-100 pb-5">
        <div className="space-y-1.5">
          <HUDLabel
            label="ARCHITECTURE LAB // ENGINEERING WORKSTATION"
            icon={<GitBranch className="w-3.5 h-3.5 text-cyan-600" />}
            badge="INTERACTIVE TOPOLOGY"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            System Architecture & API Explorer
          </h1>
          <p className="text-sm text-slate-600 font-mono max-w-2xl">
            Interactive system topologies, component data flows, and representative REST API request/response demonstrations for verified projects.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 font-mono text-xs shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab('topologies')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'topologies'
                ? 'bg-cyan-500 text-white font-bold shadow-[0_0_12px_rgba(6,182,212,0.30)]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                ? 'bg-cyan-500 text-white font-bold shadow-[0_0_12px_rgba(6,182,212,0.30)]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Verified API Explorer</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      {activeTab === 'topologies' ? (
        <div className="space-y-6">
          <ArchitectureViewer
            selectedProjectId={currentProjectId}
            onAskQuestion={handleQuery}
          />

          <GlassPanel className="p-4 flex items-center justify-between text-xs font-mono text-slate-600 bg-white border border-cyan-200 shadow-glass" hudCorners>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-cyan-600 flex-shrink-0" />
              <span>
                Select any component node to inspect its responsibilities, I/O triggers, and verified tech stack.
              </span>
            </div>
            <span className="hidden sm:inline text-slate-400">
              STARK WORKSTATION // TOPOLOGY ENGINE v3.4
            </span>
          </GlassPanel>
        </div>
      ) : (
        <div className="space-y-6">
          <ApiExplorer />

          <GlassPanel className="p-4 flex items-center justify-between text-xs font-mono text-slate-600 bg-white border border-cyan-200 shadow-glass" hudCorners>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                Representative API flows demonstrate verified contracts from VibeVerse, MentorAI, and Destini.ai. No external server calls are made.
              </span>
            </div>
            <span className="hidden sm:inline text-slate-400">
              CONTRACT VERIFIED // LOCAL SIMULATION
            </span>
          </GlassPanel>
        </div>
      )}
    </div>
  );
};
