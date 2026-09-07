import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.97 0 1.76.78 1.76 1.75s-.79 1.76-1.76 1.76m1.37 9.74v-8.37H5.09v8.37h2.74z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto rounded-2xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-purple-600/35 via-indigo-600/25 to-purple-800/35 backdrop-blur-md border border-purple-300/30 shadow-xl shadow-purple-900/10 text-slate-800 relative overflow-hidden"
      >
        {/* Soft Background Accent Glows */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

        {/* Subscribe Section */}
        <div className="text-center max-w-lg mx-auto pb-8 mb-8 border-b border-purple-900/10 relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">
            Subscribe For Latest Updates
          </h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-800 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 border border-white/40 shadow-xs"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-md shrink-0"
            >
              Subscribe <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-8 border-b border-purple-900/10 relative z-10 text-xs sm:text-sm">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 stroke-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                LeadsBy<span className="text-indigo-600">Tech</span>
              </span>
            </a>

            <p className="text-slate-600 leading-relaxed max-w-xs text-xs">
              Custom Web Development, Enterprise Solutions, E-commerce, and AI Automation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { icon: <Globe className="w-3.5 h-3.5" />, label: 'Website' },
                { icon: <GithubIcon className="w-3.5 h-3.5" />, label: 'GitHub' },
                { icon: <LinkedinIcon className="w-3.5 h-3.5" />, label: 'LinkedIn' },
                { icon: <TwitterIcon className="w-3.5 h-3.5" />, label: 'Twitter' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -2, scale: 1.05 }}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-white/60 hover:bg-white text-slate-700 hover:text-indigo-600 flex items-center justify-center transition-colors border border-purple-200/50 shadow-xs"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-600 transition-colors font-medium">Portfolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Web Dev</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">E-Commerce</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Automation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-slate-600 text-xs">
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <a href="mailto:hello@leadsbytech.com" className="hover:text-indigo-600 transition-colors break-all">
                  hello@leadsbytech.com
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <a href="tel:+919622999696" className="hover:text-indigo-600 transition-colors">
                  +91 9622 999 696
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Burhanpur, MP</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 relative z-10">
          <p>© {new Date().getFullYear()} LeadsByTech Solutions.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}