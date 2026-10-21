import React, { useEffect } from 'react';
import { X, CheckCircle, Smartphone, Globe, CreditCard, ShieldCheck } from 'lucide-react';

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
    } else {
      document.body.style.overflow = 'unset';
    }
    window.addEventListener('keydown', handleKeyDown);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#10233F]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white text-[#10233F] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-[#D7EAF8] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-[#D7EAF8] px-6 py-4 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl sm:text-2xl font-bold font-raleway text-[#10233F]">
                Destini.ai &mdash; <span className="text-[#087CF0]">Full Stack Developer Intern</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#E6F8F3] text-[#0D9488] border border-[#99F6E4]">
                Onsite
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#526B8A] font-medium mt-0.5">
              Internship &bull; Oct 2025 &ndash; Present
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#526B8A] hover:text-[#10233F] hover:bg-[#EFF8FF] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#526B8A]">
              Key Responsibilities &amp; Engineering Contributions
            </h4>
            <div className="space-y-3">
              {points.map((pt, i) => {
                const IconComp = pt.icon;
                return (
                  <div key={i} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F7FBFF] border border-[#D7EAF8]">
                    <div className="w-8 h-8 rounded-lg bg-[#EFF8FF] text-[#087CF0] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D7EAF8]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#10233F]">{pt.title}</p>
                      <p className="text-xs sm:text-[13px] text-[#526B8A] mt-0.5 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#526B8A] mb-2.5">
              Technologies &amp; Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs bg-white text-[#526B8A] border border-[#D7EAF8] font-medium shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
