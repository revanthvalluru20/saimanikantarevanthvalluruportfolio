import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Cloud, Wrench, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'R', level: 80 },
        { name: 'HTML & CSS', level: 95 },
      ],
    },
    {
      category: 'Frontend Development',
      icon: Layout,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'React Native', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      category: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs & Socket.io', level: 80 },
        { name: 'JWT Authentication', level: 85 },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      category: 'Cloud & Deployment',
      icon: Cloud,
      skills: [
        { name: 'Microsoft Azure', level: 75 },
        { name: 'Vercel Deployment', level: 85 },
      ],
    },
    {
      category: 'AI & Data Analytics',
      icon: Sparkles,
      skills: [
        { name: 'Azure AI Translation', level: 80 },
        { name: 'Data Analytics', level: 85 },
        { name: 'Tableau', level: 80 },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'i18n Multilingual', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills min-h-[100svh] py-6 sm:py-8 lg:py-10 pb-16 lg:pb-20 px-6 sm:px-10 lg:px-12 bg-white text-[#102A43] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p className="text-[#526579] text-xs sm:text-sm">
            Core technical proficiencies across frontend, mobile, backend, databases, cloud, AI, and analytics.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-4">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
                className="p-4 sm:p-5 rounded-2xl bg-[#102235] border border-slate-700/50 hover:border-[#38BDF8] hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[#172F46] text-[#38BDF8] border border-sky-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-[#F8FAFC] text-xs sm:text-sm font-raleway group-hover:text-[#38BDF8] transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between items-center text-[11px] sm:text-xs font-semibold font-poppins">
                          <span className="text-[#F8FAFC]">{skill.name}</span>
                          <span className="text-[#38BDF8] font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#172F46] rounded-full overflow-hidden border border-slate-700/40">
                          <div
                            className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
