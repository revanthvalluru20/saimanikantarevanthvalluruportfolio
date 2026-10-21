import React from 'react';
import { Volume2, Sparkles, Terminal, ChevronDown, Layout, Server, Layers, GitBranch } from 'lucide-react';
import { profileData } from '../data/profile';
import { getAssetUrl } from '../utils/assetUrl';
import { AICore } from '../components/AICore';
import { VoiceControls } from '../components/VoiceControls';
import { ChatPanel } from '../components/ChatPanel';
import { SuggestedQuestions } from '../components/SuggestedQuestions';
import { SystemTelemetry } from '../components/SystemTelemetry';
import { AssistantState, ChatMessage } from '../types/portfolio';

interface HeroSectionProps {
  assistantState: AssistantState;
  isListening: boolean;
  isSpeaking: boolean;
  isMuted: boolean;
  isSpeechRecognitionSupported: boolean;
  speechError: string | null;
  chatMessages: ChatMessage[];
  chatInput: string;
  interimTranscript?: string;
  isProcessing: boolean;
  onToggleListening: () => void;
  onStopSpeaking: () => void;
  onToggleMute: () => void;
  onReplayAudio: () => void;
  onPlayWelcomeSpeech: () => void;
  onChatInputChange: (val: string) => void;
  onChatSubmit: (e?: React.FormEvent) => void;
  onSelectQuestion: (q: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

const heroSuggestedQuestions = [
  "Tell me about yourself.",
  "What are your skills?",
  "Tell me about my Destini.ai internship.",
  "Explain VibeVerse.",
  "How does Socket.io work in VibeVerse?",
  "Explain MentorAI-CodeSpace.",
  "Show my cardiovascular analytics dashboard.",
  "Explain my chess game.",
  "Tell me about Tasty Trail.",
  "Explain my NLP paper correction project.",
  "How can I contact you?"
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  assistantState,
  isListening,
  isSpeaking,
  isMuted,
  isSpeechRecognitionSupported,
  speechError,
  chatMessages,
  chatInput,
  interimTranscript,
  isProcessing,
  onToggleListening,
  onStopSpeaking,
  onToggleMute,
  onReplayAudio,
  onPlayWelcomeSpeech,
  onChatInputChange,
  onChatSubmit,
  onSelectQuestion,
  onNavigateSection
}) => {
  return (
    <section id="hero" className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 rounded-3xl overflow-hidden">
      {/* Preserved Authentic Hero Background Image: assets/img/homebg1.jpeg */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none rounded-3xl">
        <img
          src={getAssetUrl('assets/img/homebg1.jpeg')}
          alt="Developer workspace background"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-115 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040814]/85 via-[#040814]/70 to-[#040814]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/30 via-transparent to-transparent" />
      </div>

      {/* Telemetry Bar */}
      <SystemTelemetry state={assistantState} activeSection="HOME_COMMAND_CENTER" />

      {/* Main Grid: Left Hero Branding + AICore, Right Interactive Chat Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Column (Hero Content + AI Core + Voice Controls) */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
          {/* Top Identifier */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-mono text-xs w-fit backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI DEVELOPER COMMAND CENTER // {profileData.callsign}</span>
          </div>

          {/* Heading */}
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-shadow">
              {profileData.mainHeading}
            </h1>
            <p className="text-base sm:text-lg text-cyan-400 font-mono font-medium">
              {profileData.fullName} — {profileData.role}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {profileData.subheading}
            </p>
          </div>

          {/* Welcome Message Card with Audio Trigger */}
          <div className="p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-cyan-500/30 shadow-glass space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>ASSISTANT WELCOME TRANSMISSION</span>
              </span>
              <button
                type="button"
                onClick={onPlayWelcomeSpeech}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-[0_0_12px_rgba(0,240,255,0.4)]"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Hear Welcome</span>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              "{profileData.welcomeMessage}"
            </p>
          </div>

          {/* Holographic AI Core */}
          <div className="flex justify-center py-1">
            <AICore state={assistantState} onCoreClick={onToggleListening} subtitle="CLICK CORE TO SPEAK" />
          </div>

          {/* Voice Controls */}
          <VoiceControls
            state={assistantState}
            isListening={isListening}
            isSpeaking={isSpeaking}
            isMuted={isMuted}
            isSpeechRecognitionSupported={isSpeechRecognitionSupported}
            onToggleListening={onToggleListening}
            onStopSpeaking={onStopSpeaking}
            onToggleMute={onToggleMute}
            onReplay={onReplayAudio}
            errorMessage={speechError}
          />

          {/* Suggested Quick Question Chips */}
          <SuggestedQuestions onSelectQuestion={onSelectQuestion} customQuestions={heroSuggestedQuestions} />
        </div>

        {/* Right Column: Conversational AI Interview Console */}
        <div className="lg:col-span-6 h-full flex flex-col">
          <ChatPanel
            messages={chatMessages}
            inputValue={chatInput}
            interimTranscript={interimTranscript}
            isProcessing={isProcessing}
            onInputChange={onChatInputChange}
            onSubmit={onChatSubmit}
            onSelectFollowUp={onSelectQuestion}
            onReplayMessage={onReplayAudio}
          />
        </div>
      </div>

      {/* Compact Shortcuts Section */}
      <div className="pt-8 border-t border-slate-800/80 space-y-3 relative z-10">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>COMMAND CENTER SHORTCUTS</span>
          </div>
          <button
            type="button"
            onClick={() => onNavigateSection('about')}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
          >
            <span>Explore full profile</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            type="button"
            onClick={() => onNavigateSection('skills')}
            className="p-3 rounded-xl bg-slate-900/85 backdrop-blur-md hover:bg-cyan-950/50 border border-slate-800 hover:border-cyan-500/50 text-left transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <Layout className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-xs font-bold text-slate-200 group-hover:text-cyan-300">
                Skills
              </span>
            </div>
            <p className="text-[11px] text-slate-400">6 Verified Categories</p>
          </button>

          <button
            type="button"
            onClick={() => onNavigateSection('experience')}
            className="p-3 rounded-xl bg-slate-900/85 backdrop-blur-md hover:bg-cyan-950/50 border border-slate-800 hover:border-cyan-500/50 text-left transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <Server className="w-4 h-4 text-blue-400" />
              <span className="font-mono text-xs font-bold text-slate-200 group-hover:text-cyan-300">
                Experience
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Destini.ai & Education</p>
          </button>

          <button
            type="button"
            onClick={() => onNavigateSection('projects')}
            className="p-3 rounded-xl bg-slate-900/85 backdrop-blur-md hover:bg-cyan-950/50 border border-slate-800 hover:border-cyan-500/50 text-left transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="font-mono text-xs font-bold text-slate-200 group-hover:text-cyan-300">
                Projects
              </span>
            </div>
            <p className="text-[11px] text-slate-400">6 Verified Works</p>
          </button>

          <button
            type="button"
            onClick={() => onNavigateSection('architecture')}
            className="p-3 rounded-xl bg-slate-900/85 backdrop-blur-md hover:bg-cyan-950/50 border border-slate-800 hover:border-cyan-500/50 text-left transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <GitBranch className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-xs font-bold text-slate-200 group-hover:text-cyan-300">
                Architecture
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Interactive Lab & APIs</p>
          </button>
        </div>
      </div>
    </section>
  );
};
