import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/config';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-emerald-400 font-mono text-xl">
            <span className='px-1 py-1 text-white bg-emerald-400/10'>RM</span>{" "}{siteConfig.name}
          </a>

          <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#work" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Experience
            </a>
            <a href="#education" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Education
            </a>
            <a href="#projects" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Contact
            </a>
            <a
              href="/resume.pdf"
              className="border border-emerald-400 text-emerald-400 px-4 py-2 rounded hover:bg-emerald-400/10 transition-colors"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#about" className="text-slate-300 text-lg" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#experience" className="text-slate-300 text-lg" onClick={() => setIsMenuOpen(false)}>
              Experience
            </a>
            <a href="#work" className="text-slate-300 text-lg" onClick={() => setIsMenuOpen(false)}>
              Work
            </a>
            <a href="#contact" className="text-slate-300 text-lg" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <a
              href="/resume.pdf"
              className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};