import React, { useEffect, useRef } from 'react';
import { Star, Sparkles, Sparkle } from 'lucide-react';
import gsap from 'gsap';

const NewYearBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const decorationsRef = useRef<HTMLDivElement>(null);
  const fireworksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !particlesRef.current || !decorationsRef.current || !fireworksRef.current) return;

    // Main Text Animation
    const textTl = gsap.timeline({ repeat: -1 });
    gsap.set(textRef.current, { opacity: 0, scale: 0.5 });
    
    textTl
      .to(textRef.current, {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "elastic.out(1, 0.5)"
      })
      .to(textRef.current.querySelector('.year'), {
        backgroundPosition: "200% center",
        duration: 4,
        ease: "none"
      })
      .to(textRef.current.querySelector('.message'), {
        backgroundSize: "200%",
        duration: 3,
        ease: "none"
      }, "-=3")
      .to(textRef.current, {
        keyframes: [
          { scale: 1.05, duration: 0.4 },
          { scale: 1, duration: 0.4 }
        ],
        repeat: 1,
        yoyo: true
      }, "-=2");

    // Particles Animation with Depth Effect
    const particles = particlesRef.current.children;
    gsap.set(particles, { opacity: 0, scale: 0 });

    [...particles].forEach((particle, index) => {
      const depth = Math.random();
      gsap.to(particle, {
        opacity: 0.3 + (depth * 0.4),
        scale: 0.3 + (depth * 0.7),
        duration: 1 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(particle, {
        y: gsap.utils.random(-30, 30) * depth,
        x: gsap.utils.random(-30, 30) * depth,
        duration: 2 + (depth * 3),
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    });

    // Decorations Animation with Complex Movement
    const decorations = decorationsRef.current.children;
    gsap.set(decorations, { opacity: 0, scale: 0 });

    const decorationsTl = gsap.timeline({ repeat: -1 });
    decorationsTl
      .to(decorations, {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: {
          each: 0.2,
          from: "random"
        },
        ease: "back.out(1.7)"
      })
      .to(decorations, {
        rotate: "+=360",
        duration: 15,
        ease: "none",
        stagger: {
          each: 0.5,
          from: "random"
        }
      }, 0)
      .to(decorations, {
        scale: 1.2,
        duration: 2,
        stagger: {
          each: 0.3,
          from: "center"
        },
        yoyo: true,
        repeat: 3
      }, "-=15");

    // Fireworks Animation
    const fireworks = fireworksRef.current.children;
    gsap.set(fireworks, { opacity: 0, scale: 0 });

    const fireworksTl = gsap.timeline({ repeat: -1 });
    [...fireworks].forEach((firework, index) => {
      const delay = index * 0.5;
      fireworksTl
        .to(firework, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)"
        }, delay)
        .to(firework, {
          y: -100 * Math.random(),
          duration: 1.5,
          ease: "power1.out"
        }, delay)
        .to(firework, {
          opacity: 0,
          scale: 2,
          duration: 0.3,
          ease: "power1.in"
        }, `>-0.3`);
    });

    return () => {
      textTl.kill();
      decorationsTl.kill();
      fireworksTl.kill();
    };
  }, []);

  return (
    <div 
      ref={bannerRef}
      className="relative w-full h-[500px] bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-pink-900/90 overflow-hidden rounded-2xl shadow-2xl border border-emerald-400 backdrop-blur-sm"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay animate-pulse" />
      
      {/* Particles Layer */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="absolute">
            {i % 3 === 0 ? (
              <Star className="text-yellow-200/30" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }} />
            ) : i % 3 === 1 ? (
              <Sparkles className="text-yellow-100/20" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }} />
            ) : (
              <Sparkles className="text-blue-200/20" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <div ref={textRef} className="text-center transform">
          <h1 className="year text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-[length:200%] animate-gradient">
            2024
          </h1>
          <p className="message text-4xl font-light mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200 bg-[length:100%]">
            Happy New Year!
          </p>
          <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed">
            May this year bring endless joy, prosperity, and unforgettable moments
          </p>
        </div>

        {/* Animated Decorations */}
        <div ref={decorationsRef} className="absolute hidden sm:block w-full h-full pointer-events-none">
          <Sparkles className="absolute top-20 left-20 text-yellow-400 w-14 h-14" />
          <Sparkles className="absolute top-40 right-32 text-pink-400 w-16 h-16" />
          <Sparkles className="absolute bottom-24 left-32 text-purple-400 w-14 h-14" />
          <Sparkles className="absolute top-32 right-24 text-blue-400 w-12 h-12" />
          <Sparkles className="absolute bottom-32 right-40 text-green-400 w-14 h-14" />
          <Sparkles className="absolute top-40 left-40 text-red-400 w-16 h-16" />
        </div>

        {/* Fireworks Layer */}
        <div ref={fireworksRef} className="absolute w-full h-full pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <Sparkles 
              key={i}
              className={`absolute bottom-0 text-${['yellow', 'pink', 'purple', 'blue', 'green', 'red'][i]}-400 w-8 h-8`}
              style={{ left: `${10 + (i * 18)}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewYearBanner;