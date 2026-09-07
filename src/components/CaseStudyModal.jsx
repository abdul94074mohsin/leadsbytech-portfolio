import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, CheckCircle, Sparkles, ArrowRight, Layers } from 'lucide-react';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10"
        >
          {/* Header Banner with Project Gradient */}
          <div
            className={`relative h-32 bg-gradient-to-r ${project.gradient} p-6 flex flex-col justify-between text-white overflow-hidden`}
          >
            <div className="absolute inset-0 bg-dot-grid opacity-30" />
            <button
              onClick={onClose}
              type="button"
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/35 text-white backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-xs">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-7 space-y-5">
            {/* Status / Coming Soon Badge */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-800 text-sm">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="font-medium">
                <span className="font-bold">Case Study Coming Soon:</span> Full architectural teardown and client interview being formatted.
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Executive Overview
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.caseStudySummary || project.description}
              </p>
            </div>

            {/* Key Result */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Verified Outcome
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg">
                <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                <span>{project.result}</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Tech Stack Implemented</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 transition-colors text-center"
              >
                <span>Discuss Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                type="button"
                className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer text-center"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
