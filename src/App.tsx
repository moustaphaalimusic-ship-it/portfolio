import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import Work from './components/Work';
import { AdditionalWorkSection } from './components/AdditionalWorkSection';
import { AiVisualsSection } from './components/AiVisualsSection';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import ExperienceSnapshot from './components/ExperienceSnapshot';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Work projects={projects} />
        <AiVisualsSection />
        <AdditionalWorkSection />
        <Skills />
        <ExperienceSnapshot />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
