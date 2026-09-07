import React from 'react';
import { motion } from 'framer-motion';

export default function PortfolioHero() {
  return (
    <section className="relative pt-10 pb-8 sm:pt-14 sm:pb-10 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-300/30 via-sky-200/20 to-blue-300/30 blur-[120px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* OUR WORK BADGE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/80 shadow-xs">
            <span className="w-4 h-0.5 bg-blue-600 rounded-full inline-block" />
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              OUR WORK
            </span>
          </div>
        </motion.div>

        {/* FULL WIDTH WRAPPER CARD: Permanent Medium-Blue & Translucent White Background */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-r from-blue-100/70 via-white/80 to-blue-100/70 backdrop-blur-xl border border-blue-200/80 shadow-xl shadow-blue-900/5 relative overflow-hidden"
        >
          {/* Subtle Glow Overlay inside Card */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 pointer-events-none" />

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-5 relative z-10">
            Projects That{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                Deliver Results
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/50 via-cyan-400/60 to-transparent rounded-full" />
            </span>
          </h1>

          {/* Upgraded Clean Slate Gray Paragraph Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600/90 font-normal tracking-wide leading-relaxed max-w-3xl mx-auto relative z-10 font-sans drop-shadow-2xs">
            Explore our portfolio of successful projects — from websites and software to e-commerce and automation solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}