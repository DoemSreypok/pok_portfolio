import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About me', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact me', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f5f5f7]/90 dark:bg-[#000000]/90 backdrop-blur-md py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-2xl font-bold tracking-tight text-teal-600 dark:text-teal-400 hover:text-teal-500 transition-colors"
        >
          Pinky
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-sm font-medium transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-teal-600 dark:text-teal-400 font-semibold'
                    : 'text-slate-600 dark:text-[#86868b] hover:text-teal-600 dark:hover:text-[#f5f5f7]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Theme Switcher & Mobile Trigger */}
        <div className="flex items-center gap-3">
          {/* Custom Toggle Switch */}
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="flex items-center dark:bg-[#1d1d1f] bg-slate-200 rounded-full p-1 w-16 h-8 cursor-pointer relative transition-colors"
          >
            <div
              className={`w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center text-slate-950 transition-all duration-300 transform ${
                darkMode ? 'translate-x-8 bg-teal-400' : 'translate-x-0 bg-slate-900 text-teal-300'
              }`}
            >
              {darkMode ? <Moon size={14} className="fill-slate-950 stroke-none" /> : <Sun size={14} className="text-white" />}
            </div>
            <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none text-slate-400 text-xs">
              <Moon size={12} className={darkMode ? 'opacity-0' : 'opacity-70'} />
              <Sun size={12} className={darkMode ? 'opacity-70' : 'opacity-0'} />
            </div>
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-[#f5f5f7] hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-200/50 dark:hover:bg-white/5 focus:outline-none transition-colors"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/98 dark:bg-[#1d1d1f]/98 backdrop-blur-2xl rounded-b-3xl p-3 shadow-2xl border-b border-slate-200/40 dark:border-white/5 mx-3 mt-2"
          >
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`flex items-center justify-between py-3 px-3 rounded-xl transition-all ${
                      isActive
                        ? 'text-teal-600 dark:text-teal-400 font-semibold bg-teal-500/10 dark:bg-teal-500/15'
                        : 'text-slate-800 dark:text-[#f5f5f7] hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-white/5 font-medium'
                    }`}
                  >
                    <span className="text-base sm:text-lg">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
