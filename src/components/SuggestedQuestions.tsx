import React from 'react';
import { HelpCircle, ArrowUpRight } from 'lucide-react';

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
  customQuestions?: string[];
}

const defaultChips = [
  "Tell me about yourself.",
  "Show my education.",
  "Explain my technical skills.",
  "Tell me about my internship at Destini.ai.",
  "Explain VibeVerse.",
  "Explain MentorAI-CodeSpace.",
  "Show my cardiovascular analytics dashboard.",
  "How can I contact you?"
];

export const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
  onSelectQuestion,
  customQuestions
}) => {
  const chips = customQuestions && customQuestions.length > 0 ? customQuestions : defaultChips;

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-700 font-bold tracking-wider uppercase">
        <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
        <span>Suggested Inquiry Queries</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {chips.map((q, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSelectQuestion(q)}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-slate-700 hover:text-cyan-800 font-sans text-xs transition-all duration-200 shadow-2xs focus:outline-none focus:ring-1 focus:ring-cyan-400"
          >
            <span>{q}</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        ))}
      </div>
    </div>
  );
};
