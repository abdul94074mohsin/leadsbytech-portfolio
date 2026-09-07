import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/projects';
import { filtersVariants } from '../utils/animations';

export default function ProjectFilters({ activeCategory, onSelectCategory }) {
  return (
    <section className="pt-4 pb-8 sm:pb-10 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <motion.div
        variants={filtersVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-3xl mx-auto"
      >
        {/* Mobile: flex-col (ek ke neeche ek) | Desktop: inline horizontal container */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-2 sm:gap-2 sm:p-1.5 sm:rounded-full sm:bg-white/80 sm:backdrop-blur-xl sm:border sm:border-white/90 sm:shadow-card-elevated w-full">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <motion.button
                key={category}
                onClick={() => onSelectCategory(category)}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-center ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-md shadow-blue-500/30'
                    : 'text-slate-600 bg-white/80 sm:bg-transparent border border-white/90 sm:border-none shadow-xs sm:shadow-none hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="hidden sm:block absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-md shadow-blue-500/30"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}