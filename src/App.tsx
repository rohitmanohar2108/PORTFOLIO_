import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Work } from "./components/sections/Work";
import { Education } from "./components/sections/Education";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { SocialLinks } from "./components/SocialLinks";
import { Email } from "./components/Email";
import { Container } from "./components/layouts/Container";
import { CustomCursor } from "./components/CustomCursor";
import ProjectSection from "./components/sections/ProjectSection";
import { projects } from "./data/Project";


export function App() {
  return (
    <div className="bg-slate-900 text-slate-400 min-h-screen selection:bg-emerald-400/30 selection:text-emerald-400">
      <Header />
      <CustomCursor />
      <Container className="pt-24 lg:pt-32">
        <main className="mx-auto max-w-[1000px]">
        
          <Hero />
          <Work />
          <Education />
          <Skills />

          {/* Show Projects on mobile but hide on larger screens */}
          <div className="lg:hidden">
            <Projects />
          </div>

          {/* Show ProjectSection on larger screens but hide on mobile */}
          <div id="project" className="hidden lg:block">
            <h2 className="flex items-center whitespace-nowrap text-2xl font-bold text-slate-200 mb-16">
              <span className="font-mono text-emerald-400 text-lg mr-2">
                05.
              </span>
              Some Things I've Built
              <span className="relative ml-6 w-full h-[1px] bg-slate-700" />
            </h2>
            {projects.map((project) => (
              <ProjectSection key={project.id} project={project} />
            ))}
          </div>

          <Contact />
          
        </main>
      </Container>
      <SocialLinks />
      <Email />
    </div>
  );
}

export default App;
