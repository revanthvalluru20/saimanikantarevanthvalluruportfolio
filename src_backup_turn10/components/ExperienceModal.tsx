import React, { useEffect } from 'react';
import { X, CheckCircle, Smartphone, Globe, CreditCard, ShieldCheck, Cpu } from 'lucide-react';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, onClose }) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const points = [
    {
      title: "UI/UX & Core Workflows",
      desc: "Enhanced the application's UI/UX and workflows using React.js, improving usability and consistency across key user-facing features.",
      icon: CheckCircle,
    },
    {
      title: "Web to Android Cross-Platform Conversion",
      desc: "Converted the existing web application into an Android application using React Native, adapting components and workflows for mobile platforms.",
      icon: Smartphone,
    },
    {
      title: "Multilingual & Azure AI Translation",
      desc: "Implemented multilingual support using i18n for static content and integrated Azure AI Translation Services for dynamic content translation.",
      icon: Globe,
    },
    {
      title: "Payout System & Secure SSO Authentication",
      desc: "Developed and integrated the payout system by implementing a secure SSO-based authentication flow and connecting frontend payout workflows with backend APIs for seamless authenticated transactions.",
      icon: CreditCard,
    },
    {
      title: "Full-Featured Admin Panel",
      desc: "Built an Admin Panel with React.js interfaces and backend API integration to support administrative operations and application management.",
      icon: ShieldCheck,
    },
  ];

  const technologies = [
    'React.js',
    'React Native',
    'JavaScript',
    'i18n',
    'Azure AI Translation Services',
    'SSO Authentication',
    'REST APIs',
    'Node.js',
    'Backend APIs',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#102235] text-[#F8FAFC] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-slate-700/60 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-[#102235]/95 backdrop-blur-md border-b border-slate-700/50 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl sm:text-2xl font-bold font-raleway text-[#F8FAFC]">
                Destini.ai — <span className="text-[#38BDF8]">Full Stack Developer Intern</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Onsite
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#C1D0DF] font-medium mt-0.5">
              Internship • Oct 2025 — Present
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#C1D0DF] hover:text-[#F8FAFC] hover:bg-[#172F46] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key responsibilities */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#F8FAFC] mb-3.5 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#0EA5E9]" />
              <span>Key Responsibilities &amp; Contributions</span>
            </h4>
            <div className="space-y-3">
              {points.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#172F46] border border-slate-700/60 hover:border-sky-500/40 transition-colors flex items-start gap-3">
                    <IconComponent className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-[#F8FAFC] text-sm">{p.title}</h5>
                      <p className="text-xs sm:text-sm text-[#C1D0DF] mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="pt-2">
            <h4 className="text-xs font-bold text-[#C1D0DF] mb-2.5 uppercase tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#172F46] text-[#38BDF8] border border-sky-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#102235] border-t border-slate-700/50 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#172F46] hover:bg-[#0EA5E9] hover:text-white text-[#F8FAFC] text-sm font-semibold transition-all border border-slate-700/60"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
