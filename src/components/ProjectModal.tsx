import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle, Code2, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#1d1d1f] rounded-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col text-left"
        >
          {/* Header Image */}
          <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Title & Badges */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-teal-500/20 text-teal-300 flex items-center gap-1">
                  <Sparkles size={12} />
                  {project.roleBadge}
                </span>
                <span className="px-2.5 py-0.5 rounded text-xs font-mono text-slate-300 bg-white/10">
                  {project.techBadge}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                Project Overview & Challenge
              </h3>
              <p className="text-slate-600 dark:text-[#86868b] text-sm sm:text-base leading-relaxed">
                {project.description} Engineered with strict focus on user accessibility, clean information architecture, rapid screen load times, and cross-browser consistency.
              </p>
            </div>

            {/* 2-Column UX & Code Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-[#141416] rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-sm">
                  <Layers size={16} />
                  <span>UX/UI Highlights</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-[#86868b]">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>User journeys & task flow validation in FigJam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Modular design token library in Figma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Usability testing with enterprise end-users</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-[#141416] rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-sm">
                  <Code2 size={16} />
                  <span>Web Architecture</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-[#86868b]">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Modular React & Next.js component system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Tailwind CSS utility styling with dark mode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Optimized page performance and accessibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-[#86868b]">
                Category: {project.category}
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#252528] text-slate-700 dark:text-[#f5f5f7] text-xs font-medium transition-colors"
                >
                  Close
                </button>

                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-300 text-white dark:text-slate-950 text-xs font-semibold transition-colors"
                >
                  <span>Request Full Case Study</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
