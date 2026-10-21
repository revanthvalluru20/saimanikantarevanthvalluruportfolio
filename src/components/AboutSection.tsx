import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, MapPin, Mail, Phone,
  UserCheck, School, Building2, Linkedin, ExternalLink,
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export const AboutSection: React.FC = () => {
  const quickDetails = [
    { label: 'Degree',         value: 'B.Tech CSE (2021–2025)',        icon: GraduationCap },
    { label: 'University',     value: 'VIT-AP University, Amaravati',   icon: Building2 },
    { label: 'Phone',          value: '+91 8790515520',                 icon: Phone, href: 'tel:+918790515520' },
    { label: 'Email',          value: 'saimanikantarevanthv@gmail.com', icon: Mail, href: 'mailto:saimanikantarevanthv@gmail.com' },
    { label: 'Location',       value: 'Vijayawada / Amaravati, India',  icon: MapPin },
    { label: 'Current Role',   value: 'Full Stack Intern – Destini.ai', icon: UserCheck },
    { label: 'LinkedIn',       value: 'revanth-valluru',                icon: Linkedin, href: 'https://www.linkedin.com/in/sai-manikanta-revanth-valluru-a36198272/' },
    { label: 'Specialization', value: 'Web & Mobile App Development',   icon: School },
  ];

  const educationHistory = [
    {
      title:       'Bachelor of Technology in Computer Science and Engineering',
      institution: 'VIT-AP University, Amaravati',
      period:      '2021 – 2025',
      score:       'CGPA: 8.45',
      badge:       'B.Tech CSE',
    },
    {
      title:       'Intermediate (MPC)',
      institution: 'Narayana Junior College, Vijayawada',
      period:      '2019 – 2021',
      score:       'Percentage: 88.6%',
      badge:       'Intermediate',
    },
    {
      title:       'Secondary School (10th Standard)',
      institution: 'Narayana E-Techno Schools, Vijayawada',
      period:      '2018 – 2019',
      score:       'CGPA: 9.5',
      badge:       '10th Standard',
    },
  ];

  return (
    <section
      id="about"
      className="about w-full h-[100svh] flex flex-col justify-center overflow-hidden px-5 sm:px-8 lg:px-12 text-[#10233F]"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-4 sm:gap-5">

        {/* ── Section Header ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex flex-col gap-1.5"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-raleway text-[#10233F] tracking-tight leading-none">
              About
            </h2>
            <div className="h-[3px] w-14 bg-gradient-to-r from-[#087CF0] to-[#12B8F5] rounded-full mt-1" />
          </div>
          <p className="text-xs sm:text-sm text-[#526B8A] max-w-3xl leading-relaxed">
            Computer Science undergraduate at VIT-AP University &amp; Full Stack Developer Intern at Destini.ai.
            Specializing in scalable web &amp; mobile apps (React, Node.js, MongoDB, Azure) and data analytics (Python, SQL, Tableau).
          </p>
        </motion.div>

        {/* ── Profile Card ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.07 }}
          className="white-card p-5 sm:p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Portrait */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="w-28 sm:w-36 lg:w-40 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D7EAF8] shadow-md bg-slate-100 flex-shrink-0">
                <img
                  src={getAssetUrl('assets/img/Revanth Valluru profile.png')}
                  alt="Revanth Valluru"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getAssetUrl('assets/img/Revanth Valluru.jpg');
                  }}
                />
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-9 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-raleway text-[#10233F]">
                    Full Stack Developer &amp; Data Analyst
                  </h3>
                  <p className="text-xs sm:text-sm text-[#087CF0] font-medium mt-0.5">
                    VIT-AP University, Amaravati &bull; Destini.ai Intern
                  </p>
                </div>

                {/* LinkedIn Badge */}
                <a
                  href="https://www.linkedin.com/in/sai-manikanta-revanth-valluru-a36198272/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white border border-[#0A66C2]/30 transition-all shadow-xs group w-fit"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] group-hover:text-white transition-colors" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-[#0A66C2]/70 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* 4-column info grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 text-xs sm:text-[13px]">
                {quickDetails.map((item, i) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-2 text-[#526B8A] min-w-0 group/item">
                      <div className="w-6 h-6 rounded-lg bg-[#EFF8FF] text-[#087CF0] flex items-center justify-center flex-shrink-0 border border-[#D7EAF8]/80 shadow-xs group-hover/item:bg-[#087CF0] group-hover/item:text-white transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold text-[#10233F] flex-shrink-0">{item.label}:</span>
                      <span className="truncate group-hover/item:text-[#087CF0] transition-colors">{item.value}</span>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="block truncate hover:opacity-90 cursor-pointer"
                      title={`Open ${item.label}`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={i} className="block truncate">
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Summary */}
              <div className="pt-2.5 border-t border-[#D7EAF8]/80 text-xs sm:text-sm text-[#526B8A] leading-relaxed">
                Experienced in building scalable full-stack web and cross-platform mobile applications,
                integrating AI services (Azure AI Translation, Gemini API), implementing secure SSO authentication,
                and architecting data visualization pipelines with real-world impact.
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Academic Qualifications ──────────────────── */}
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <GraduationCap className="w-4 h-4 text-[#087CF0]" />
            <h3 className="text-sm sm:text-base font-bold font-raleway text-[#10233F]">
              Academic Qualifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {educationHistory.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="white-card p-4 sm:p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EFF8FF] text-[#087CF0] border border-[#D7EAF8]">
                      {edu.badge}
                    </span>
                    <span className="text-xs text-[#526B8A] font-mono">{edu.period}</span>
                  </div>
                  <h4 className="font-bold text-[#10233F] text-xs sm:text-sm leading-snug mb-1 font-raleway">
                    {edu.title}
                  </h4>
                  <p className="text-xs text-[#526B8A]">{edu.institution}</p>
                </div>
                <div className="pt-2.5 border-t border-[#D7EAF8]/80 flex items-center justify-between mt-2.5">
                  <span className="text-[#526B8A] font-medium text-xs">Performance:</span>
                  <span className="font-bold text-[#087CF0] font-mono text-xs">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

