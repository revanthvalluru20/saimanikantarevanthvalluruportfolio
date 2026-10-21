import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Sparkles, BarChart3, Layout } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'AI & NLP' | 'Data Analytics' | 'Frontend';
  tagline: string;
  bullets: string[];
  technologies: string[];
  image: string;
  link: string;
  githubUrl?: string;
}

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: ProjectItem[] = [
    {
      id: 'vibeverse',
      title: 'VibeVerse',
      category: 'Full Stack',
      tagline: 'Gaming-focused social platform with real-time communication & multiplayer games.',
      bullets: [
        'Developed a social media platform where users connect, communicate in real time, and play integrated multiplayer games.',
        'Implemented secure JWT-based authentication and scalable REST APIs using Node.js, Express.js, and MongoDB.',
        'Integrated Socket.io for real-time messaging and multiplayer game synchronization.',
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
      image: '/assets/img/vibeverse.jpg',
      link: 'https://vibe-verse-rho.vercel.app/home',
      githubUrl: 'https://github.com/revanthvalluru20',
    },
    {
      id: 'mentorai-codespace',
      title: 'MentorAI — AI Coding Workspace',
      category: 'AI & NLP',
      tagline: 'AI-assisted programming platform with Monaco editor and Gemini API guidance.',
      bullets: [
        'Developed an interactive coding workspace for learning programming, code generation, debugging, and execution.',
        'Integrated Gemini API for contextual coding explanations, step-by-step guidance, and real-time debugging.',
        'Implemented secure JWT authentication and persistent coding sessions using Express.js and MongoDB.',
      ],
      technologies: ['React.js', 'Vite', 'Gemini API', 'Node.js', 'MongoDB'],
      image: '/assets/img/mentorai.jpg',
      link: 'https://mentor-ai-one-swart.vercel.app/workspace',
      githubUrl: 'https://github.com/revanthvalluru20',
    },
    {
      id: 'cardiovascular-analytics',
      title: 'Cardiovascular Risk Analytics',
      category: 'Data Analytics',
      tagline: 'Clinical dataset exploration and interactive Tableau stories identifying risk patterns.',
      bullets: [
        'Performed data exploration and preprocessing on cardiovascular datasets to identify key risk factors.',
        'Created interactive Tableau dashboards and visual stories to present insights across patient attributes.',
        'Utilized Python, Pandas, NumPy, SQL, and Tableau for end-to-end data pipelines.',
      ],
      technologies: ['Python', 'SQL', 'Pandas', 'Tableau'],
      image: '/assets/img/heart.avif',
      link: 'https://public.tableau.com/app/profile/vishnupriya.pragada/viz/Dashboard_16989481972700/Dashboard1?publish=yes',
    },
    {
      id: 'auto-paper-corrector',
      title: 'Auto Paper Corrector',
      category: 'AI & NLP',
      tagline: 'AI-assisted assignment evaluation using NLP similarity metrics and rubric scoring.',
      bullets: [
        'Designed an automated paper correction pipeline using NLP similarity metrics to evaluate written answers.',
        'Implemented text preprocessing, tokenization, and cosine similarity scoring against benchmark rubrics.',
        'Generated automated evaluation reports with detailed score breakdowns.',
      ],
      technologies: ['Python', 'NLP', 'Cosine Similarity', 'Text Mining'],
      image: '/assets/img/autopaper.jpg',
      link: 'https://drive.google.com/file/d/1XVN2tq-D3dZLoWbzyf7_yws_F1uNUbhQ/view',
    },
    {
      id: 'chess-game',
      title: 'Chess Master',
      category: 'Frontend',
      tagline: 'Interactive 2D chess game with full move validation and an algorithmic bot.',
      bullets: [
        'Implemented complete chess logic, movement validation, check/checkmate detection, and turn-based play.',
        'Engineered an algorithmic bot opponent with piece-square evaluation tables and advantage scoring.',
        'Zero external game engines — native JavaScript and React DOM rendering.',
      ],
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)'],
      image: '/assets/img/chessgame1.webp',
      link: 'https://revanthvalluru20.github.io/chessgame2D/',
      githubUrl: 'https://github.com/revanthvalluru20/chessgame2D',
    },
    {
      id: 'github-portfolio',
      title: 'More Projects on GitHub',
      category: 'Full Stack',
      tagline: 'Explore 25+ open-source repositories, algorithms, architectures, and experiments.',
      bullets: [
        'Explore 25+ open-source repositories, web apps, and machine learning projects on GitHub.',
        'Active contributions across React, Node.js, Python, full-stack systems, and algorithmic problem solving.',
      ],
      technologies: ['GitHub', 'Git', 'Open Source', 'CI/CD'],
      image: '/assets/img/github-showcase.jpg',
      link: 'https://github.com/revanthvalluru20',
      githubUrl: 'https://github.com/revanthvalluru20',
    },
  ];

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'AI & NLP', label: 'AI & NLP' },
    { id: 'Data Analytics', label: 'Data Analytics' },
    { id: 'Frontend', label: 'Frontend' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Code2 className="w-3 h-3" />;
      case 'AI & NLP':
        return <Sparkles className="w-3 h-3" />;
      case 'Data Analytics':
        return <BarChart3 className="w-3 h-3" />;
      case 'Frontend':
        return <Layout className="w-3 h-3" />;
      default:
        return <Code2 className="w-3 h-3" />;
    }
  };

  return (
    <section
      id="portfolio"
      className="portfolio w-full h-[100svh] flex flex-col justify-center overflow-hidden px-4 sm:px-8 lg:px-12 text-[#10233F]"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-2">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-0.5"
        >
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-raleway text-[#10233F] tracking-tight leading-none">
              <span>Personal </span>
              <span className="accent-word">Projects</span>
            </h2>
            <div className="h-[3px] w-12 bg-gradient-to-r from-[#087CF0] to-[#12B8F5] rounded-full mt-0.5" />
          </div>
          <p className="text-[11px] sm:text-xs text-[#526B8A] leading-relaxed">
            Selected personal engineering, AI workspaces, and data analytics applications.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {filterCategories.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-0.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#087CF0] to-[#12B8F5] text-white shadow-xs shadow-[#087CF0]/25'
                    : 'bg-white text-[#526B8A] hover:text-[#087CF0] border border-[#D7EAF8] hover:border-[#087CF0]/40'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Responsive Grid (3 cols x 2 rows = 6 projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="white-card p-2.5 sm:p-3 flex flex-col justify-between group overflow-hidden border border-[#D7EAF8] hover:border-[#087CF0]/50 hover:shadow-md transition-all"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/7.5] rounded-xl overflow-hidden bg-slate-100 mb-1.5 border border-[#D7EAF8]/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Category Badge on Top Left */}
                  <div className="absolute top-1.5 left-1.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/95 backdrop-blur-md text-[#087CF0] border border-[#D7EAF8] shadow-xs">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  {/* Action Links on Top Right */}
                  <div className="absolute top-1.5 right-1.5 z-10 flex items-center gap-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-5.5 h-5.5 rounded-md bg-white/95 backdrop-blur-md text-[#10233F] hover:text-[#087CF0] border border-[#D7EAF8] flex items-center justify-center shadow-xs transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-5.5 h-5.5 rounded-md bg-white/95 backdrop-blur-md text-[#10233F] hover:text-[#087CF0] border border-[#D7EAF8] flex items-center justify-center shadow-xs transition-colors"
                      title="Open Live Project"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-start justify-between gap-1 mb-0.5">
                  <h3 className="font-bold text-[#10233F] text-xs sm:text-[13px] font-raleway group-hover:text-[#087CF0] transition-colors truncate">
                    {project.title}
                  </h3>
                </div>

                {/* Tagline / Description */}
                <p className="text-[11px] text-[#526B8A] leading-tight mb-1.5 line-clamp-1">
                  {project.tagline}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1 mb-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.2 rounded-md text-[10px] font-medium bg-[#EFF8FF] text-[#087CF0] border border-[#D7EAF8]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.2 rounded-md text-[10px] font-medium bg-[#F7FBFF] text-[#526B8A] border border-[#D7EAF8]">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* View Project Action Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="w-full py-1 rounded-lg text-xs font-semibold text-[#087CF0] bg-[#EFF8FF] hover:bg-[#087CF0] hover:text-white border border-[#D7EAF8] flex items-center justify-center gap-1 transition-all text-center"
              >
                <span>{project.id === 'github-portfolio' ? 'Explore GitHub' : 'View Project'}</span>
                {project.id === 'github-portfolio' ? <Github className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
