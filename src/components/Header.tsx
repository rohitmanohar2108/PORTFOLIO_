import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../data/config";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed  top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl md:rounded-lg p-5  lg:rounded-full transition-all duration-300 ${
        scrolled
          ? " bg-white/10 backdrop-blur-sm lg:py-2 shadow-lg "
          : " bg-white/10 backdrop-blur-sm lg:py-2 shadow-md"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <a href="#" className=" text-emerald-400 transform -translate-x-4 font-mono text-xl">
            <span className=" text-white px-2 py-2 rounded-full border border-emerald-400 bg-teal-400/10">RM</span>{" "}
            {siteConfig.name}
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              About
            </a>
            <a
              href="#work"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Education
            </a>
            <a
              href="#projects"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              className="border border-emerald-400 bg-teal-400/10 text-emerald-400 px-4 py-2 transform translate-x-3 rounded-full hover:bg-emerald-400/10 transition-colors"
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
            <a
              href="#about"
              className="text-slate-300 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="text-slate-300 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#work"
              className="text-slate-300 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-slate-300 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
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
