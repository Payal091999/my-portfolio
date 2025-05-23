// src/components/Hero.jsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-bold mb-4"
      >
        Hi, I’m <span className="text-cyan-400">Payal Bera</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg sm:text-xl text-gray-300 max-w-xl"
      >
        Software Developer focused on building responsive full stack apps with Blazor, C#, SQL, Java Script and ASP.NET Core.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
      >
        <a
          href="#projects"
          className="bg-cyan-500 hover:bg-cyan-400 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md transition"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
}
