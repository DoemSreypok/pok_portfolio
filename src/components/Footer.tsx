import React from 'react';
import { ArrowUp } from 'lucide-react';
import {
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa6';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About me', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact me', id: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      hoverBg: 'hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white',
      glow: 'hover:shadow-[#0A66C2]/25',
      icon: <FaLinkedinIn size={16} />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      hoverBg: 'hover:bg-slate-900 hover:border-slate-900 hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-slate-950',
      glow: 'hover:shadow-slate-900/25 dark:hover:shadow-white/20',
      icon: <FaGithub size={16} />,
    }
  ];

  return (
    <footer className="relative bg-white dark:bg-[#0b0b0c] text-slate-900 dark:text-[#f5f5f7] border-t border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Row: Brand, Nav & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-2xl font-bold tracking-tight text-teal-600 dark:text-teal-400 hover:text-teal-500 transition-colors"
            >
              Pinky
            </a>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#86868b]">
              UX/UI Designer & Web Developer
            </p>
          </div>

          {/* Centered Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm text-slate-600 dark:text-[#86868b] hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Enhanced Social Links with Tooltips and Brand-Adaptive Glow */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <div key={social.name} className="relative group">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#18181b] border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-[#86868b] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 cursor-pointer ${social.hoverBg} ${social.glow}`}
                >
                  <span className="transform transition-transform duration-200 group-hover:scale-110">
                    {social.icon}
                  </span>
                </a>

                {/* Floating Tooltip */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-semibold tracking-wide opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-md whitespace-nowrap z-20">
                  {social.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-solid border-t-slate-900 dark:border-t-white border-t-4 border-x-transparent border-x-4 border-b-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 border-t border-slate-200/70 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-[#86868b]">
          <div>
            <span>© {new Date().getFullYear()} Sreypok Doem (Pinky). All rights reserved.</span>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-[#86868b] hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer active:scale-95"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="stroke-[2]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
