import React from 'react';
import { Link } from 'react-router-dom';
import { User, MapPin, Mail, Phone, GraduationCap, Award, ExternalLink, ShieldCheck, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';
import { certificationsData } from '../data/experience';
import { AdaptiveCard } from '../components/AdaptiveCard';
import { HUDLabel } from '../components/HUDLabel';

interface AboutPageProps {
  onAskAboutMe?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Dossier Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-5">
        <div className="space-y-1.5">
          <HUDLabel
            label="PERSONNEL DOSSIER // ADAPTIVE CARD WORKSPACE"
            icon={<User className="w-3.5 h-3.5" />}
            badge="MK-85 CLEARANCE"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Personnel Dossier: Sai Manikanta Revanth
          </h1>
          <p className="text-sm text-slate-400 font-mono">
            Full Stack Developer specializing in real-time web applications, AI-integrated workflows, and responsive systems.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.35)] flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Open Transmission</span>
          </Link>
        </div>
      </div>

      {/* Two-Column Holographic Dossier Layout with Adaptive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Identity Profile Card & Competencies */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Primary Profile Identity */}
          <AdaptiveCard
            cardId="profile-card"
            title="Identity Badge"
            subtitle="Personnel Record #2073"
            icon={<User className="w-5 h-5 text-cyan-400" />}
            badge="ACTIVE INTERN"
            defaultExpanded={true}
            summaryContent={
              <div className="flex items-center gap-3">
                <img
                  src="/assets/img/Revanth Valluru profile.png"
                  alt={profileData.fullName}
                  className="w-12 h-12 rounded-xl object-cover border border-cyan-400/50"
                />
                <div>
                  <div className="font-bold text-white text-xs">{profileData.fullName}</div>
                  <div className="text-[11px] font-mono text-cyan-400">Destini.ai Intern</div>
                </div>
              </div>
            }
          >
            <div className="text-center relative space-y-4">
              {/* Profile Photo in Polygonal Glass Frame */}
              <div className="relative mx-auto w-36 h-36 mt-2 mb-3">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 opacity-70 blur-md animate-pulse" />
                <div className="relative w-full h-full rounded-2xl p-1 bg-slate-950/90 border-2 border-cyan-400/60 overflow-hidden shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                  <img
                    src="/assets/img/Revanth Valluru profile.png"
                    alt={profileData.fullName}
                    className="w-full h-full object-cover object-center rounded-xl bg-slate-900"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-400 text-cyan-300 font-mono text-[10px] font-bold shadow-md">
                  SEC-ID #2073
                </div>
              </div>

              {/* Identity Details */}
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-white tracking-wide">
                  {profileData.fullName}
                </h2>
                <div className="text-xs font-mono text-cyan-300 font-medium">
                  Full Stack Developer Intern @ Destini.ai
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{profileData.location}</span>
                </div>
              </div>

              {/* Direct Verified Contact Details List */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-left text-xs font-mono space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" /> Email:
                  </span>
                  <a href={`mailto:${profileData.email}`} className="text-cyan-300 hover:underline truncate max-w-[180px]">
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
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> Degree:
                  </span>
                  <span className="text-slate-200">B.Tech CSE (8.45 CGPA)</span>
                </div>
              </div>

              {/* Verified External Social Links */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-xl bg-slate-900/90 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-400 text-slate-200 font-mono text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-xl bg-slate-900/90 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-400 text-slate-200 font-mono text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </div>
            </div>
          </AdaptiveCard>

          {/* Card 2: Core Architectural Strengths */}
          <AdaptiveCard
            cardId="competencies-card"
            title="Core Architectural Strengths"
            subtitle="Verified Capabilities"
            icon={<ShieldCheck className="w-5 h-5 text-emerald-400" />}
            summaryContent={
              <p>Full-stack web apps, React Native Android conversion, Azure translation, Socket.io sync.</p>
            }
          >
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▸</span>
                <span>Full-stack reactive web applications using React.js, Node.js, and MongoDB.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▸</span>
                <span>Cross-platform mobile conversion with React Native for Android systems.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▸</span>
                <span>Cloud-enabled multilingual localization via Azure AI Translation Services.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▸</span>
                <span>Real-time WebSocket event synchronization with Socket.io & JWT security.</span>
              </li>
            </ul>
          </AdaptiveCard>
        </div>

        {/* RIGHT COLUMN: Education Timeline, Biography & Credentials */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card 3: Verified Education Timeline */}
          <AdaptiveCard
            cardId="education-card"
            title="Verified Academic Record"
            subtitle="VIT-AP University · Sri Chaitanya · Bhashyam"
            icon={<GraduationCap className="w-5 h-5 text-cyan-400" />}
            badge="8.45 CGPA"
            defaultExpanded={true}
            summaryContent={
              <div className="space-y-1 text-xs">
                <div className="text-white font-bold">B.Tech CSE — VIT-AP (8.45 CGPA, 2021–2025)</div>
                <div className="text-slate-400">Intermediate: 88.6% • Secondary: 9.5 CGPA</div>
              </div>
            }
          >
            <div className="space-y-6 relative border-l-2 border-cyan-500/30 ml-3 pl-6 pt-1">
              {/* 1. VIT-AP B.Tech */}
              <div className="relative space-y-1.5">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#040814] shadow-[0_0_8px_#00f0ff]" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-white">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
                    CGPA: 8.45
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-300">
                  VIT-AP University, Amaravati
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Duration: 2021 – 2025
                </div>
                <p className="text-xs text-slate-400 pt-1">
                  Core curriculum in Data Structures, Algorithms, Database Systems, Web Architectures, Software Engineering, and AI methodologies.
                </p>
              </div>

              {/* 2. Intermediate */}
              <div className="relative space-y-1.5">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-blue-400 border-2 border-[#040814] shadow-[0_0_8px_#3b82f6]" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-white">
                    Intermediate Education (MPC)
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-500/40 text-blue-300 font-mono text-xs font-bold">
                    Score: 88.6%
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-300">
                  Sri Chaitanya Junior College
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Graduation: 2021
                </div>
              </div>

              {/* 3. Secondary Education */}
              <div className="relative space-y-1.5">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-purple-400 border-2 border-[#040814] shadow-[0_0_8px_#a855f7]" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-white">
                    Secondary School Certificate (SSC)
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono text-xs font-bold">
                    CGPA: 9.5
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-300">
                  Bhashyam High School
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Completion: 2019
                </div>
              </div>
            </div>
          </AdaptiveCard>

          {/* Card 4: Professional Biography */}
          <AdaptiveCard
            cardId="bio-card"
            title="Executive Biography"
            subtitle="Developer Background & Engineering Philosophy"
            icon={<Terminal className="w-5 h-5 text-cyan-400" />}
            summaryContent={
              <p>Specializes in full stack development, mobile engineering, and AI interfaces.</p>
            }
          >
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <p>
                I am a dedicated Computer Science and Engineering graduate from <strong>VIT-AP University</strong> with hands-on experience in full stack software engineering, mobile application development, and AI workflow integration.
              </p>
              <p>
                Currently serving as a <strong>Full Stack Developer Intern at Destini.ai</strong>, I have contributed directly to enterprise-grade platforms by enhancing React.js workflows, porting web systems to Android using React Native, implementing multilingual translation powered by Microsoft Azure AI, and developing secure Single Sign-On (SSO) payout integrations.
              </p>
              <p>
                My independent engineering work spans real-time social gaming hubs (<strong>VibeVerse</strong>), AI-driven programming mentors (<strong>MentorAI-CodeSpace</strong>), and interactive cardiovascular risk dashboards. I focus on clean software craftsmanship, type-safe development, and resilient architecture.
              </p>
            </div>
          </AdaptiveCard>

          {/* Card 5: Industry Certifications */}
          <AdaptiveCard
            cardId="certifications-card"
            title="Industry Certifications"
            subtitle="Verified Training & Hands-On Externships"
            icon={<Award className="w-5 h-5 text-amber-400" />}
            summaryContent={
              <p>MERN Full Stack (Ethnus) & Data Analytics (SmartInternz) certified.</p>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1"
                >
                  <div className="font-bold text-slate-200">{cert.title}</div>
                  <div className="font-mono text-cyan-400 text-[11px]">{cert.issuer}</div>
                  <div className="font-mono text-slate-500 text-[10px]">Period: {cert.period}</div>
                </div>
              ))}
            </div>
          </AdaptiveCard>
        </div>
      </div>
    </div>
  );
};
