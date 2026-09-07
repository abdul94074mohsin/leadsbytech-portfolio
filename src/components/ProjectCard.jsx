import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { cardItemVariants } from '../utils/animations';

export default function ProjectCard({ project, index, onOpenCaseStudy }) {
  return (
    <motion.div
      variants={cardItemVariants}
      layout
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index}
      className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group h-full"
    >
      <div>
        {/* Project Image Header */}
        <div className="h-48 relative overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20 z-10">
            {project.category}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-0">
        <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm mb-4">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{project.metric}</span>
        </div>

        <button
          onClick={() => onOpenCaseStudy && onOpenCaseStudy(project)}
          type="button"
          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm group/link cursor-pointer"
        >
          View Case Study
          <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
}