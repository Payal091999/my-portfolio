// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';

export default function About() {
  return (
    <div className="scroll-snap-container">
      {/* 🔹 About Me Section */}
      <section className="scroll-snap-child relative text-center overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/about-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        <motion.div
          className="relative z-20 px-6 pt-28 pb-16 max-w-3xl mx-auto text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">👋 About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m <strong>Payal Bera</strong>, a web developer focused on building modern apps using Blazor, C#, React, and SQL.
            <br /><br />
            Passionate about designing user-friendly interfaces and solving problems with clean code.
          </p>
        </motion.div>
      </section>

      {/* 🔹 Skills Section */}
      <section className="scroll-snap-child parallax bg-gray-100 dark:bg-slate-900">
        <Skills />
      </section>

      {/* 🔹 Timeline Section */}
      <section className="scroll-snap-child bg-white dark:bg-slate-900">
        <Timeline />
      </section>
    </div>
  );
}
