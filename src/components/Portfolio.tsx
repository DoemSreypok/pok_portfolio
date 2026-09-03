import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

const categories = [
  'All',
  'Web App Design',
  'Mobile Design',
  'Web Development',
  'Banking Systems',
];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#f5f5f7] dark:bg-[#000000] relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#f5f5f7] mb-4"
          >
            Portfolio
          </motion.h2>
          <p className="text-slate-600 dark:text-[#86868b] text-base sm:text-lg">
            Selected projects showcasing UX research, design systems, and production web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-12">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1d1d1f] text-white dark:bg-white dark:text-slate-950 font-semibold'
                    : 'bg-white dark:bg-[#1d1d1f] text-slate-700 dark:text-[#86868b] hover:text-slate-900 dark:hover:text-[#f5f5f7] hover:bg-slate-100 dark:hover:bg-[#252528]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Grid - Apple Squircle rounded-[28px] */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                key={project.id}
                className="bg-white dark:bg-[#1d1d1f] rounded-xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Image Preview Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#0c0f15]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* Subtle Top Overlay Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#000000]/85 backdrop-blur-md text-teal-300 flex items-center gap-1">
                      <Sparkles size={12} />
                      {project.roleBadge}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#000000]/85 backdrop-blur-md text-[#86868b]">
                      {project.techBadge}
                    </span>
                  </div>
                </div>

                {/* Card Content & Action Bar */}
                <div className="p-7 flex flex-col justify-between flex-grow space-y-4 text-left">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-[#f5f5f7] leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-[#86868b] text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Dual Action CTAs */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2">
                    <a
                      href={project.UrlLink && project.UrlLink !== 'link' && project.UrlLink !== '#' ? project.UrlLink : '#'}
                      target={project.UrlLink && project.UrlLink.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ArrowRight size={14} />
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-[#86868b] hover:text-slate-950 dark:hover:text-[#f5f5f7] transition-colors p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-[#252528] cursor-pointer"
                        title="View Details"
                      >
                        <span>Details</span>
                        <ExternalLink size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Case Study Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
