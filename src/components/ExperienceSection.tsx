import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, CheckCircle2, Globe, ShieldCheck } from 'lucide-react';
import { ExperienceModal } from './ExperienceModal';

export const ExperienceSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="experience"
        className="experience min-h-[calc(100svh-4.5rem)] py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 flex flex-col justify-center text-[#10233F]"
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Section Heading */}
          <div className="section-title">
            <h2>Experience</h2>
            <div className="section-title-underline" />
            <p>
              Professional internships and production engineering experience.
            </p>
          </div>

          <div className="mt-4 sm:mt-6">
            {/* Experience Card Matching Image 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              onClick={() => setIsModalOpen(true)}
              className="white-card p-6 sm:p-8 cursor-pointer group"
            >
              {/* Header row: Company, Badge & View Details Action */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF8FF] text-[#087CF0] border border-[#D7EAF8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#087CF0] group-hover:text-white transition-colors">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-raleway text-[#10233F]">
                    Destini.ai
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#E6F8F3] text-[#0D9488] border border-[#99F6E4]">
                    Onsite
                  </span>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#087CF0] bg-[#EFF8FF] hover:bg-[#087CF0] hover:text-white transition-all border border-[#D7EAF8]"
                  >
                    <span>View full details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Role & Period */}
              <div className="mb-4">
                <p className="text-base sm:text-lg font-bold text-[#087CF0]">
                  Full Stack Developer Intern
                </p>
                <p className="text-xs sm:text-[13px] text-[#526B8A] font-mono mt-0.5">
                  Oct 2025 &ndash; Present
                </p>
              </div>

              {/* Bullet highlights with icons */}
              <div className="space-y-2.5 text-xs sm:text-[13px] text-[#526B8A] border-t border-[#D7EAF8]/70 pt-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087CF0] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Enhanced web UI/UX with React.js &amp; converted web app to an Android app with React Native.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-[#087CF0] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Integrated i18n and Azure AI Translation Services for real-time multilingual content.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#087CF0] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Engineered secure SSO-based payout flow and comprehensive Admin Panel with backend REST APIs.
                  </span>
                </div>
              </div>

              {/* Tech stack tags */}
              <div className="mt-5 pt-4 flex flex-wrap gap-2 border-t border-[#D7EAF8]/70">
                {['React.js', 'React Native', 'Node.js', 'Azure AI', 'SSO', 'REST APIs', 'i18n'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs bg-white text-[#526B8A] font-medium border border-[#D7EAF8] group-hover:border-[#087CF0]/30 transition-colors shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Details Modal */}
      <ExperienceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
