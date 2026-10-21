import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Github, ArrowUpRight, Tag } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  tags: string[];
  technologies: string[];
  image: string;
  link?: string;
  githubUrl?: string;
  category: string;
}

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'vibeverse',
      title: 'VibeVerse',
      category: 'Full Stack',
      tagline: 'A gaming-focused social platform with real-time communication, interactive gaming experiences, JWT authentication, OTP verification, and Socket.IO integration.',
      bullets: [
        'Developed a social media platform where users can connect, interact, join gaming communities, communicate in real time, and play integrated multiplayer games.',
        'Implemented secure JWT-based authentication, scalable REST APIs using Node.js & Express.js, and integrated the Brevo Email API for OTP-based email verification and password recovery.',
        'Integrated Socket.io for real-time messaging and multiplayer game synchronization, with MongoDB for persistent data management.',
      ],
      tags: ['fullstack'],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Brevo', 'REST APIs'],
      image: '/assets/img/vibeverse.jpg',
      link: 'https://vibe-verse-rho.vercel.app/home',
      githubUrl: 'https://github.com/revanthvalluru20',
    },
    {
      id: 'mentorai-codespace',
      title: 'MentorAI — AI-Powered Interactive Coding Environment',
      category: 'AI & NLP',
      tagline: 'An AI-powered coding workspace for learning, code generation, debugging, and execution with step-by-step Gemini API guidance.',
      bullets: [
        'Developed an AI-powered coding workspace for learning programming concepts, generating solutions, debugging code, and interactively executing programs.',
        'Integrated the Gemini API for contextual explanations, step-by-step coding guidance, intelligent debugging, and AI-assisted problem solving within a Monaco-based code editor.',
        'Implemented secure JWT authentication and persistent coding sessions using Node.js, Express.js, and MongoDB, with multi-language support and standard input/output execution.',
      ],
      tags: ['ai', 'fullstack'],
      technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Monaco Editor', 'Gemini API', 'JWT'],
      image: '/assets/img/mentorai.jpg',
      link: 'https://mentor-ai-one-swart.vercel.app/workspace',
      githubUrl: 'https://github.com/revanthvalluru20',
    },
    {
      id: 'auto-paper-corrector',
      title: 'Auto Paper Corrector',
      category: 'AI & NLP',
      tagline: 'An AI-assisted assignment evaluation project designed to automate the assessment of handwritten student submissions using NLP.',
      bullets: [
        'Designed an automated paper correction pipeline using NLP similarity metrics and semantic embeddings to evaluate written answers against standardized rubrics.',
        'Implemented text preprocessing, tokenization, stop-word filtering, and cosine similarity scoring to compare student formulations against benchmark answer keys.',
        'Generated automated evaluation reports with score breakdowns and semantic match analysis.',
      ],
      tags: ['ai'],
      technologies: ['Python', 'NLP', 'Text Similarity', 'Semantic Analysis', 'Cosine Similarity'],
      image: '/assets/img/autopaper.jpg',
      link: 'https://drive.google.com/file/d/1XVN2tq-D3dZLoWbzyf7_yws_F1uNUbhQ/view',
    },
    {
      id: 'cardiovascular-analytics',
      title: 'Cardiovascular Risk Analytics Dashboard',
      category: 'Data Analytics',
      tagline: 'Health analytics and interactive data visualization exploring cardiovascular clinical datasets to identify critical risk patterns.',
      bullets: [
        'Performed data exploration and preprocessing on cardiovascular datasets to identify key health risk factors and patterns.',
        'Created interactive Tableau dashboards and stories to visualize trends, comparisons, and insights across different patient attributes.',
        'Used Python, Pandas, NumPy, SQL, and Tableau for data analysis and visualization.',
      ],
      tags: ['analytics'],
      technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau'],
      image: '/assets/img/heart.avif',
      link: 'https://public.tableau.com/app/profile/vishnupriya.pragada/viz/Dashboard_16989481972700/Dashboard1?publish=yes',
    },
    {
      id: 'chess-game',
      title: 'Chess Game 2D',
      category: 'Frontend',
      tagline: 'A browser-based strategic 2D chess game with complete rule enforcement and an algorithmic bot opponent.',
      bullets: [
        'Implemented chess board logic, full piece movement validation, check/checkmate detection, castling, and turn-based play using vanilla JavaScript.',
        'Programmed an algorithmic bot opponent with piece-square evaluation tables and material-advantage scoring.',
        'Zero external game engine dependencies — runs smoothly in any modern browser with HTML5 DOM rendering.',
      ],
      tags: ['frontend'],
      technologies: ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
      image: '/assets/img/chessgame1.webp',
      link: 'https://revanthvalluru20.github.io/chessgame2D/',
      githubUrl: 'https://github.com/revanthvalluru20/chessgame2D',
    },
    {
      id: 'tasty-trail',
      title: 'Tasty Trail',
      category: 'Frontend',
      tagline: 'A responsive food delivery and restaurant discovery platform with curated menus and interactive cart ordering.',
      bullets: [
        'Built React UI components with restaurant cards, categorized food menus, location filters, and an order placement workflow.',
        'Integrated REST API endpoints to fetch live restaurant listings and menu datasets with dynamic cart and price recalculation.',
      ],
      tags: ['frontend'],
      technologies: ['React.js', 'REST APIs', 'CSS3'],
      image: '/assets/img/Food-Delivery.jpg',
      link: 'http://tastytrailfood.ccbp.tech',
    },
    {
      id: 'vconnect',
      title: 'V-Connect',
      category: 'Full Stack',
      tagline: 'A university social networking platform with student profiles, posts, real-time messaging, and community connections.',
      bullets: [
        'Built a university-focused social platform enabling student connections, community posts, study group discovery, and event listings.',
        'Implemented JWT-based authentication, user profile management, and real-time messaging with Socket.io.',
        'Designed RESTful APIs with Node.js and Express.js backed by MongoDB for persistent social data.',
      ],
      tags: ['fullstack'],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
      image: '/assets/img/vconnect.jpg',
      link: 'https://v-connect-dnc1.onrender.com/',
      githubUrl: 'https://github.com/revanthvalluru20',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ai', label: 'AI & NLP' },
    { key: 'analytics', label: 'Data Analytics' },
    { key: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.tags.includes(activeFilter);
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
    }),
  };

  return (
    <>
      <section id="portfolio" className="portfolio min-h-[100svh] py-6 sm:py-8 lg:py-10 pb-16 lg:pb-20 px-6 sm:px-10 lg:px-12 bg-[#F7FAFC] text-[#102A43] flex flex-col justify-start">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Title */}
          <div className="section-title">
            <h2>Personal Projects</h2>
            <p className="text-[#526579] text-xs sm:text-sm">
              Selected personal engineering and data analytics projects.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeFilter === f.key
                    ? 'bg-[#0EA5E9] text-white shadow-md shadow-sky-500/25 scale-105'
                    : 'bg-white text-[#526579] hover:text-[#0EA5E9] border border-slate-200 hover:border-[#0EA5E9] shadow-xs'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
                  onClick={() => setPreviewProject(project)}
                  className="group bg-[#102235] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-[#38BDF8] transition-all duration-300 border border-slate-700/50 flex flex-col justify-between cursor-pointer"
                  style={{ willChange: 'transform' }}
                >
                  {/* Image with overlay */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-[#172F46]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />

                    {/* Gradient Overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102235] via-transparent to-black/20 opacity-70" />

                    {/* Category badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#102235]/90 backdrop-blur-md text-[#38BDF8] border border-slate-700/60 shadow-xs">
                        <Tag className="w-2.5 h-2.5" />
                        {project.category}
                      </span>
                    </div>

                    {/* Top-right action icons */}
                    <div className="absolute top-2.5 right-2.5 flex gap-1.5 z-10">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-7 h-7 rounded-full bg-[#172F46]/90 backdrop-blur-md text-[#F8FAFC] border border-slate-700/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-[#0EA5E9] hover:text-white hover:scale-110 shadow-sm"
                          title="View on GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-7 h-7 rounded-full bg-[#0EA5E9]/90 backdrop-blur-md text-white border border-sky-400/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-[#0284C7] hover:scale-110 shadow-sm"
                          title="View Live Project"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between gap-2.5">
                    <div>
                      <div className="flex items-start justify-between gap-1.5 mb-1.5">
                        <h3 className="text-xs sm:text-sm font-bold font-raleway text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200 leading-snug line-clamp-1">
                          {project.title}
                        </h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-shrink-0 flex items-center gap-0.5 text-[11px] font-semibold text-[#38BDF8] hover:underline"
                            title="View Project"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      <p className="text-[11px] sm:text-xs text-[#C1D0DF] leading-relaxed line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Tech Tags & CTA Button */}
                    <div className="space-y-2.5 pt-2.5 border-t border-slate-700/50">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#172F46] text-[#C1D0DF] border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#172F46] text-[#829AB1] border border-slate-700/60">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full py-1.5 sm:py-2 rounded-xl bg-[#172F46] hover:bg-[#0EA5E9] border border-sky-500/30 hover:border-[#0EA5E9] text-[#38BDF8] hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 shadow-xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>View Project</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Details Modal */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setPreviewProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full bg-[#102235] text-[#F8FAFC] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#172F46] hover:bg-[#0EA5E9] text-white flex items-center justify-center transition-colors border border-slate-700/60"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[35vh] bg-[#172F46] flex items-center justify-center overflow-hidden relative">
                <img
                  src={previewProject.image}
                  alt={previewProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102235] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 overflow-y-auto space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider">{previewProject.category}</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-raleway text-[#F8FAFC] mt-1">
                      {previewProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#C1D0DF] italic mt-1">
                      {previewProject.tagline}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {previewProject.githubUrl && (
                      <a
                        href={previewProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#172F46] text-[#F8FAFC] text-xs font-semibold hover:bg-[#1f3d5a] transition-colors border border-slate-700/60 shadow-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {previewProject.link && (
                      <a
                        href={previewProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0EA5E9] text-white text-xs font-semibold hover:bg-[#0284C7] transition-colors shadow-md shadow-sky-500/25"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#F8FAFC] mb-2 uppercase tracking-wider">Implementation Details:</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#C1D0DF]">
                    {previewProject.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {previewProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#172F46] text-[#38BDF8] border border-sky-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
