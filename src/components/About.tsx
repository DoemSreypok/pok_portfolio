import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const workExperiences = [
    {
      role: 'Full-Stack Developer',
      company: 'Foreign Trade Bank of Cambodia (FTB)',
      period: '13 December 2023 – Present',
      description:
        'Developing and maintaining enterprise internal banking systems with React.js, Django REST Framework, and Oracle DB. Building responsive UI workflows, form validations, and REST API integrations.',
    },
    {
      role: 'Web Developer Intern',
      company: 'Zination',
      period: '01 August 2023 – 01 December 2023',
      description:
        'First experience learning and developing with Django, React.js, and Next.js. Configured SaaS starter kits and built practical web applications including a to-do list project with reusable component architecture.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-[#f5f5f7] dark:bg-[#000000] transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-sm sm:text-base text-slate-600 dark:text-[#86868b] mt-2"
          >
            Passionate Full-Stack & Frontend Developer building enterprise web systems.
          </motion.p>
        </div>

        {/* My Story, Work Experience & Education Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6 text-left"
        >
          {/* My Story Card */}
          <div className="bg-white dark:bg-[#121215] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-5">
              <ShoppingBag className="w-5 h-5 text-teal-500 dark:text-teal-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                My Story
              </h3>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-600 dark:text-[#9ca3af] text-xs sm:text-sm leading-relaxed">
              <p>
                I graduated with an Associate degree in Web Programming from{' '}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Passerelles Numériques Cambodia (PNC)
                </span>
                , and I am currently studying for my Bachelor's degree at{' '}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Phnom Penh International University (PPIU)
                </span>
                . Over the years, I have developed strong technical and soft skills, with a particular focus on full-stack and frontend development.
              </p>

              <p>
                Experienced in building and maintaining responsive, high-performance web applications for banking and enterprise projects using{' '}
                <span className="font-semibold text-slate-900 dark:text-white">React.js</span>,{' '}
                <span className="font-semibold text-slate-900 dark:text-white">Django REST</span>,{' '}
                <span className="font-semibold text-slate-900 dark:text-white">Angular</span>, and{' '}
                <span className="font-semibold text-slate-900 dark:text-white">TypeScript</span>.
              </p>
            </div>

            <div className="my-6 border-t border-slate-100 dark:border-white/10" />

            {/* Work Experience Section */}
            <h4 className="text-[11px] font-bold text-slate-400 dark:text-[#6b7280] uppercase tracking-wider mb-5">
              WORK EXPERIENCE
            </h4>

            <div className="space-y-6">
              {workExperiences.map((exp, idx) => (
                <div key={idx} className="relative pl-5 border-l-2 border-slate-200 dark:border-white/10 space-y-1.5">
                  {/* Teal bullet dot */}
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {exp.role}
                    </h5>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-300 border border-teal-500/30">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-semibold text-teal-600 dark:text-teal-400">
                    {exp.company}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-[#8e929c] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white dark:bg-[#121215] border border-slate-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 flex items-center gap-4 shadow-sm">
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-[#1c1c21] text-teal-500 dark:text-teal-400 flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Bachelor Degree — Phnom Penh International University (PPIU)
              </h4>
              <p className="text-xs text-slate-500 dark:text-[#8e929c]">
                Associate Degree in Web Programming — Passerelles Numériques Cambodia (PNC)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
