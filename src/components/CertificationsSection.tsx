import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Globe, Building2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      id: 'mern-cert',
      title: 'MERN Full Stack Certification and Externship',
      provider: 'Ethnus',
      period: 'Aug 2023 – Nov 2023',
      mode: 'Online Externship',
      description: 'Learned to build dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with comprehensive hands-on development experience.',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      type: 'mern',
    },
    {
      id: 'data-analytics-cert',
      title: 'Data Analytics Certification and Externship',
      provider: 'SmartInternz',
      period: 'Aug 2023 – Dec 2023',
      mode: 'Online Externship',
      description: 'Learned data visualization, data preprocessing, and dashboard development using Tableau and IBM Cognos Analytics across diverse real-world datasets.',
      skills: ['Tableau', 'IBM Cognos Analytics', 'Data Visualization', 'Storytelling', 'Analytics'],
      type: 'analytics',
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications min-h-[calc(100svh-4.5rem)] py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 flex flex-col justify-center text-[#10233F]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <div className="section-title">
          <h2>
            <span>Certifications &amp;</span>
            <span className="accent-word">Externship</span>
          </h2>
          <div className="section-title-underline" />
          <p>
            Industry-recognized training, professional externships, and certifications.
          </p>
        </div>

        {/* 2 Wide Cards Side by Side Matching Image 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mt-4 sm:mt-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="white-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                {/* Header: Award Icon & Externship Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#EFF8FF] text-[#087CF0] flex items-center justify-center flex-shrink-0 border border-[#D7EAF8] group-hover:bg-[#087CF0] group-hover:text-white transition-all shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EFF8FF] text-[#087CF0] border border-[#D7EAF8] flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    <span>{cert.mode}</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-3">
                  <div className="sm:col-span-8">
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold font-raleway text-[#10233F] group-hover:text-[#087CF0] transition-colors mb-2">
                      {cert.title}
                    </h3>

                    {/* Provider & Period */}
                    <div className="flex items-center gap-3 text-xs text-[#526B8A] font-medium mb-3">
                      <span className="flex items-center gap-1.5 font-semibold text-[#087CF0]">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{cert.provider}</span>
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1.5 font-mono text-[#526B8A]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{cert.period}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#526B8A] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Right Side Illustration matching Image 5 */}
                  <div className="sm:col-span-4 flex items-center justify-center">
                    {cert.type === 'mern' ? (
                      /* 3D Certificate Vector Art */
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#EFF8FF] to-[#D7EAF8] border border-[#087CF0]/25 shadow-lg flex flex-col items-center justify-center p-2 text-center transform group-hover:scale-105 transition-transform">
                          <div className="w-10 h-1 bg-[#087CF0]/60 rounded-full mb-1.5" />
                          <div className="w-14 h-1 bg-[#087CF0]/40 rounded-full mb-1.5" />
                          <div className="w-8 h-1 bg-[#087CF0]/30 rounded-full mb-2" />
                          <div className="w-8 h-8 rounded-full bg-[#087CF0] text-white flex items-center justify-center shadow-md">
                            <Award className="w-4 h-4" />
                          </div>
                        </div>
                        {/* Sparkles */}
                        <div className="absolute top-1 right-2 text-cyan-400 text-xs font-bold animate-pulse">&#10022;</div>
                        <div className="absolute bottom-1 left-1 text-[#087CF0] text-xs font-bold animate-pulse">&#10022;</div>
                      </div>
                    ) : (
                      /* 3D Data Analytics Chart Vector Art */
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#EFF8FF] to-[#D7EAF8] border border-[#087CF0]/25 shadow-lg flex items-center justify-around p-3 transform group-hover:scale-105 transition-transform">
                          <div className="w-3 h-8 bg-[#087CF0]/40 rounded-t-sm self-end" />
                          <div className="w-3 h-12 bg-[#087CF0]/70 rounded-t-sm self-end" />
                          <div className="w-3 h-16 bg-[#087CF0] rounded-t-sm self-end" />
                          <div className="w-5 h-5 rounded-full border-2 border-[#12B8F5] border-t-transparent animate-spin ml-1" />
                        </div>
                        {/* Sparkles */}
                        <div className="absolute top-1 right-2 text-[#087CF0] text-xs font-bold animate-pulse">&#10022;</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="pt-3.5 border-t border-[#D7EAF8]/70 flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg text-xs bg-[#EFF8FF] text-[#087CF0] border border-[#D7EAF8] font-medium group-hover:border-[#087CF0]/30 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
