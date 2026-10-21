import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, User, FileText, MessageSquare, Linkedin, Github, Code2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Opportunity or Project Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto link
    const mailtoUrl = `mailto:saimanikantarevanthv@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Opportunity or Project Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="contact min-h-[calc(100svh-4.5rem)] py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 flex flex-col justify-center text-[#10233F]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <div className="section-title">
          <h2>Contact</h2>
          <div className="section-title-underline" />
          <p>
            Feel free to connect with me for internship/job opportunities, collaborations, or tech discussions.
          </p>
        </div>

        {/* 2-Column Layout Matching Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mt-4">
          
          {/* Left Card: Get In Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 white-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-raleway text-[#10233F] mb-1.5">
                <span>Get In </span>
                <span className="text-[#087CF0]">Touch</span>
              </h3>
              <p className="text-xs sm:text-[13px] text-[#526B8A] leading-relaxed mb-6">
                I'm always open to discussing new opportunities, exciting projects, or just having a tech conversation. Let's connect!
              </p>

              {/* Contact Details Rows */}
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF8FF] text-[#087CF0] flex items-center justify-center flex-shrink-0 border border-[#D7EAF8]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10233F] text-xs sm:text-sm font-raleway">Location</h4>
                    <p className="text-xs sm:text-[13px] text-[#526B8A] mt-0.5 leading-relaxed">
                      VIT-AP University, Amaravati / Vijayawada, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF8FF] text-[#087CF0] flex items-center justify-center flex-shrink-0 border border-[#D7EAF8]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10233F] text-xs sm:text-sm font-raleway">Email</h4>
                    <p className="text-xs sm:text-[13px] text-[#526B8A] mt-0.5">
                      <a
                        href="mailto:saimanikantarevanthv@gmail.com"
                        className="hover:text-[#087CF0] font-medium transition-colors"
                      >
                        saimanikantarevanthv@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Call / WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF8FF] text-[#087CF0] flex items-center justify-center flex-shrink-0 border border-[#D7EAF8]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10233F] text-xs sm:text-sm font-raleway">Call / WhatsApp</h4>
                    <p className="text-xs sm:text-[13px] text-[#526B8A] mt-0.5">
                      <a
                        href="tel:+918790515520"
                        className="hover:text-[#087CF0] font-medium transition-colors"
                      >
                        +91 8790515520
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons Matching Bottom Row in Image 1 */}
            <div className="pt-6 border-t border-[#D7EAF8]/70 flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com/in/revanthvalluru"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#EFF8FF] hover:bg-[#087CF0] text-[#087CF0] hover:text-white border border-[#D7EAF8] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/revanthvalluru20"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#EFF8FF] hover:bg-[#087CF0] text-[#087CF0] hover:text-white border border-[#D7EAF8] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/revanthvalluru20"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#EFF8FF] hover:bg-[#087CF0] text-[#087CF0] hover:text-white border border-[#D7EAF8] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                title="Source Code"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href="mailto:saimanikantarevanthv@gmail.com"
                className="w-10 h-10 rounded-full bg-[#EFF8FF] hover:bg-[#087CF0] text-[#087CF0] hover:text-white border border-[#D7EAF8] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Card: Send a Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-7 white-card p-6 sm:p-7 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Form Side */}
              <div className="md:col-span-8">
                <h3 className="text-xl sm:text-2xl font-bold font-raleway text-[#10233F] mb-1">
                  <span>Send a </span>
                  <span className="text-[#087CF0]">Message</span>
                </h3>
                <p className="text-xs sm:text-[13px] text-[#526B8A] mb-5">
                  Drop a message and I'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#10233F] uppercase tracking-wider mb-1">
                        YOUR NAME
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#087CF0] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#F7FBFF] border border-[#D7EAF8] focus:bg-white focus:border-[#087CF0] focus:ring-1 focus:ring-[#087CF0] text-[#10233F] placeholder-[#829AB1] outline-none text-xs sm:text-[13px] transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#10233F] uppercase tracking-wider mb-1">
                        YOUR EMAIL
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#087CF0] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#F7FBFF] border border-[#D7EAF8] focus:bg-white focus:border-[#087CF0] focus:ring-1 focus:ring-[#087CF0] text-[#10233F] placeholder-[#829AB1] outline-none text-xs sm:text-[13px] transition-all"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#10233F] uppercase tracking-wider mb-1">
                      SUBJECT
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-[#087CF0] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#F7FBFF] border border-[#D7EAF8] focus:bg-white focus:border-[#087CF0] focus:ring-1 focus:ring-[#087CF0] text-[#10233F] outline-none text-xs sm:text-[13px] transition-all appearance-none cursor-pointer"
                      >
                        <option value="Opportunity or Project Inquiry">Opportunity or Project Inquiry</option>
                        <option value="Internship / Full-time Role">Internship / Full-time Role</option>
                        <option value="Tech Collaboration">Tech Collaboration</option>
                        <option value="General Discussion">General Discussion</option>
                      </select>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#526B8A]">▼</span>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#10233F] uppercase tracking-wider mb-1">
                      MESSAGE
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-[#087CF0] absolute left-3 top-2.5 pointer-events-none" />
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#F7FBFF] border border-[#D7EAF8] focus:bg-white focus:border-[#087CF0] focus:ring-1 focus:ring-[#087CF0] text-[#10233F] placeholder-[#829AB1] outline-none text-xs sm:text-[13px] transition-all resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                  </div>

                  {isSubmitted && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Opening your email client to send your message. Thank you!</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#087CF0] to-[#12B8F5] hover:from-[#076ed6] hover:to-[#0ea5e9] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#087CF0]/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Right Side 3D Envelope Illustration Matching Image 1 */}
              <div className="md:col-span-4 hidden md:flex flex-col items-center justify-center relative">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  
                  {/* Floating Chat Bubble */}
                  <div className="absolute top-0 right-2 bg-gradient-to-r from-[#087CF0] to-[#12B8F5] text-white rounded-xl px-2.5 py-1 text-[10px] font-bold shadow-md shadow-[#087CF0]/25 flex items-center gap-1 animate-bounce">
                    <span>...</span>
                  </div>

                  {/* 3D Envelope Shape */}
                  <div className="w-28 h-24 rounded-2xl bg-gradient-to-br from-[#087CF0] to-[#12B8F5] shadow-xl shadow-[#087CF0]/30 p-2 flex flex-col items-center justify-center relative transform -rotate-3 hover:rotate-0 transition-transform">
                    {/* Letter inside */}
                    <div className="w-20 h-14 bg-white rounded-lg shadow-sm p-1.5 flex flex-col gap-1 -translate-y-2">
                      <div className="w-8 h-1 bg-[#087CF0]/70 rounded-full" />
                      <div className="w-14 h-1 bg-[#D7EAF8] rounded-full" />
                      <div className="w-10 h-1 bg-[#D7EAF8] rounded-full" />
                    </div>
                    {/* Paper plane icon */}
                    <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      <Send className="w-3.5 h-3.5 -rotate-12" />
                    </div>
                  </div>

                  {/* Decorative particles */}
                  <span className="w-2 h-2 rounded-full bg-[#12B8F5] absolute bottom-2 left-2 animate-ping" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087CF0] absolute top-4 left-4" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
