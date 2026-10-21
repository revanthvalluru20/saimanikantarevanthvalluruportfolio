import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, FileText, Image, Mail, Award, Menu, X, Github, Linkedin, Code } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile sidebar on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience & Education', icon: Briefcase },
    { id: 'skills', label: 'Technical Skills', icon: FileText },
    { id: 'portfolio', label: 'Projects', icon: Image },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="xl:hidden fixed top-4 right-4 z-50 w-11 h-11 bg-[#149ddd] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0f7bb0] transition-colors focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Main Sidebar */}
      <header
        className={`fixed top-0 bottom-0 left-0 z-40 w-[300px] bg-[#040b14] text-white transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto px-6 py-7 select-none ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'
        }`}
      >
        <div>
          {/* Profile Card Section */}
          <div className="text-center pt-2 pb-5">
            <div className="relative mx-auto w-[120px] h-[120px] mb-3">
              <img
                src="assets/img/Revanth Valluru profile.png"
                alt="ID photo of Valluru Sai Manikanta Revanth"
                className="w-full h-full object-cover rounded-full border-8 border-[#2c2f3f] shadow-md hover:border-[#149ddd] transition-colors duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/img/Revanth Valluru profile.png';
                }}
              />
            </div>

            <h1 className="text-2xl font-bold font-raleway text-white tracking-wide mb-1">
              Revanth Valluru
            </h1>
            <p className="text-xs text-[#a8a9b4] font-poppins">
              Full Stack Developer &bull; VIT-AP
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <a
                href="https://www.linkedin.com/in/sai-manikanta-revanth-valluru-a36198272/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#212431] flex items-center justify-center text-[#a8a9b4] hover:bg-[#149ddd] hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://leetcode.com/u/revanthvalluru2073/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="w-9 h-9 rounded-full bg-[#212431] flex items-center justify-center text-[#a8a9b4] hover:bg-[#149ddd] hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <Code className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/revanthvalluru20?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-full bg-[#212431] flex items-center justify-center text-[#a8a9b4] hover:bg-[#149ddd] hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.hackerrank.com/profile/saimanikantarev1"
                target="_blank"
                rel="noopener noreferrer"
                title="HackerRank"
                className="w-9 h-9 rounded-full bg-[#212431] flex items-center justify-center text-[#a8a9b4] hover:bg-[#149ddd] hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-hackerrank text-sm"></i>
              </a>

              <a
                href="mailto:saimanikantarevanthv@gmail.com"
                title="Email"
                className="w-9 h-9 rounded-full bg-[#212431] flex items-center justify-center text-[#a8a9b4] hover:bg-[#149ddd] hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="navmenu mt-2">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={`group flex items-center gap-3.5 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                        isActive
                          ? 'text-[#149ddd] font-semibold'
                          : 'text-[#a8a9b4] hover:text-white'
                      }`}
                    >
                      <IconComponent
                        className={`w-4 h-4 transition-colors flex-shrink-0 ${
                          isActive
                            ? 'text-[#149ddd]'
                            : 'text-[#a8a9b4] group-hover:text-[#149ddd]'
                        }`}
                      />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Footer info in sidebar */}
        <div className="text-center pt-5 text-xs text-[#6f7180] border-t border-[#151f2b]">
          <p>© {new Date().getFullYear()} Revanth Valluru</p>
          <p className="text-[11px] text-[#555765] mt-0.5">VIT-AP University, Amaravati</p>
        </div>
      </header>
    </>
  );
};
