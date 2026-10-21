import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact min-h-[100svh] py-6 sm:py-8 lg:py-10 pb-16 lg:pb-20 px-6 sm:px-10 lg:px-12 bg-[#F7FAFC] text-[#102A43] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="section-title">
          <h2>Contact</h2>
          <p className="text-[#526579] text-xs sm:text-sm">
            Feel free to connect with me for internship/job opportunities, collaborations, or tech discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mt-4 sm:mt-5">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#102235] border border-slate-700/50 shadow-md space-y-5 text-[#F8FAFC]">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#172F46] text-[#38BDF8] flex items-center justify-center flex-shrink-0 border border-sky-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F8FAFC] text-sm sm:text-base font-raleway">Location</h4>
                  <p className="text-xs sm:text-[13px] text-[#C1D0DF] mt-1 leading-relaxed">
                    VIT-AP University, Amaravati / Vijayawada, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#172F46] text-[#38BDF8] flex items-center justify-center flex-shrink-0 border border-sky-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F8FAFC] text-sm sm:text-base font-raleway">Email</h4>
                  <p className="text-xs sm:text-[13px] text-[#C1D0DF] mt-1">
                    <a href="mailto:saimanikantarevanthv@gmail.com" className="hover:text-[#38BDF8] font-medium transition-colors">
                      saimanikantarevanthv@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#172F46] text-[#38BDF8] flex items-center justify-center flex-shrink-0 border border-sky-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F8FAFC] text-sm sm:text-base font-raleway">Call / WhatsApp</h4>
                  <p className="text-xs sm:text-[13px] text-[#C1D0DF] mt-1">
                    <a href="tel:+918790515520" className="hover:text-[#38BDF8] font-medium transition-colors">
                      +91 8790515520
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 rounded-2xl bg-[#102235] border border-slate-700/50 shadow-md space-y-4 text-[#F8FAFC]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#C1D0DF] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#172F46] border border-slate-700/60 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[#F8FAFC] placeholder-slate-400 outline-none text-xs sm:text-sm transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#C1D0DF] uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#172F46] border border-slate-700/60 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[#F8FAFC] placeholder-slate-400 outline-none text-xs sm:text-sm transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C1D0DF] uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#172F46] border border-slate-700/60 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[#F8FAFC] placeholder-slate-400 outline-none text-xs sm:text-sm transition-all"
                  placeholder="Opportunity or Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#C1D0DF] uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#172F46] border border-slate-700/60 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[#F8FAFC] placeholder-slate-400 outline-none text-xs sm:text-sm transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {isSubmitted && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs rounded-xl flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Opening your email client to compose and send your message. Thank you!</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-sky-500/25"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
