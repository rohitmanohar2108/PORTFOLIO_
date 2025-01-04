import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const AnimatedTitle = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const text = new SplitType(titleRef.current, { types: 'chars' });
    const chars = text.chars || [];
    
    gsap.from(chars, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.02,
      ease: "back.out(1.7)",
      onComplete: () => {
        chars.forEach((char: HTMLElement) => {
          char.addEventListener('mouseenter', () => {
            gsap.to(char, {
              y: -20,
              scale: 1.3,
              color: '#9333ea',
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          char.addEventListener('mouseleave', () => {
            gsap.to(char, {
              y: 0,
              scale: 1,
              color: 'inherit',
              duration: 0.3,
              ease: "power2.in"
            });
          });
        });
      }
    });

    return () => {
      text.revert();
    };
  }, []);

  return (
    <h1 
      ref={titleRef}
      className="text-4xl md:text-7xl  font-bold mb-8 leading-tight z-50"
    >
      Rohit Manohar
    </h1>
  );
};

export default AnimatedTitle;