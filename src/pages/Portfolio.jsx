import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PortfolioHero from '../components/PortfolioHero';
import PortfolioStats from '../components/PortfolioStats';
import ProjectFilters from '../components/ProjectFilters';
import ProjectsGrid from '../components/ProjectsGrid';
import CaseStudyModal from '../components/CaseStudyModal';
import PortfolioCTA from '../components/PortfolioCTA';
import { projects } from '../data/projects';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projects;
    }
    return projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory]);

  return (
    <main id="portfolio" className="relative min-h-screen bg-slate-50/50 text-slate-800 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      
      {/* 🌟 PREMIUM AMBIENT LIGHTING & GLOW SYSTEM */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-sky-200/40 via-blue-300/20 to-indigo-200/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-72 -left-32 w-96 h-96 bg-cyan-200/25 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-[40%] -right-32 w-[450px] h-[450px] bg-blue-300/20 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-40 left-1/4 w-[500px] h-[500px] bg-sky-200/30 blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

      {/* CONTENT SECTIONS WITH SMOOTH STAGGERED ENTRANCES */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-12">
        
        {/* 1. Hero Section (Enters from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <PortfolioHero />
        </motion.div>

        {/* 2. Statistics Bar (Enters from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <PortfolioStats />
        </motion.div>

        {/* 3. Filter Category Pills (Enters from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectFilters
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </motion.div>

        {/* 4. Projects Grid (Staggered Card Entrances) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectsGrid
            projects={filteredProjects}
            onOpenCaseStudy={(proj) => setSelectedProject(proj)}
          />
        </motion.div>

        {/* 5. CTA Section (Enters from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <PortfolioCTA />
        </motion.div>

      </div>

      {/* 6. Case Study Details Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}