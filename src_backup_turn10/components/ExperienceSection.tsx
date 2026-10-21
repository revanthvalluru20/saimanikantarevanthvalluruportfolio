import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, CheckCircle, Globe, Shield } from 'lucide-react';
import { ExperienceModal } from './ExperienceModal';

export const ExperienceSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="experience" className="experience min-h-[100svh] py-6 sm:py-8 lg:py-10 pb-16 lg:pb-20 px-6 sm:px-10 lg:px-12 bg-[#F7FAFC] text-[#102A43] flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Title */}
          <div className="section-title">
            <h2>Experience</h2>
            <p className="text-[#526579] text-xs sm:text-sm">
              Professional internships and production engineering experience.
            </p>
          </div>

          <div className="mt-4 sm:mt-5 max-w-4xl">
            {/* Experience Card: Blackish-Blue Navy Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setIsModalOpen(true)}
              className="p-5 sm:p-6 rounded-2xl bg-[#102235] border border-slate-700/50 hover:border-[#38BDF8] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <div className="w-8 h-8 rounded-lg bg-[#172F46] border border-sky-500/30 flex items-center justify-center text-[#38BDF8]">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-raleway text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                      Destini.ai
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Onsite
                    </span>
                  </div>
                  <p className="text-[#38BDF8] font-semibold text-sm sm:text-base mb-1">
                    Full Stack Developer Intern
                  </p>
                  <span className="inline-block text-xs font-medium text-[#C1D0DF] font-mono">
                    Oct 2025 — Present
                  </span>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#38BDF8] bg-[#172F46] hover:bg-[#0EA5E9] hover:text-white transition-all border border-sky-500/40 shadow-xs"
                  >
                    <span>View full details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Highlights summary */}
              <div className="space-y-2 text-xs sm:text-[13px] text-[#C1D0DF] border-t border-slate-700/50 pt-3.5">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#38BDF8] mt-0.5 flex-shrink-0" />
                  <span>Enhanced web UI/UX with React.js &amp; converted web app to an Android app with React Native.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-[#38BDF8] mt-0.5 flex-shrink-0" />
                  <span>Integrated i18n and Azure AI Translation Services for real-time multilingual content.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#38BDF8] mt-0.5 flex-shrink-0" />
                  <span>Engineered secure SSO-based payout flow and comprehensive Admin Panel with backend REST APIs.</span>
                </div>
              </div>

              <div className="mt-4 pt-3.5 flex flex-wrap gap-1.5 border-t border-slate-700/50">
                {['React.js', 'React Native', 'Node.js', 'Azure AI', 'SSO', 'REST APIs', 'i18n'].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-xs bg-[#172F46] text-[#C1D0DF] font-medium border border-slate-700/60 group-hover:border-sky-500/30 transition-colors">
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
