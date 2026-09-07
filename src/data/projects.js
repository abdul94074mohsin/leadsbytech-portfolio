import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Globe, Layout, ShoppingBag, Bot, School, Database } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Premium Real Estate Website',
    category: 'WEBSITE',
    description: 'High-performance real estate website with property listings, search filters, and lead capture system for a Dubai-based agency.',
    techStack: ['React', 'Django', 'PostgreSQL'],
    metric: '300% Lead Increase',
  },
  {
    id: 2,
    title: 'CRM Dashboard Platform',
    category: 'SOFTWARE',
    description: 'Custom CRM dashboard with lead tracking, analytics, and team collaboration features for B2B sales teams.',
    techStack: ['Python', 'Django', 'React'],
    metric: '40% Retention Increase',
  },
  {
    id: 3,
    title: 'Auto-Inventory Management System',
    category: 'E-COMMERCE',
    description: 'Automated inventory sync across Amazon, Shopify, and warehouse systems with real-time stock updates and alerts.',
    techStack: ['Python', 'Django', 'APIs'],
    metric: '85% Error Reduction',
  },
  {
    id: 4,
    title: 'Lead Mining & Enrichment Engine',
    category: 'AUTOMATION',
    description: 'Automated lead extraction from 8+ platforms with data validation, enrichment, and delivery to CRM systems.',
    techStack: ['Python', 'Scraping', 'APIs'],
    metric: '300% Lead Volume Increase',
  },
  {
    id: 5,
    title: 'Multi-Vendor E-Commerce Platform',
    category: 'WEBSITE',
    description: 'Full-featured multi-vendor marketplace with vendor dashboards, payment splitting, and analytics.',
    techStack: ['React', 'Django', 'Stripe'],
    metric: '$500k+ Annual Revenue',
  },
  {
    id: 6,
    title: 'School ERP Management System',
    category: 'SOFTWARE',
    description: 'Complete school management system with student records, fee management, attendance, and report generation.',
    techStack: ['Python', 'Django', 'PostgreSQL'],
    metric: '80% Administrative Efficiency',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Top Colored Card Area */}
                <div className={`h-48 ${project.bgColor} p-6 relative flex flex-col justify-between items-center text-center`}>
                  <div className="my-auto transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <span className="self-start px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
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

              {/* Card Footer Metric & Action */}
              <div className="px-6 pb-6 pt-0">
                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm mb-4">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{project.metric}</span>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm group/link"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}