import React, { useState } from 'react';
import { Play, Check, Terminal, Shield, Copy, CheckCheck } from 'lucide-react';
import { mockApiEndpoints } from '../data/apiEndpoints';
import { ApiEndpoint } from '../types/portfolio';

export const ApiExplorer: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(mockApiEndpoints[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState<unknown>(selectedEndpoint.responseBody);
  const [activeTab, setActiveTab] = useState<'response' | 'headers' | 'body'>('response');
  const [hasCopied, setHasCopied] = useState(false);

  const handleSelectEndpoint = (ep: ApiEndpoint) => {
    setSelectedEndpoint(ep);
    setResponseOutput(ep.responseBody);
  };

  const handleSendSimulatedRequest = () => {
    setIsLoading(true);
    setResponseOutput(null);
    setTimeout(() => {
      setResponseOutput(selectedEndpoint.responseBody);
      setIsLoading(false);
    }, 450);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(responseOutput, null, 2));
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-white border border-cyan-200 overflow-hidden shadow-glass">
      {/* Top Banner Notice */}
      <div className="px-4 py-2.5 bg-cyan-50/70 border-b border-cyan-100 flex items-center justify-between text-xs font-mono text-cyan-800">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-cyan-600" />
          <span className="font-bold">VERIFIED REST API DEMONSTRATION SUITE // LOCAL SIMULATION CLIENT</span>
        </div>
        <span className="text-slate-500 text-[10px]">MOCK ENVIRONMENT SAFE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Endpoint Selector List */}
        <div className="lg:col-span-4 p-4 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/60 space-y-2 max-h-[480px] overflow-y-auto">
          <div className="text-[11px] font-mono uppercase text-slate-500 mb-2 font-semibold">
            Select Verified Endpoint:
          </div>

          {mockApiEndpoints.map((ep) => {
            const isSelected = selectedEndpoint.id === ep.id;
            return (
              <button
                key={ep.id}
                type="button"
                onClick={() => handleSelectEndpoint(ep)}
                className={`w-full text-left p-2.5 rounded-xl border transition-all text-xs font-mono ${
                  isSelected
                    ? 'bg-cyan-50 border-cyan-400 text-cyan-900 shadow-sm ring-1 ring-cyan-300'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    ep.method === 'GET' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    ep.method === 'POST' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                    'bg-amber-50 text-amber-700'
                  }`}>
                    {ep.method}
                  </span>
                  <span className="font-semibold text-slate-800 truncate">
                    {ep.name}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 truncate">
                  {ep.path}
                </div>
                <div className="text-[10px] text-cyan-600 font-medium mt-1">
                  Source: {ep.projectSource}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Interactive Console */}
        <div className="lg:col-span-8 p-4 md:p-6 flex flex-col justify-between bg-white space-y-4">
          {/* URL & Method Bar */}
          <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
            <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
              selectedEndpoint.method === 'GET' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
              'bg-blue-100 text-blue-800 border border-blue-300'
            }`}>
              {selectedEndpoint.method}
            </span>

            <span className="flex-1 font-mono text-xs text-slate-800 font-medium truncate px-2">
              {selectedEndpoint.path}
            </span>

            <button
              type="button"
              onClick={handleSendSimulatedRequest}
              disabled={isLoading}
              className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-mono text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Dispatching...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Send Request</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-slate-600">
            {selectedEndpoint.description}
          </p>

          {/* Console Output Tabs */}
          <div className="flex-1 flex flex-col rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shadow-inner">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-950 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('response')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'response' ? 'bg-slate-800 text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Response JSON
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('headers')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'headers' ? 'bg-slate-800 text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Headers
                </button>
                {selectedEndpoint.requestBody && (
                  <button
                    type="button"
                    onClick={() => setActiveTab('body')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'body' ? 'bg-slate-800 text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Request Payload
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>HTTP {selectedEndpoint.responseStatus} OK</span>
                </span>

                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="p-1 rounded text-slate-400 hover:text-cyan-300 transition-colors"
                  title="Copy JSON to clipboard"
                >
                  {hasCopied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-3.5 overflow-x-auto max-h-60 text-xs font-mono">
              {activeTab === 'response' && (
                <pre className="text-cyan-300 leading-relaxed">
                  {JSON.stringify(responseOutput, null, 2)}
                </pre>
              )}

              {activeTab === 'headers' && (
                <div className="space-y-1.5 text-slate-300">
                  {Object.entries(selectedEndpoint.headers).map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="text-slate-500">{k}:</span>
                      <span className="text-cyan-300">{v}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'body' && (
                <pre className="text-amber-300 leading-relaxed">
                  {JSON.stringify(selectedEndpoint.requestBody, null, 2)}
                </pre>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-600" />
              <span>Response Time: ~24ms (Client Sandbox)</span>
            </span>
            <span>Payload Size: ~1.2 KB</span>
          </div>
        </div>
      </div>
    </div>
  );
};
