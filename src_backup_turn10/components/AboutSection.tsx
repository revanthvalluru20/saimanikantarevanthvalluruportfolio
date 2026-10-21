import React from 'react';
import { ChevronRight, GraduationCap, MapPin, Mail, Phone, Calendar, UserCheck, School, Building2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const quickDetails = [
    { label: 'Degree', value: 'B.Tech CSE (2021 - 2025)', icon: GraduationCap },
    { label: 'University', value: 'VIT-AP University, Amaravati', icon: Building2 },
    { label: 'Phone', value: '+91 8790515520', icon: Phone },
    { label: 'Email', value: 'saimanikantarevanthv@gmail.com', icon: Mail },
    { label: 'City', value: 'Vijayawada / Amaravati, India', icon: MapPin },
    { label: 'Current Role', value: 'Full Stack Intern at Destini.ai', icon: UserCheck },
    { label: 'Age', value: '22', icon: Calendar },
    { label: 'Specialization', value: 'Web & Mobile App Development', icon: School },
  ];

  const educationHistory = [
    {
      title: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'VIT-AP University, Amaravati',
      period: '2021 – 2025',
      score: 'CGPA: 8.45',
      badge: 'B.Tech CSE',
    },
    {
      title: 'Intermediate (MPC)',
      institution: 'Narayana Junior College, Vijayawada',
      period: '2019 – 2021',
      score: 'Percentage: 88.6%',
      badge: 'Intermediate',
    },
    {
      title: 'Secondary School (10th Standard)',
      institution: 'Narayana E-Techno Schools, Vijayawada',
      period: '2018 – 2019',
      score: 'CGPA: 9.5',
      badge: '10th Standard',
    },
  ];

  return (
    <section id="about" className="about min-h-[100svh] py-6 sm:py-8 lg:py-10 pb-16 lg:pb-20 px-6 sm:px-10 lg:px-12 bg-white flex flex-col justify-center text-[#102A43]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="section-title">
          <h2>About</h2>
          <p className="text-[#526579] text-xs sm:text-sm leading-relaxed">
            Computer Science undergraduate at VIT-AP University &amp; Full Stack Developer Intern at Destini.ai.
            Specializing in scalable full-stack web and mobile apps (React, React Native, Node.js, Express, MongoDB, Azure) and data analytics (Python, SQL, Tableau).
          </p>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center mt-3 sm:mt-4">
          {/* Profile Photo */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative group max-w-[170px] sm:max-w-[195px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img
                src="assets/img/Revanth Valluru profile.png"
                alt="Valluru Sai Manikanta Revanth"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/img/Revanth Valluru profile.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Bio & Details */}
          <div className="lg:col-span-9 space-y-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-raleway text-[#102A43] mb-1">
                Full Stack Developer &amp; Data Analyst
              </h3>
              <p className="italic text-[#526579] text-xs sm:text-[13px] border-l-2 border-[#0EA5E9] pl-2.5 py-0.5">
                B.Tech in Computer Science and Engineering &bull; VIT-AP University, Amaravati (CGPA: 8.45)
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 py-1 text-xs sm:text-[13px]">
              {quickDetails.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-[#526579]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0EA5E9] flex-shrink-0" />
                  <strong className="font-semibold text-[#102A43]">{item.label}:</strong>
                  <span className="text-[#526579] truncate">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Narrative text */}
            <div className="text-[#526579] text-xs sm:text-[13px] leading-relaxed pt-2 border-t border-slate-200">
              <p>
                Experienced in building scalable full-stack web and cross-platform mobile applications, integrating AI services (Azure AI Translation, Gemini API), implementing SSO authentication and payment systems, and architecting data visualization pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="mt-4 pt-3 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-2.5">
            <GraduationCap className="w-4 h-4 text-[#0EA5E9]" />
            <h3 className="text-sm sm:text-base font-bold font-raleway text-[#102A43]">
              Academic Qualifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#102235] border border-slate-700/50 hover:border-[#38BDF8] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#172F46] text-[#38BDF8] border border-sky-500/30">
                      {edu.badge}
                    </span>
                    <span className="text-[11px] text-[#C1D0DF] font-mono">{edu.period}</span>
                  </div>
                  <h4 className="font-bold text-[#F8FAFC] text-xs sm:text-[13px] leading-snug mb-1 font-raleway group-hover:text-[#38BDF8] transition-colors">
                    {edu.title}
                  </h4>
                  <p className="text-[11px] text-[#C1D0DF] mb-2">{edu.institution}</p>
                </div>
                <div className="pt-2 border-t border-slate-700/50 flex items-center justify-between">
                  <span className="text-[11px] text-[#C1D0DF] font-medium">Performance:</span>
                  <span className="text-xs font-bold text-[#38BDF8] font-mono">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
