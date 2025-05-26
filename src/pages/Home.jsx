// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* 🔹 All scrollable sections below */}
      <section id="home" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="resume" className="snap-start">
        <Resume />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </main>
  );
}
