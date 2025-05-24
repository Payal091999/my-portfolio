import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-slate-800 dark:to-slate-900 px-4">
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Hi, I’m Payal Bera 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
      >
        Web Developer | Blazor • C# • React • SQL
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link to="/projects">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">
            🚀 View Projects
          </button>
        </Link>

        <a
          href="/abcxyz_resume.pdf"
          download
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold border border-blue-600 hover:bg-blue-50 dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-slate-700 transition"
        >
          📄 Download Resume
        </a>
      </motion.div>
    </section>
  );
}
