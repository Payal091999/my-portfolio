// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';

export default function About() {
  return (
    <section
      id="about"
      className="snap-start relative min-h-screen text-center overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-800 to-blue-900"
    >
      {/* 🔹 Frosted Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30 z-10" />

      {/* 🔹 About Content */}
      <motion.div
        className="relative z-20 px-6 pt-28 pb-16 max-w-3xl mx-auto text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-xl p-6">
          <h2 className="text-4xl font-bold mb-4">👋 About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m <strong>Payal Bera</strong>, a web developer focused on building modern apps using Blazor, C#, React, and SQL.
            <br /><br />
            Passionate about designing user-friendly interfaces and solving problems with clean code. My goal is to build apps that are both functional and elegant.
          </p>
        </div>
      </motion.div>

      {/* 🔹 Skills and Timeline Sections */}
      <motion.div
        className="relative z-20 bg-white dark:bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      <motion.div
        className="relative z-20 bg-white dark:bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Timeline />
      </motion.div>
    </section>
  );
}
