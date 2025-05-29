import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import SkillChart from '../components/SkillChart';
import Timeline from '../components/Timeline';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 py-10 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-700 dark:from-[#0f172a] dark:to-[#0f172a] text-white font-sans scroll-smooth"
    >
      {/* 🔹 Background Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full backdrop-blur-md bg-black/30" />
        <div className="w-full h-full opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* 🔹 About Me + SkillChart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <GlassCard className="grid md:grid-cols-2 gap-6 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">👋 About Me</h2>
            <p className="text-sm text-white/80 leading-relaxed">
              I’m <strong>Payal Bera</strong>, a web developer focused on building modern full-stack apps using Blazor, C#, React, and SQL Server.
              <br /><br />
              Passionate about designing user-friendly UIs and solving business problems with clean code. I love blending logic with creativity.
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <SkillChart value={80} label="C#" />
            <SkillChart value={75} label="SQL" />
          </div>
        </GlassCard>
      </motion.div>

      {/* 🔹 Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10"
      >
        <Timeline />
      </motion.div>
    </section>
  );
}
