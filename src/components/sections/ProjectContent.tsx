import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../../types";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "+=300",
          scrub: 0.8,
        },
      });

      tl.from(leftContentRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          rightContentRef.current,
          {
            x: "100%",
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "<"
        )
        .from(
          linksRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="projects"  className="absolute inset-0 flex items-center">
      <div className="container mx-auto px-8">
        

        {/* Project Content */}
        <div className="flex justify-between items-center gap-12">
          {/* Left Container */}
          <div
            ref={leftContentRef}
            className="w-1/3 bg-black/80 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-4 text-white hover:text-teal-300">
              {project.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Links */}
          <div ref={linksRef} className="flex gap-6 scale-150">
            {project.github && (
              <a
                href={project.github}
                className="group relative bg-teal-400/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github
                  className="group-hover:text-white text-teal-500 transition-colors"
                  size={24}
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 text-teal-400 px-2 py-1 bg-white/20 rounded-full group-hover:opacity-100 text-sm transition-opacity">
                  GitHub
                </span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                className="group relative bg-teal-400/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ExternalLink
                  className="group-hover:text-white text-teal-500 transition-colors"
                  size={24}
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 text-teal-400 px-2 py-1 bg-white/20 rounded-full group-hover:opacity-100 text-xs transition-opacity">
                  Live
                </span>
              </a>
            )}
          </div>

          {/* Right Container */}
          <div
            ref={rightContentRef}
            className="w-1/3 bg-black/80 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-white">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-teal-400/10 font-mono text-teal-300 rounded-full text-sm font-medium transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
