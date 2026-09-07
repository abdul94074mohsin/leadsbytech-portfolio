import React from 'react';
import { motion } from 'framer-motion';
import { statsVariants, statsChildVariants } from '../utils/animations';

// Inline array to eliminate import/export dependencies
const statistics = [
  { id: 1, value: '15+', label: 'Projects Completed' },
  { id: 2, value: '99%', label: 'Client Satisfaction' },
  { id: 3, value: '3+', label: 'Years Experience' },
  { id: 4, value: '24/7', label: 'Support Available' },
];

export default function PortfolioStats() {
  return (
    <motion.section
      variants={statsVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-12 bg-white/50 backdrop-blur-md border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat) => (
            <motion.div key={stat.id} variants={statsChildVariants}>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}