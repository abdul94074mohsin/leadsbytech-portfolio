import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { ctaVariants } from '../utils/animations';

export default function PortfolioCTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-24 md:py-28 bg-gradient-to-b from-white via-slate-50/70 to-blue-50/40 border-t border-slate-100 overflow-hidden">
      {/* Ambient background glow & radial lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-blue-200/35 via-cyan-100/35 to-indigo-100/30 blur-3xl pointer-events-none -z-10" />

      <motion.div
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold mb-6 border border-blue-200/60 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>LET'S COLLABORATE</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14] mb-4 sm:mb-5">
          Ready to Build Your{' '}
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Next Project?
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
          Let's discuss how we can help you scale with enterprise-grade technology.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <motion.a
            href="mailto:hello@leadsbytech.com"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200"
          >
            <Rocket className="w-5 h-5 text-blue-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
