import React, { useEffect } from "react";
import { siteConfig } from "../data/config";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  ChevronDown, MoveDown } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  useEffect(() => {
    // Scroll-triggered animation
    gsap.from(".feature-card", {
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".feature-cards",
        start: "top 80%",
      },
    });

    // Mouse movement animation
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(".hero-content", {
        rotateX: -yPos,
        rotateY: xPos,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-16 pb-96 z-50"
    >
      {/* Content */}
      
      <div className="container mx-auto px-6 ">
        <div className="hero-content">
          <h1 className="font-mono text-emerald-400 mb-5">Hi, my name is</h1>
          <h2 className="relative text-5xl md:text-7xl font-bold text-slate-200 mb-4 z-50">
            <AnimatedTitle />
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
            {siteConfig.title}
          </h3>
          </div>
          <p className="text-white max-w-xl text-lg mb-12">
            {siteConfig.description}
          </p>
        
        <a
          href="#projects"
          className="z-20 relative border border-emerald-400 text-emerald-400 px-7 py-4 rounded text-lg hover:bg-emerald-400/10 transition-colors inline-block"
        >
          Check out my work!!
        </a>
        < ChevronDown className="absolute ml-14 mt-9  left-1/2 -translate-x-1/2 text-slate-400 animate-bounce flex flex-col items-center gap-2"/>
      </div>
    </section>
  );
};
