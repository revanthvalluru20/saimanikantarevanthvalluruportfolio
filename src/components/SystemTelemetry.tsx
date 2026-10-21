import React from 'react';
import { Activity, Cpu, ShieldCheck } from 'lucide-react';
import { AssistantState } from '../types/portfolio';

interface SystemTelemetryProps {
  state: AssistantState;
  activeSection: string;
}

export const SystemTelemetry: React.FC<SystemTelemetryProps> = ({
  state,
  activeSection
}) => {
  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 text-[11px] font-mono text-slate-600 shadow-xs">
      <div className="flex items-center gap-4">
        {/* Core Link */}
        <div className="flex items-center gap-1.5 text-cyan-700">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
          <span className="font-bold">REVA AI ONLINE // LOCAL WORKSPACE</span>
        </div>

        {/* Latency */}
        <div className="hidden sm:flex items-center gap-1">
          <Activity className="w-3.5 h-3.5 text-emerald-600" />
          <span>LATENCY: 14ms</span>
        </div>

        {/* Protocol */}
        <div className="hidden md:flex items-center gap-1">
          <Cpu className="w-3.5 h-3.5 text-purple-600" />
          <span>CORE: REACT 18 / VITE</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Active Viewport */}
        <div className="flex items-center gap-1.5 text-slate-700">
          <span className="text-slate-500">ACTIVE VIEWPORT:</span>
          <span className="text-cyan-700 uppercase font-semibold">[{activeSection}]</span>
        </div>

        {/* State */}
        <div className="flex items-center gap-1.5">
          <span className="text-slate-500">AI MODE:</span>
          <span className={`px-2 py-0.5 rounded font-bold uppercase ${
            state === 'listening' ? 'bg-amber-50 text-amber-800 border border-amber-300' :
            state === 'speaking' ? 'bg-cyan-50 text-cyan-800 border border-cyan-300' :
            state === 'processing' ? 'bg-purple-50 text-purple-800 border border-purple-300' :
            state === 'error' ? 'bg-red-50 text-red-800 border border-red-300' :
            'bg-emerald-50 text-emerald-800 border border-emerald-300'
          }`}>
            {state}
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1 text-emerald-600">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>VERIFIED PORTFOLIO DATA</span>
        </div>
      </div>
    </div>
  );
};
