import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ExternalLink, Copy, Check, Terminal, Shield, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profile';
import { HUDLabel } from '../components/HUDLabel';
import { AdaptiveCard } from '../components/AdaptiveCard';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleOpenMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(subject || `Inquiry from ${name || 'Portfolio Visitor'}`);
    const mailBody = encodeURIComponent(
      `Hi Sai Manikanta Revanth,\n\nName: ${name}\nCompany: ${company}\n\nMessage:\n${message}\n`
    );
    window.location.href = `mailto:${profileData.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-100 pb-5">
        <div className="space-y-1.5">
          <HUDLabel
            label="COMMUNICATION TERMINAL // DIRECT FREQUENCY"
            icon={<Mail className="w-3.5 h-3.5 text-cyan-600" />}
            badge="SECURE CHANNEL"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Initiate Contact & Collaboration
          </h1>
          <p className="text-sm text-slate-600 font-mono max-w-2xl">
            Currently open for Full Stack Developer, Software Engineer, and AI engineering opportunities. Connect directly via verified channels.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-1.5 border shadow-xs ${
              copied
                ? 'bg-emerald-500 text-white border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border-cyan-200'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4 text-cyan-600" />}
            <span>{copied ? 'EMAIL COPIED // READY' : 'Copy Email Address'}</span>
          </button>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Verified Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <AdaptiveCard
            cardId="contact-card"
            title="Verified Direct Channels"
            subtitle="Direct Email, Phone & Social Profiles"
            icon={<Terminal className="w-5 h-5 text-cyan-600" />}
            badge="ONLINE"
            defaultExpanded={true}
            summaryContent={
              <p className="text-xs text-slate-600">
                Email: {profileData.email} • Phone: {profileData.phone} • Location: {profileData.location}
              </p>
            }
          >
            <div className="space-y-4">
              {/* Email Card with Copy Trigger */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-50 border border-cyan-200">
                      <Mail className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Primary Email</div>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-xs sm:text-sm font-mono text-cyan-700 hover:underline font-bold"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white hover:bg-cyan-50 text-slate-500 hover:text-cyan-700 border border-slate-200 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <div className="text-[11px] font-mono text-emerald-600 flex items-center gap-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Email copied to clipboard successfully.</span>
                  </div>
                )}
              </div>

              {/* Direct Mobile */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Mobile Phone</div>
                    <div className="text-xs sm:text-sm font-mono text-slate-800 font-semibold">
                      {profileData.phone}
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Location & Base</div>
                    <div className="text-xs sm:text-sm font-mono text-slate-800 font-semibold">
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Network Links */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="text-[11px] font-mono text-slate-500 uppercase">
                  Direct Profiles & Repositories:
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-slate-700 font-mono text-xs flex items-center justify-between transition-all group font-medium"
                  >
                    <span className="group-hover:text-cyan-800">LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600" />
                  </a>

                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-slate-700 font-mono text-xs flex items-center justify-between transition-all group font-medium"
                  >
                    <span className="group-hover:text-cyan-800">GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600" />
                  </a>
                </div>
              </div>
            </div>
          </AdaptiveCard>
        </div>

        {/* RIGHT COLUMN: Client-Side Message Composer */}
        <div className="lg:col-span-7 space-y-6">
          <AdaptiveCard
            cardId="composer-card"
            title="Client-Side Message Composer"
            subtitle="PROTOCOL: DIRECT MAILTO // ZERO THIRD-PARTY STORAGE"
            icon={<MessageSquare className="w-5 h-5 text-cyan-600" />}
            badge="MAILTO READY"
            defaultExpanded={true}
            summaryContent={
              <p className="text-xs text-slate-600">
                Click to open client-side message composer and dispatch email directly to Sai Manikanta Revanth.
              </p>
            }
          >
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Compose your inquiry below. Submitting will cleanly launch your system's default email client with all parameters pre-populated.
              </p>

              <form onSubmit={handleOpenMailto} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="composer-name" className="block text-slate-600 mb-1 font-medium">
                      Your Name:
                    </label>
                    <input
                      id="composer-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tony Stark"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 text-slate-800 font-sans text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="composer-company" className="block text-slate-600 mb-1 font-medium">
                      Company / Organization:
                    </label>
                    <input
                      id="composer-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Stark Industries"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 text-slate-800 font-sans text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="composer-subject" className="block text-slate-600 mb-1 font-medium">
                    Subject Line:
                  </label>
                  <input
                    id="composer-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Full Stack Developer Opportunity // Project Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 text-slate-800 font-sans text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="composer-message" className="block text-slate-600 mb-1 font-medium">
                    Message Content:
                  </label>
                  <textarea
                    id="composer-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 text-slate-800 font-sans text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in Email Application (mailto:)</span>
                </button>
              </form>

              <div className="p-3 rounded-xl bg-cyan-50/50 border border-cyan-100 text-[11px] font-mono text-slate-600 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span>Transparent privacy: Form submission directly triggers a standard client mailto: link without third-party data collection.</span>
              </div>
            </div>
          </AdaptiveCard>
        </div>
      </div>
    </div>
  );
};
