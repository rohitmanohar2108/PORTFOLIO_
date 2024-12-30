import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/sections/Work';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { SocialLinks } from './components/SocialLinks';
import { Email } from './components/Email';
import { Container } from './components/layouts/Container';
import { CustomCursor } from './components/CustomCursor';

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
          <Projects />
          <Contact />
        </main>
      </Container>
      <SocialLinks />
      <Email />
    </div>
  );
}

export default App;