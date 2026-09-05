import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles, Lock } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Banking Systems');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Banking Systems',
    'Web App Design',
    'Mobile Design',
    'Web Development',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#f5f5f7] dark:bg-[#000000] relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">


          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#f5f5f7] mb-4"
          >
            Portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-[#86868b] text-base sm:text-lg leading-relaxed mb-6"
          >
            During my professional experience, I worked as part of a cross-functional development team to build and enhance multiple internal banking systems across staff management, requests, IT support, assets, documents, attendance, and operational workflows.
          </motion.p>


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
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white dark:text-slate-950 font-semibold shadow-md'
                    : 'text-slate-700 dark:text-[#86868b] hover:text-slate-900 dark:hover:text-[#f5f5f7] bg-white dark:bg-[#1d1d1f] hover:bg-slate-100 dark:hover:bg-[#252528] shadow-sm'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#1d1d1f] dark:bg-white rounded-full -z-0"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -8 }}
                transition={{
                  layout: { type: 'spring', stiffness: 350, damping: 32 },
                  opacity: { duration: 0.22 },
                  scale: { duration: 0.22 },
                  y: { duration: 0.22 },
                }}
                key={project.id}
                className="bg-white dark:bg-[#1d1d1f] rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 border border-slate-200/60 dark:border-white/5 shadow-sm hover:shadow-xl"
              >
                {/* Project Image Preview Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#0c0f15]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      project.restricted
                        ? 'blur-[3px] scale-105 opacity-60 group-hover:opacity-80'
                        : 'opacity-90 group-hover:opacity-100 group-hover:scale-105'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Circular Lock Overlay for Confidential Projects */}
                  {project.restricted && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/40 text-amber-400 flex items-center justify-center shadow-xl">
                        <Lock size={16} />
                      </div>
                    </div>
                  )}

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#000000]/85 backdrop-blur-md text-teal-300 flex items-center gap-1 border border-teal-500/20">
                      <Sparkles size={12} />
                      {project.roleBadge}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#000000]/85 backdrop-blur-md text-[#86868b] border border-white/10">
                      {project.techBadge}
                    </span>
                  </div>
                </div>

                {/* Card Content & Action Bar */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4 text-left">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#f5f5f7] leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-[#86868b] text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Action Bar */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2">
                    {project.restricted ? (
                      <>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                          <Lock size={13} className="flex-shrink-0" />
                          <span>Restricted Access</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-[#f5f5f7] hover:text-teal-600 dark:hover:text-teal-400 transition-colors px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-[#252528] hover:bg-slate-200 dark:hover:bg-[#303034] cursor-pointer"
                          title="View Details"
                        >
                          <span>Details</span>
                          <ExternalLink size={13} />
                        </button>
                      </>
                    ) : (
                      <>
                        <a
                          href={project.UrlLink && project.UrlLink.trim() !== '' && project.UrlLink !== 'link' && project.UrlLink !== '#' ? project.UrlLink : '#'}
                          target={project.UrlLink && project.UrlLink.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                        >
                          <span>Live Demo</span>
                          <ArrowRight size={14} />
                        </a>

                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-[#86868b] hover:text-slate-950 dark:hover:text-[#f5f5f7] transition-colors p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-[#252528] cursor-pointer"
                          title="View Details"
                        >
                          <span>Details</span>
                          <ExternalLink size={13} />
                        </button>
                      </>
                    )}
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

