import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/doiipvtbw/video/upload/v1748087046/bg-video_mxayo7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Transparent Overlay only (No Blur) */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

      {/* 🔹 Foreground Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-20 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Hi, I’m Payal Bera 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl text-white mb-8"
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
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-md">
              🚀 View Projects
            </button>
          </Link>

          <a
            href="/abcxyz_resume.pdf"
            download
            className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-full font-semibold border border-blue-600 transition duration-300 shadow-md"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
    
  );
}
