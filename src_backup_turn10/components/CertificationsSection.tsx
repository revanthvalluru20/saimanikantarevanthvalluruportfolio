import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Globe, Building } from 'lucide-react';

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
    },
    {
      id: 'data-analytics-cert',
      title: 'Data Analytics Certification and Externship',
      provider: 'SmartInternz',
      period: 'Aug 2023 – Dec 2023',
      mode: 'Online Externship',
      description: 'Learned data visualization, data preprocessing, and dashboard development using Tableau and IBM Cognos Analytics across diverse real-world datasets.',
      skills: ['Tableau', 'IBM Cognos Analytics', 'Data Visualization', 'Storytelling', 'Analytics'],
    },
  ];

  return (
    <section id="certifications" className="certifications min-h-[100svh] py-6 sm:py-8 lg:py-10 pb-16 lg:pb-20 px-6 sm:px-10 lg:px-12 bg-white text-[#102A43] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="section-title">
          <h2>Certifications &amp; Externship</h2>
          <p className="text-[#526579] text-xs sm:text-sm">
            Industry-recognized training, professional externships, and certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-4 sm:mt-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="p-6 sm:p-7 rounded-2xl bg-[#102235] border border-slate-700/50 hover:border-[#38BDF8] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#172F46] text-[#38BDF8] flex items-center justify-center flex-shrink-0 border border-sky-500/30 group-hover:bg-[#0EA5E9] group-hover:text-white transition-all shadow-xs">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#172F46] text-[#38BDF8] border border-sky-500/30 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    <span>{cert.mode}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-raleway text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-2">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-[#C1D0DF] font-medium mb-3">
                  <span className="flex items-center gap-1.5 font-semibold text-[#38BDF8]">
                    <Building className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    <span>{cert.provider}</span>
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1.5 font-mono text-[#C1D0DF]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.period}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-[#C1D0DF] leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-700/50 flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg text-xs bg-[#172F46] text-[#C1D0DF] border border-slate-700/60 font-mono group-hover:border-sky-500/30 transition-colors"
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
