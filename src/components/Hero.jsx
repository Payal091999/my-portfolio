import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Player } from '@lottiefiles/react-lottie-player';
import heroAnimation from '../assets/animations/hero-animation.json';
import scrollAnimation from '../assets/animations/scroll-down.json';

export default function Hero() {
  return (
    <section
      id="home"
      className="snap-start relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900"
    >
      {/* 🔹 Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30 z-10" />

      {/* 🔹 Particle-style Background */}
      <div className="absolute w-full h-full z-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* 🔹 Lottie Background Animation */}
      <Player
        autoplay
        loop
        src={heroAnimation}
        className="absolute top-0 w-full h-full opacity-10 z-0 pointer-events-none"
      />

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
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-purple-300 to-pink-400 mb-4 animate-pulse"
        >
          Hi, I’m Payal Bera 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl text-white mb-10"
        >
          <Typewriter
            words={[
              'Web Developer',
              'Blazor Enthusiast',
              'C# & SQL Specialist',
              'Creative Problem Solver',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.p>

        {/* 🔹 Pulsing CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#projects">
            <button className="backdrop-blur-md bg-white/10 border border-white/30 shadow-xl hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 animate-pulse">
              🚀 View Projects
            </button>
          </a>

          <a href="#about">
            <button className="backdrop-blur-md bg-white/10 border border-white/30 shadow-xl hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 animate-pulse">
              🙋 About Me
            </button>
          </a>

          <a
            href="/payal-bera-resume.pdf"
            download
            className="backdrop-blur-md bg-white/10 border border-white/30 shadow-xl hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 animate-pulse"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* 🔻 Scroll Lottie Animation */}
      <div className="absolute bottom-4 z-20">
        <Player
          autoplay
          loop
          src={scrollAnimation}
          style={{ height: '50px', width: '50px' }}
          className="opacity-80"
        />
      </div>
    </section>
  );
}
