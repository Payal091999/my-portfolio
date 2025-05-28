import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-6 py-10 bg-transparent text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-md">
          <p className="text-xs text-purple-300 mb-1">Blazor App</p>
          <h3 className="text-lg font-bold">Task Tracker</h3>
          <p className="text-sm text-white/80 mb-4">Track and update tasks using C# & SQL.</p>
          <div>
            <p className="text-xs mb-1">C#</p>
            <div className="w-full bg-white/20 rounded-full h-2 mb-3">
              <div className="bg-purple-400 h-2 rounded-full w-[80%]" />
            </div>
            <p className="text-xs mb-1">SQL</p>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-purple-400 h-2 rounded-full w-[75%]" />
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-md">
          <p className="text-xs text-purple-300 mb-1">Full Stack</p>
          <h3 className="text-lg font-bold">SoulSync</h3>
          <p className="text-sm text-white/80 mb-4">AI-powered emotional support app with Blazor : .NET API</p>
          <div className="flex gap-4">
            <a href="#" className="px-4 py-2 bg-purple-600/30 rounded-lg text-sm hover:bg-purple-500/40">GitHub</a>
            <a href="#" className="px-4 py-2 bg-purple-600/30 rounded-lg text-sm hover:bg-purple-500/40">Live</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
