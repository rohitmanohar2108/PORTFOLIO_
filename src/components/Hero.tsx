import React from "react";
import { siteConfig } from "../data/config";


export const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-16 pb-96"
    >
      {/* Background Video */}

      {/* Content */}
      <div className="container mx-auto px-6">
        <h1 className="font-mono text-emerald-400 mb-5">Hi, my name is</h1>
        <h2 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4">
          {siteConfig.name}.
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
          {siteConfig.title}
        </h3>
        <p className="text-white max-w-xl text-lg mb-12">
          {siteConfig.description}
        </p>
        <a
          href="#projects"
          className="border border-emerald-400 text-emerald-400 px-7 py-4 rounded text-lg hover:bg-emerald-400/10 transition-colors inline-block"
        >
          Check out my work!!
        </a>
      </div>
    </section>
  );
};
