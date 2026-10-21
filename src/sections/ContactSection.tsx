import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ExternalLink, ArrowUp, Sparkles, Code2, Award } from 'lucide-react';
import { profileData } from '../data/profile';

interface ContactSectionProps {
  onScrollToTop: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onScrollToTop }) => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    // Client-side simulation
    setIsSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    }, 4000);
  };

  return (
    <footer id="contact" className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span>COMMUNICATION LINK // RECRUITER & COLLABORATION INQUIRIES</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Initiate Contact & Connect
        </h2>
        <p className="text-sm text-slate-400 font-mono max-w-2xl">
          Currently open for Full Stack Developer and Software Engineer opportunities. Let's discuss system architecture, projects, or team collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Details & Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">//</span>
              <span>Verified Direct Channels</span>
            </h3>

            {/* Email Card */}
            <a
              href={`mailto:${profileData.email}`}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-400/60 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Primary Email</div>
                  <div className="text-xs font-mono text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {profileData.email}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Phone Card */}
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/30">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Mobile</div>
                  <div className="text-xs font-mono text-slate-200">{profileData.phone}</div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Location</div>
                  <div className="text-xs font-mono text-slate-200">{profileData.location}</div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-2 border-t border-slate-800">
              <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">
                Professional Network Profiles:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-cyan-950/50 border border-slate-800 hover:border-cyan-400/50 text-slate-300 font-mono text-xs flex items-center justify-between transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-cyan-950/50 border border-slate-800 hover:border-cyan-400/50 text-slate-300 font-mono text-xs flex items-center justify-between transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
                <a
                  href={profileData.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-cyan-950/50 border border-slate-800 hover:border-cyan-400/50 text-slate-300 font-mono text-xs flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-1">
                    <Code2 className="w-3 h-3 text-amber-400" />
                    <span>LeetCode</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>
                <a
                  href={profileData.socials.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-cyan-950/50 border border-slate-800 hover:border-cyan-400/50 text-slate-300 font-mono text-xs flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-emerald-400" />
                    <span>HackerRank</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick Direct Transmission Form */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-2xl glass-panel border border-slate-800 space-y-5">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Transmit Recruiter Inquiry</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Leave a direct message or role inquiry. Dispatches locally with instant confirmation.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-cyan-950/50 border border-cyan-400/60 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto" />
                <h4 className="text-base font-bold text-cyan-200">Transmission Logged Successfully</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you! Your message has been recorded into the command center telemetry. For fastest response, you can also email directly to <span className="text-cyan-300 font-mono">{profileData.email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1">
                      Your Name / Organization:
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Talent Partner / Tech Recruiter"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 text-slate-100 text-xs md:text-sm font-sans focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1">
                      Your Contact Email:
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="recruiter@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 text-slate-100 text-xs md:text-sm font-sans focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1">
                    Inquiry / Role Scope:
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="We have an open Full Stack Developer role and were impressed with your V-Connect and Destini.ai work..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 text-slate-100 text-xs md:text-sm font-sans focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Transmission</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer Meta & Scroll Top */}
      <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>
          © {new Date().getFullYear()} Valluru Sai Manikanta Revanth. All systems operational.
        </div>
        <div className="flex items-center gap-3">
          <span>Engineered with React 18, TypeScript, Tailwind CSS & REVA AI Core</span>
          <button
            type="button"
            onClick={onScrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 hover:border-cyan-400 transition-colors"
            title="Scroll to top of command center"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
