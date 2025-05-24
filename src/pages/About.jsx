// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';

export default function About() {
  return (
    <section className="relative min-h-screen text-center overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-800 to-blue-900">

      {/* 🔹 Optional Overlay for Dim Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* 🔹 About Me Content */}
      <motion.div
        className="relative z-20 px-6 pt-28 pb-16 max-w-3xl mx-auto text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">👋 About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m <strong>Payal Bera</strong>, a web developer focused on building modern apps using Blazor, C#, React, and SQL.
          <br /><br />
          Passionate about designing user-friendly interfaces and solving problems with clean code. My goal is to build apps that are functional and elegant.
        </p>
      </motion.div>

      {/* 🔹 Animated Skills and Timeline Section */}
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
