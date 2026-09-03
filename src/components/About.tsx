import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const About: React.FC = () => {
  const handleDownloadCV = () => {
    const cvContent = `SREYPOK DOEM (PINKY)
UX/UI Designer & Web Developer
Email: sreypokdoem18@gmail.com | Phone: +885 88 45 01 458

PROFESSIONAL PROFILE:
UX/UI Designer with experience designing enterprise web applications for the banking sector. Specializing in creating user-centered experiences across the product lifecycle, from UX research and user flows to wireframes, UI design, interactive prototypes, and usability testing.
With a background in front-end development using React.js, Next.js, and Django, understanding how designs are translated into real products and collaborating closely with cross-functional teams to build scalable, consistent experiences.

CORE SPECIALIZATIONS:
1. User Research: Understand users, business goals and product requirements.
2. User Flow & IA: Create user flows and information architecture that makes sense.
3. Wireframing: Design low-fidelity layouts to validate ideas before moving forward.
4. UI Design: Design clean, modern and responsive interfaces.
5. Prototyping: Build interactive prototypes for testing and communication.
6. Usability Testing: Test with users and improve the experience.

TECHNICAL & DESIGN SKILLS:
- Design: Figma, FigJam, Canva, Adobe Illustrator, Adobe Photoshop, Design Systems, Tokens, WCAG Accessibility
- Development: React.js, Next.js, Angular, TypeScript, JavaScript, Tailwind CSS, HTML5/CSS3
- Backend & DB: Node.js, Express.js, Django REST Framework, PostgreSQL, MongoDB, Oracle Database
- Tools & DevOps: Git & GitHub, Docker, Postman, REST APIs`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sreypok_Doem_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const capabilities = [
    {
      id: 'research',
      title: 'User Research',
      description: 'Understand users, business goals and product requirements.',
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10" cy="7" r="4" />
          <path d="M4 21v-2a4 4 0 0 1 4-4h3" />
          <circle cx="16.5" cy="16.5" r="3" />
          <path d="M18.8 18.8L21.5 21.5" />
        </svg>
      ),
    },
    {
      id: 'user-flow',
      title: 'User Flow & IA',
      description: 'Create user flows and information architecture that makes sense.',
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="13" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 16v5" />
          <rect x="5" y="6" width="3" height="3" rx="0.5" />
          <rect x="14" y="9" width="3" height="3" rx="0.5" />
          <path d="M8 7.5h4a2 2 0 0 1 2 2v1" />
        </svg>
      ),
    },
    {
      id: 'wireframing',
      title: 'Wireframing',
      description: 'Design low-fidelity layouts to validate ideas before moving forward.',
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="6" x2="11" y2="6" />
          <line x1="8" y1="9" x2="11" y2="9" />
          <rect x="8" y="13" width="8" height="5" rx="1" />
          <circle cx="10.5" cy="15" r="0.6" fill="currentColor" />
          <path d="M16 17.5l-2.2-2.2a0.5 0.5 0 0 0-.7 0L10.5 18" />
        </svg>
      ),
    },
    {
      id: 'ui-design',
      title: 'UI Design',
      description: 'Design clean, modern and responsive interfaces.',
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="6" width="7" height="13" rx="1.5" />
          <path d="M9 8h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9" />
          <line x1="13" y1="21" x2="19" y2="21" />
          <line x1="16" y1="18" x2="16" y2="21" />
          <circle cx="5.5" cy="16.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'prototyping',
      title: 'Prototyping',
      description: 'Build interactive prototypes for testing and communication.',
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="13" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 16v5" />
          <polygon points="10.5 7 15 9.5 10.5 12" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      id: 'usability-testing',
      title: 'Usability Testing',
      description: 'Test with users and improve the experience.',
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <circle cx="17.5" cy="15.5" r="3.5" />
          <polyline points="16 15.5 17.2 16.7 19.2 14.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-[#f5f5f7] dark:bg-[#000000] transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-base sm:text-lg lg:text-xl font-semibold text-slate-600 dark:text-[#9ca3af] tracking-wide"
          >
            Designing With Users In Mind. Building With Technology In Mind.
          </motion.h3>
        </div>

        {/* Bio Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="space-y-4 text-slate-600 dark:text-[#9ca3af] text-sm sm:text-base leading-relaxed text-left mb-8 max-w-6xl"
        >
          <p>
            I'm a UX/UI Designer with experience designing enterprise web applications for the banking sector.
            I specialize in creating user-centered experiences across the product lifecycle, from UX research and
            user flows to wireframes, UI design, interactive prototypes, and usability testing.
          </p>
          <p>
            With a background in front-end development using React.js, Next.js, and Django, I understand how
            designs are translated into real products. I collaborate closely with developers and cross-functional
            teams to create practical, scalable, and visually consistent experiences that are ready for implementation.
          </p>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex justify-start mb-12 sm:mb-14"
        >
          <button
            type="button"
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-teal-500/70 hover:border-teal-400 bg-white dark:bg-[#1d1d1f] text-slate-800 dark:text-[#f5f5f7] font-medium text-sm transition-all duration-200 hover:bg-teal-500/10 active:scale-98 cursor-pointer shadow-sm group"
          >
            <span>Download CV</span>
            <Download
              size={17}
              className="text-slate-600 dark:text-[#f5f5f7] group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors"
            />
          </button>
        </motion.div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.35 }}
              className="bg-white dark:bg-[#1d1d1f] border border-slate-200/80 dark:border-white/10 rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:border-teal-500/50 dark:hover:border-teal-400/50 hover:-translate-y-1 group shadow-sm"
            >
              {/* Teal Icon */}
              <div className="text-teal-500 dark:text-teal-400 mb-3.5 transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-teal-600 dark:text-teal-400 font-semibold text-sm sm:text-[15px] mb-2 leading-snug">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-slate-600 dark:text-[#8e929c] text-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

