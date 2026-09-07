import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Globe, Layout, ShoppingBag, Bot, School } from 'lucide-react';
import { cardItemVariants } from '../utils/animations';

// Dynamic Icon Component
const ProjectIcon = ({ iconType }) => {
  const iconClass = "w-10 h-10 text-white";
  switch (iconType) {
    case 'globe': return <Globe className={iconClass} />;
    case 'layout': return <Layout className={iconClass} />;
    case 'shopping': return <ShoppingBag className={iconClass} />;
    case 'bot': return <Bot className={iconClass} />;
    case 'school': return <School className={iconClass} />;
    default: return <Globe className={iconClass} />;
  }
};

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
        {/* Card Header with Icon & Category */}
        <div className={`h-48 ${project.bgColor} p-6 relative flex flex-col justify-between items-center text-center`}>
          <div className="my-auto transform group-hover:scale-110 transition-transform duration-300">
            <ProjectIcon iconType={project.iconType} />
          </div>
          <span className="self-start px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
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