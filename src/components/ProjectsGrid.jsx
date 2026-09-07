import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { gridContainerVariants } from '../utils/animations';

export default function ProjectsGrid({ projects, onOpenCaseStudy }) {
  return (
    <section className="pb-16 sm:pb-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
