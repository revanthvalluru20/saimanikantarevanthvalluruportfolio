import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Cloud, Wrench, ExternalLink } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Java', level: 75 },
        { name: 'JavaScript', level: 75 },
        { name: 'R', level: 90 },
      ],
    },
    {
      category: 'Frontend Development',
      icon: Layout,
      skills: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'React.js', level: 80 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'React Native', level: 70 },
      ],
    },
    {
      category: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 40 },
        { name: 'Express.js', level: 40 },
        { name: 'REST APIs & Socket.io', level: 70 },
        { name: 'JWT Authentication', level: 70 },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 70 },
        { name: 'MongoDB', level: 55 },
        { name: 'SQL & Relational DBs', level: 70 },
      ],
    },
    {
      category: 'Cloud & Deployment',
      icon: Cloud,
      skills: [
        { name: 'Microsoft Azure', level: 70 },
        { name: 'Vercel Deployment', level: 70 },
        { name: 'Azure AI Translation', level: 70 },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Tableau', level: 70 },
        { name: 'Power BI', level: 70 },
        { name: 'Git & GitHub', level: 70 },
        { name: 'Postman', level: 70 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="skills min-h-[calc(100svh-4.5rem)] py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 flex flex-col justify-center text-[#10233F]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading & Coding Profile Cards */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-2">
          <div className="section-title mb-0">
            <h2>
              <span>Technical</span>
              <span className="accent-word">Skills</span>
            </h2>
            <div className="section-title-underline" />
            <p>
              Core technical proficiencies across programming, frontend, backend, databases, cloud, and modern tooling.
            </p>
          </div>

          {/* LeetCode & HackerRank Profile Cards */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            {/* LeetCode Card */}
            <a
              href="https://leetcode.com/u/revanthvalluru2073/"
              target="_blank"
              rel="noreferrer"
              className="white-card px-3 py-1.5 rounded-xl flex items-center gap-2 border border-[#D7EAF8] hover:border-[#FFA116] hover:shadow-md transition-all group"
              title="View LeetCode Profile"
            >
              <div className="w-7 h-7 rounded-lg bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#EA580C] group-hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-xs text-[#10233F] group-hover:text-[#EA580C] transition-colors">LeetCode</span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#526B8A] group-hover:text-[#EA580C]" />
                </div>
                <span className="text-[10px] text-[#526B8A] font-mono block">revanthvalluru2073</span>
              </div>
            </a>

            {/* HackerRank Card */}
            <a
              href="https://www.hackerrank.com/profile/saimanikantarev1"
              target="_blank"
              rel="noreferrer"
              className="white-card px-3 py-1.5 rounded-xl flex items-center gap-2 border border-[#D7EAF8] hover:border-[#059669] hover:shadow-md transition-all group"
              title="View HackerRank Profile"
            >
              <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm3.87 6.471h-2.138v3.978h-3.464V6.471H8.13v11.058h2.138v-4.708h3.464v4.708h2.138V6.471z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-xs text-[#10233F] group-hover:text-[#059669] transition-colors">HackerRank</span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#526B8A] group-hover:text-[#059669]" />
                </div>
                <span className="text-[10px] text-[#526B8A] font-mono block">saimanikantarev1</span>
              </div>
            </a>
          </div>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-4">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="white-card p-4 sm:p-5 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[#EFF8FF] text-[#087CF0] border border-[#D7EAF8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#087CF0] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-[#10233F] text-xs sm:text-sm font-raleway group-hover:text-[#087CF0] transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills List with Progress Tracks */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between items-center text-[11px] sm:text-xs font-semibold">
                          <span className="text-[#10233F]">{skill.name}</span>
                          <span className="text-[#087CF0] font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#E2EAF3] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="h-full bg-gradient-to-r from-[#087CF0] to-[#12B8F5] rounded-full"
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
