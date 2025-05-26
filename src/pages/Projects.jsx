// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: '🧠 SoulSync',
      description: 'A cross-platform AI-powered app for emotional support and relationship advice.',
      tags: ['AI', 'Blazor', 'C#', 'MAUI'],
      github: 'https://github.com/yourusername/soulsync',
      live: 'https://soulsync.vercel.app',
      image: '/images/soulsync-preview.png', // Replace with your image path
    },
    {
      title: '✅ Task Tracker Web App',
      description: 'A full-stack Blazor web app to manage daily tasks using ASP.NET Core + EF + SQL.',
      tags: ['Blazor', 'C#', 'EF Core', 'SQL Server'],
      github: 'https://github.com/yourusername/task-tracker',
      live: 'https://tasktracker-demo.netlify.app',
      image: '/images/tasktracker-preview.png',
    },
  ];

  return (
    <section
      id="projects"
      className="snap-start min-h-screen bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-900 py-20 px-6 text-white relative"
    >
      {/* 🔹 Frosted Glass Background Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30 z-10" />

      <motion.div
        className="relative z-20 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">💼 Projects</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
