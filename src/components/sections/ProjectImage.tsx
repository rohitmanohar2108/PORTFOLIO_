import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectImageProps {
  src: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=300',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(image, {
      scale: 0.8,
      filter: 'blur(4px)',
      duration: 1
    })
    .to(container.querySelector('.overlay'), {
      opacity: 0.7,
      duration: 0.5
    }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} id="projects" className="h-screen w-full relative overflow-hidden">
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover   transform-gpu"
      />
      <div className="overlay absolute inset-0  bg-gradient-to-b from-black/30 via-black/50 to-black/70 backdrop-blur-[2px] opacity-30 transition-opacity duration-500" />
    </div>
  );
}

export default ProjectImage;