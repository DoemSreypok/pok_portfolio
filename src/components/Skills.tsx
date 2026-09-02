import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import {
  SiReact,
  SiAngular,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiDocker,
  SiPostman,
} from 'react-icons/si';
import { designTools, uxUiSkills, devCategories } from '../data/portfolioData';


// High-fidelity custom & brand icons matching the screenshot
const SkillIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'figma':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      );
    case 'figjam':
      return (
        <div className="w-5 h-5 rounded-md bg-[#9747FF]/20 flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-[#C084FC]" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="7" cy="7" r="4" />
            <rect x="13" y="3" width="8" height="8" rx="2" />
            <polygon points="12,14 18,22 6,22" />
          </svg>
        </div>
      );
    case 'canva':
      return (
        <div className="w-5 h-5 rounded-full bg-[#00C4CC] flex items-center justify-center flex-shrink-0 text-[10px] font-extrabold text-white italic select-none">
          C
        </div>
      );
    case 'ai':
      return (
        <div className="w-5 h-5 rounded bg-[#330000] border border-[#FF9A00]/50 flex items-center justify-center flex-shrink-0 text-[9px] font-bold text-[#FF9A00] select-none">
          Ai
        </div>
      );
    case 'ps':
      return (
        <div className="w-5 h-5 rounded bg-[#001E36] border border-[#31A8FF]/50 flex items-center justify-center flex-shrink-0 text-[9px] font-bold text-[#31A8FF] select-none">
          Ps
        </div>
      );
    case 'react':
      return <SiReact className="w-4 h-4 text-[#61DAFB] flex-shrink-0" />;
    case 'angular':
      return <SiAngular className="w-4 h-4 text-[#DD0031] flex-shrink-0" />;
    case 'js':
      return <SiJavascript className="w-4 h-4 text-[#F7DF1E] rounded-sm flex-shrink-0" />;
    case 'html5':
      return <SiHtml5 className="w-4 h-4 text-[#E34F26] flex-shrink-0" />;
    case 'tailwind':
      return <SiTailwindcss className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />;
    case 'bootstrap':
      return <SiBootstrap className="w-4 h-4 text-[#7952B3] flex-shrink-0" />;
    case 'node':
      return <SiNodedotjs className="w-4 h-4 text-[#5FA04E] flex-shrink-0" />;
    case 'django':
      return <SiDjango className="w-4 h-4 text-[#092E20] dark:text-[#44B78B] flex-shrink-0" />;
    case 'api':
      return (
        <svg className="w-4 h-4 text-[#C084FC] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="M8 15h8" />
          <path d="M12 11v8" />
        </svg>
      );
    case 'mongodb':
      return <SiMongodb className="w-4 h-4 text-[#47A248] flex-shrink-0" />;
    case 'oracle':
      return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M16.5 4H7.5C3.36 4 0 7.36 0 11.5C0 15.64 3.36 19 7.5 19H16.5C20.64 19 24 15.64 24 11.5C24 7.36 20.64 4 16.5 4ZM16.2 15.7H7.8C5.48 15.7 3.6 13.82 3.6 11.5C3.6 9.18 5.48 7.3 7.8 7.3H16.2C18.52 7.3 20.4 9.18 20.4 11.5C20.4 13.82 18.52 15.7 16.2 15.7Z"
            fill="#F80000"
          />
        </svg>
      );
    case 'postgresql':
      return <SiPostgresql className="w-4 h-4 text-[#4169E1] flex-shrink-0" />;
    case 'github':
      return <SiGithub className="w-4 h-4 text-slate-800 dark:text-white flex-shrink-0" />;
    case 'docker':
      return <SiDocker className="w-4 h-4 text-[#2496ED] flex-shrink-0" />;
    case 'postman':
      return <SiPostman className="w-4 h-4 text-[#FF6C37] flex-shrink-0" />;
    default:
      return <div className="w-4 h-4 rounded bg-slate-700 flex-shrink-0" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#f5f5f7] dark:bg-[#000000] relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Skills & Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-[#9ca3af] text-base sm:text-lg leading-relaxed"
          >
            A versatile skill set bridging the gap between user-centered product design and scalable web architecture.
          </motion.p>
        </div>

        {/* 3 Column Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-start">
          {/* Card 1: Design Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-[#1d1d1f] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col shadow-sm"
          >
            {/* Header with Title + Accent Underline */}
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Design Tools
              </h3>
              <div className="w-10 h-[2px] bg-teal-400 rounded-full mx-auto mt-2" />
            </div>

            {/* Tools List with Full Width Teal Bars */}
            <div className="space-y-5">
              {designTools.map((tool) => (
                <div key={tool.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <SkillIcon type={tool.iconType} />
                      <span className="font-medium text-slate-800 dark:text-[#f3f4f6]">
                        {tool.name}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-[#9ca3af]">
                      {tool.percentage}%
                    </span>
                  </div>

                  {/* Teal Progress Bar */}
                  <div className="w-full bg-slate-100 dark:bg-[#2a2a2d] h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-teal-400 h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: UX/UI Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white dark:bg-[#1d1d1f] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col shadow-sm"
          >
            {/* Header with Title + Accent Underline */}
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                UX/UI Skills
              </h3>
              <div className="w-10 h-[2px] bg-teal-400 rounded-full mx-auto mt-2" />
            </div>

            {/* Clean List of UX/UI Skills with Checkmarks and Subtle Dividers */}
            <div className="flex flex-col">
              {uxUiSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={`flex items-center gap-3 py-3 ${
                    index !== uxUiSkills.length - 1
                      ? 'border-b border-slate-100 dark:border-white/10'
                      : ''
                  }`}
                >
                  <CheckCircle2
                    className="text-teal-400 stroke-[2] flex-shrink-0"
                    size={18}
                  />
                  <span className="text-[13.5px] sm:text-sm font-medium text-slate-700 dark:text-[#f3f4f6]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Development Knowledge (Categorized with Custom Colored Bars) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white dark:bg-[#1d1d1f] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col shadow-sm"
          >
            {/* Header with Title + Accent Underline */}
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Development Knowledge
              </h3>
              <div className="w-10 h-[2px] bg-teal-400 rounded-full mx-auto mt-2" />
            </div>

            {/* Categorized Skills Section */}
            <div className="space-y-4">
              {devCategories.map((cat, catIdx) => (
                <div key={cat.category} className={catIdx !== 0 ? 'pt-2' : ''}>
                  {/* Category Title */}
                  <div
                    className={`text-[11px] font-bold tracking-wider mb-2.5 uppercase ${cat.categoryColor}`}
                  >
                    {cat.category}
                  </div>

                  {/* Skills Rows with Inline Progress Bar + Percentage */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between text-xs sm:text-[13px]"
                      >
                        {/* Left: Icon & Skill Name */}
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <SkillIcon type={skill.iconType} />
                          <span className="font-medium text-slate-800 dark:text-[#f3f4f6] truncate">
                            {skill.name}
                          </span>
                        </div>

                        {/* Right: Progress Bar & Percentage Number */}
                        <div className="flex items-center gap-2.5 flex-shrink-0">
                          <div className="w-16 sm:w-20 md:w-24 h-1.5 bg-slate-100 dark:bg-[#2a2a2d] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className={`${cat.barColor} h-full rounded-full`}
                            />
                          </div>
                          <span className="text-[11px] font-semibold text-slate-500 dark:text-[#9ca3af] w-7 text-right">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

