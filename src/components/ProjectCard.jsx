import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  Activity,
  Check,
  Zap,
} from 'lucide-react';
import { getAlternatingCardVariant } from '../utils/animations';

function MiniProductPreview({ id }) {
  switch (id) {
    case 1:
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-4 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white font-medium shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="truncate max-w-[120px] sm:max-w-none">Dubai Marina • AED 2.4M</span>
          </div>
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white/90 shadow-xs">
            98% Match Rate
          </div>
        </div>
      );
    case 2:
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-4 flex items-end gap-1">
            <span className="w-1 h-3 sm:w-1.5 sm:h-4 bg-white/60 rounded-t-xs" />
            <span className="w-1 h-5 sm:w-1.5 sm:h-7 bg-white/80 rounded-t-xs" />
            <span className="w-1 h-8 sm:w-1.5 sm:h-10 bg-white rounded-t-xs" />
            <span className="w-1 h-4 sm:w-1.5 sm:h-6 bg-white/70 rounded-t-xs" />
          </div>
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-4 flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white font-semibold shadow-xs">
            <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-indigo-300" />
            <span>MRR +40%</span>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-4 flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white shadow-xs">
            <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-300" />
            <span className="truncate max-w-[110px] sm:max-w-none">Sync: Amazon & Shopify</span>
          </div>
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white shadow-xs">
            SKUs: 12,450
          </div>
        </div>
      );
    case 4:
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-4 flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white font-semibold shadow-xs">
            <span>8+ Sources Connected</span>
          </div>
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-4 flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white shadow-xs">
            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-300" />
            <span>Enrichment Live</span>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white font-medium shadow-xs">
            <span>Stripe Connect Split</span>
          </div>
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white shadow-xs">
            142 Verified Vendors
          </div>
        </div>
      );
    case 6:
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white font-medium shadow-xs">
            <span>Automated Fee Gateway</span>
          </div>
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] text-white shadow-xs">
            Grade: A+ Standard
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function ProjectCard({ project, onOpenCaseStudy, index = 0 }) {
  const cardVariant = getAlternatingCardVariant(index);

  return (
    <motion.article
      layout
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative flex flex-col w-full bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/90 overflow-hidden shadow-card-elevated hover:shadow-card-hover hover:border-blue-200/80 transition-all duration-300"
    >
      {/* Header Image Banner */}
      <div className="relative aspect-[16/10] sm:aspect-video w-full bg-slate-900 p-3.5 sm:p-5 flex flex-col justify-between overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/40 transition-all duration-300" />

        <MiniProductPreview id={project.id} />

        <div className="relative z-20 flex justify-end">
          <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white backdrop-blur-md border border-emerald-400/50 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Live</span>
          </div>
        </div>

        <div className="relative z-20 mt-auto">
          <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white bg-slate-900/75 backdrop-blur-md border border-white/20 shadow-xs">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between bg-transparent">
        <div>
          <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-1 sm:line-clamp-none">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-5 line-clamp-2 sm:line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold bg-slate-100/80 text-slate-700 border border-slate-200/80 group-hover:border-slate-300 group-hover:bg-slate-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 sm:pt-4 border-t border-slate-100/80 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-600 font-bold text-xs sm:text-sm">
            <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500" />
            </span>
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] shrink-0" />
            <span className="truncate">{project.result}</span>
          </div>

          <div>
            <button
              onClick={() => onOpenCaseStudy(project)}
              type="button"
              className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group/btn cursor-pointer py-0.5"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}