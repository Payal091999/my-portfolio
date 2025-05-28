import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-700 dark:from-slate-900 dark:to-slate-800 text-white font-sans scroll-smooth">
      {/* 🔹 Navbar */}
      <header className="flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-b-2xl shadow-md border-b border-white/20">
        <h1 className="text-xl font-bold text-cyan-300">Payal Bera</h1>
        <nav className="flex gap-6 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-300" : "hover:text-cyan-300"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-cyan-300" : "hover:text-cyan-300"}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-cyan-300" : "hover:text-cyan-300"}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-cyan-300" : "hover:text-cyan-300"}>Contact</NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? "text-cyan-300" : "hover:text-cyan-300"}>Resume</NavLink>
        </nav>
        <ThemeToggle />
      </header>

      {/* 🔹 Animated Outlet for Routes */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="p-6"
      >
        <Outlet />
      </motion.main>
    </div>
  );
}
