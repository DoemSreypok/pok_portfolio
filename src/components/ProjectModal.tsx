import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle, Code2, Layers, Lock, Server, Database, Users } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isConfidential = project.restricted;

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
          className="relative w-full max-w-3xl bg-white dark:bg-[#1d1d1f] rounded-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col text-left border border-slate-200 dark:border-white/10 shadow-2xl"
        >
          {/* Hero Header Section */}
          <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isConfidential
                  ? 'blur-[3px] scale-105 opacity-55'
                  : 'opacity-75'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] via-[#1d1d1f]/60 to-transparent" />

            {/* Lock Overlay for Confidential Projects */}
            {isConfidential && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-10">
                <span className="px-3.5 py-2 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center gap-2 shadow-2xl">
                  <Lock size={14} className="text-amber-400" />
                  <span>Internal Confidential System — Restricted Visuals</span>
                </span>
              </div>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Hero Title & Badges */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-teal-500/20 text-teal-300 flex items-center gap-1 border border-teal-500/30">
                  <Sparkles size={12} />
                  {project.roleBadge || 'Full-Stack Development'}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-200 bg-white/15 backdrop-blur-sm border border-white/10">
                  {project.techBadge || 'React & Django REST'}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium text-amber-300 bg-amber-500/20 border border-amber-500/30">
                  {project.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Confidentiality Warning Box */}
            {isConfidential && (
              <div className="p-4 rounded-xl bg-amber-500/10 dark:bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-sm text-amber-700 dark:text-amber-300">
                  <Lock size={16} className="flex-shrink-0" />
                  <span>Confidential Project — Internal Banking System (Team Collaboration)</span>
                </div>
                <p className="text-xs text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
                  This project was developed as part of an internal engineering team for a banking environment. Due to company confidentiality and security requirements, system access, source code, internal data, detailed architecture, and implementation details cannot be publicly disclosed.
                </p>
              </div>
            )}

            {/* PROJECT OVERVIEW & CHALLENGE */}
            <div>
              <h3 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                PROJECT OVERVIEW & CHALLENGE
              </h3>
              <p className="text-slate-700 dark:text-[#86868b] text-sm sm:text-base leading-relaxed">
                {project.detailedOverview || project.description}
              </p>
            </div>

            {/* MY CONTRIBUTION */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                  MY CONTRIBUTION
                </h3>
                {isConfidential && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/20">
                    <Users size={13} />
                    Worked as Part of a Team
                  </span>
                )}
              </div>

              {isConfidential ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Frontend Development */}
                  <div className="bg-slate-50 dark:bg-[#141416] rounded-xl p-4 space-y-3 border border-slate-200/60 dark:border-white/5">
                    <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold text-sm">
                      <Layers size={16} />
                      <span>Frontend Development</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-[#86868b]">
                      {(project.frontendHighlights || [
                        'Developed user interfaces using React.js',
                        'Built reusable components and forms',
                        'Implemented form validation and user interactions',
                        'Integrated frontend with REST APIs',
                      ]).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-sky-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Backend Development */}
                  <div className="bg-slate-50 dark:bg-[#141416] rounded-xl p-4 space-y-3 border border-slate-200/60 dark:border-white/5">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm">
                      <Server size={16} />
                      <span>Backend Development</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-[#86868b]">
                      {(project.backendHighlights || [
                        'Developed REST APIs using Django REST Framework',
                        'Implemented request processing and data validation',
                        'Integrated backend services with Oracle Database',
                        'Supported workflow and status management',
                      ]).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Database & Environment */}
                  <div className="bg-slate-50 dark:bg-[#141416] rounded-xl p-4 space-y-3 border border-slate-200/60 dark:border-white/5">
                    <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold text-sm">
                      <Database size={16} />
                      <span>Database & Environment</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-[#86868b]">
                      {(project.databaseHighlights || [
                        'Oracle Database integration',
                        'Docker containerized development environment',
                      ]).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                /* Standard Non-Restricted Project Breakdown */
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
                        <span>Modular React component system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                        <span>Django REST API integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                        <span>Oracle Database integration & Docker</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* TECH STACK */}
            <div>
              <h3 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                TECH STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {(project.techStack || [
                  'React.js',
                  'Django',
                  'Django REST Framework',
                  'Oracle Database',
                  'Docker',
                  'REST API',
                ]).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-[#252528] text-slate-800 dark:text-[#f5f5f7] border border-slate-200 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar / Modal Bottom */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-medium">
                {isConfidential && <Lock size={13} className="flex-shrink-0" />}
                <span>{isConfidential ? 'Internal — Restricted Access' : `Category: ${project.category}`}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#252528] text-slate-700 dark:text-[#f5f5f7] text-xs font-semibold hover:bg-slate-200 dark:hover:bg-[#303034] transition-colors cursor-pointer"
                >
                  Close
                </button>

                {!isConfidential && project.UrlLink && project.UrlLink !== 'link' && project.UrlLink !== '#' && (
                  <a
                    href={project.UrlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-300 text-white dark:text-slate-950 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

