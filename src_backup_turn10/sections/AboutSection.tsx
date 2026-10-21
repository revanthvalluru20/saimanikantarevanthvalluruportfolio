import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, GraduationCap, Award, ExternalLink, Code2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { educationData, certificationsData } from '../data/experience';

interface AboutSectionProps {
  onAskAboutMe: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onAskAboutMe }) => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
          <User className="w-3.5 h-3.5 text-cyan-400" />
          <span>PERSONNEL TELEMETRY // BIOGRAPHY & CREDENTIALS</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          About Sai Manikanta Revanth
        </h2>
        <p className="text-sm text-slate-400 font-mono max-w-2xl">
          Full Stack Software Developer focused on building responsive web platforms, real-time architectures, mobile applications, and interactive data analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Card: Holographic ID Badge */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 p-6 rounded-2xl glass-panel border border-cyan-500/30 text-center relative overflow-hidden shadow-glass space-y-5"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          {/* Profile Photo */}
          <div className="relative mx-auto w-36 h-36 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(0,240,255,0.35)]">
            <img
              src={profileData.profileImage}
              alt={profileData.fullName}
              className="w-full h-full object-cover rounded-full bg-slate-900 border-2 border-[#040814]"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">
              {profileData.fullName}
            </h3>
            <p className="text-xs font-mono text-cyan-300 mt-1">
              Full Stack Developer Intern @ Destini.ai
            </p>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Contact Details List */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-left text-xs font-mono space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> Email:
              </span>
              <a href={`mailto:${profileData.email}`} className="text-cyan-300 hover:underline truncate max-w-[200px]">
                {profileData.email}
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" /> Phone:
              </span>
              <span className="text-slate-200">{profileData.phone}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> Education:
              </span>
              <span className="text-slate-200">B.Tech CSE (8.45 CGPA)</span>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-400 text-slate-200 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-400 text-slate-200 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-400 text-slate-200 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>LeetCode</span>
            </a>
            <a
              href={profileData.socials.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-400 text-slate-200 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>HackerRank</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onAskAboutMe}
            className="w-full py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400 text-cyan-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <span>Ask REVA AI About My Background</span>
          </button>
        </motion.div>

        {/* Right Column: Bio Narrative, Education & Certifications */}
        <div className="lg:col-span-7 space-y-6">
          {/* Engineering Narrative */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">//</span>
              <span>Engineering Background</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I completed my Bachelor of Technology in Computer Science and Engineering at <strong>VIT-AP University, Amaravati</strong> (2021–2025) with a <strong>CGPA of 8.45</strong>. My foundational schooling includes an 88.6% in Intermediate Education from Narayana Junior College and a 9.5 CGPA in Secondary Education from Narayana E-Techno Schools in Vijayawada.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Currently, I am working as a <strong>Full Stack Developer Intern at Destini.ai</strong> (October 2025 – Present). In this role, I have refactored application workflows using React.js, converted an existing web app into an Android application with React Native, configured multilingual support with i18n and Azure AI Translation Services, and engineered an SSO-based payout system alongside an enterprise Admin Panel.
            </p>

            {/* Academic Track Record */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                Education Credentials
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {educationData.map((edu, idx) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800"
                  >
                    <div className="font-mono text-xs text-cyan-300 font-bold">{edu.score}</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5">{edu.degree}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{edu.institution}</div>
                    <div className="text-[10px] font-mono text-slate-500 mt-1">{edu.period}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Externships */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <span>Certifications & Externships</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-cyan-400 uppercase font-semibold">{cert.issuer}</span>
                    <span className="font-mono text-[10px] text-slate-500">{cert.period}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-200">{cert.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
