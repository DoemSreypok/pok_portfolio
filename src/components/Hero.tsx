import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import myPhotoCutout from '../assets/images/my-photo-cutout.png';

export const Hero: React.FC = () => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      const navOffset = 80;
      const elementPosition = portfolioSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadCV = () => {
    const cvContent = `SREYPOK DOEM (PINKY)
FullStack Developer
Email: sreypokdoem18@gmail.com | Phone: +885 88 45 01 458

PROFESSIONAL PROFILE:
Senior UX/UI Designer and Web Developer experienced in designing and engineering high-impact digital products, design systems, and enterprise banking platforms.

TRACK RECORD:
- 3+ Years of Experience in UX/UI Design & Web Development
- 20+ Completed Digital Projects
- 12+ Enterprise & Banking Core Systems

CORE EXPERTISE:
- UX/UI Design: User Research, Journey Mapping, Information Architecture, Wireframing, Figma Design Systems, Interactive Prototyping, Usability Testing (WCAG Accessibility)
- Web Development: React.js, Next.js, Angular, TypeScript, JavaScript, Tailwind CSS, Bootstrap, HTML5/CSS3
- Backend & Databases: Node.js, Express.js, Django REST, PostgreSQL, MongoDB, Oracle Database
- Tools & DevOps: Git & GitHub, Docker, Postman`;

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

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-20 flex items-center justify-center relative bg-[#f5f5f7] dark:bg-[#000000] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            <div className="space-y-1">
              <span className="text-slate-500 dark:text-[#86868b] text-base font-normal tracking-wide">
                Hi I am
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-[#f5f5f7] uppercase">
                Sreypok Doem
              </h1>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-600 dark:text-teal-400">
              UX/UI Designer | Web Developer
            </h2>

            <p className="text-slate-600 dark:text-[#86868b] text-base sm:text-lg leading-relaxed max-w-xl">
              I design intuitive, user-centered digital experiences and build scalable, modern web applications.
              Bridging thoughtful UX research with clean, production-ready code to create meaningful products for users and businesses.
            </p>

            {/* Metrics Quick Stats Box */}
            <div className="bg-white dark:bg-[#1d1d1f] rounded-xl p-7 grid grid-cols-3 gap-4 max-w-xl">
              <div className="flex flex-col space-y-1 pr-2">
                <span className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">
                  5+
                </span>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-[#86868b] font-medium leading-tight">
                  Years Experience
                </span>
              </div>

              <div className="flex flex-col space-y-1 pr-2">
                <span className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">
                  20+
                </span>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-[#86868b] font-medium leading-tight">
                  Projects Delivered
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">
                  12+
                </span>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-[#86868b] font-medium leading-tight">
                  Enterprise Systems
                </span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-300 text-white dark:text-slate-950 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer active:translate-y-0 text-sm"
              >
                <span>Portfolio Demo</span>
                <ArrowDown size={17} className="stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-[#1d1d1f] hover:bg-slate-100 dark:hover:bg-[#252528] text-slate-800 dark:text-[#f5f5f7] font-medium px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer text-sm"
              >
                <span>Download CV</span>
                <Download size={17} className="stroke-[2]" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Pop-out Circular Profile Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="flex lg:col-span-5 justify-center lg:justify-end"
          >
            <div className="relative w-80 h-[380px] sm:w-96 sm:h-[450px] lg:w-[460px] lg:h-[540px] xl:w-[500px] xl:h-[580px] flex items-end justify-center select-none">
              {/* Dark Charcoal Circular Backdrop */}
              <div className="absolute bottom-0 w-80 h-80 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px] xl:w-[500px] xl:h-[500px] rounded-full bg-[#1c1d21] dark:bg-[#18181b] border border-slate-700/30 dark:border-white/10 shadow-2xl overflow-hidden">
                {/* Clipped Bottom Image */}
                <img
                  src={myPhotoCutout}
                  alt="Sreypok Doem"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[118%] max-h-none object-contain object-bottom pointer-events-none"
                  loading="eager"
                />
              </div>

              {/* Pop-Out Top Head Layer (Unclipped at the top) */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px] xl:w-[500px] xl:h-[500px] pointer-events-none z-20"
                style={{ overflow: 'visible' }}
              >
                <img
                  src={myPhotoCutout}
                  alt="Sreypok Doem"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[118%] max-h-none object-contain object-bottom pointer-events-none"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)',
                  }}
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
