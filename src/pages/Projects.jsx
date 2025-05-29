import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-6 py-10 bg-transparent text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-white">🚀 My Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* 🔹 Project 1: Task Tracker */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-md">
          <p className="text-xs text-cyan-300 mb-1">Blazor App</p>
          <h3 className="text-lg font-semibold">Task Tracker</h3>
          <p className="text-sm text-white/80 mb-4">Track and update your tasks using C# & SQL.</p>

          <div className="mb-4">
            <p className="text-sm">C# <span className="float-right">80%</span></p>
            <div className="w-full h-2 bg-white/20 rounded-full mb-2">
              <div className="h-full bg-blue-400 w-[80%] rounded-full"></div>
            </div>
            <p className="text-sm">SQL <span className="float-right">75%</span></p>
            <div className="w-full h-2 bg-white/20 rounded-full">
              <div className="h-full bg-cyan-400 w-[75%] rounded-full"></div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => alert('GitHub link coming soon')}
              className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/20 transition"
            >
              <FaGithub /> GitHub
            </button>
          </div>
        </div>

        {/* 🔹 Project 2: SoulSync */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-md">
          <p className="text-xs text-cyan-300 mb-1">Full Stack</p>
          <h3 className="text-lg font-semibold">SoulSync</h3>
          <p className="text-sm text-white/80 mb-4">AI-powered emotional support app with Blazor + .NET API.</p>

          <div className="flex gap-4">
            <button
              onClick={() => alert('GitHub link coming soon')}
              className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/20 transition"
            >
              <FaGithub /> GitHub
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
// This component displays a section of projects with animations and skill bars.
// It uses Framer Motion for animations and includes buttons for GitHub links.  
// The projects are styled with a glassmorphism effect and responsive design.
// The skill bars visually represent the proficiency in C# and SQL for the Task Tracker project.
// The SoulSync project is presented as a full-stack application with a similar design.
// The section is designed to be visually appealing and user-friendly, with a focus on clarity and accessibility.
// The component is ready to be integrated into a larger application, providing a modern and interactive user experience.
// The code is structured to be easily maintainable and extendable for future projects.
// The use of Tailwind CSS classes ensures a consistent design language across the application.
// The component is optimized for performance with smooth transitions and responsive layouts.
// The project section is a key part of the portfolio, showcasing the developer's skills and projects.
// The component can be further enhanced with additional projects or features as needed.
// The code is modular and follows best practices for React development, making it easy to understand and modify.