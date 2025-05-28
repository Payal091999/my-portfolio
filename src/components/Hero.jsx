import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GlassCard from './GlassCard';
import ProgressBar from './ProgressBar';
import heroAnimation from '../assets/animations/hero-animation.json';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className="min-h-screen px-6 py-10 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative font-sans">
      {/* 🔹 Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full backdrop-blur-md bg-black/30" />
        <div className="w-full h-full opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px]" />
        <Player autoplay loop src={heroAnimation} className="absolute top-0 w-full h-full opacity-10 pointer-events-none" />
      </div>

      {/* 🔹 Navbar */}
      <nav className="flex justify-between items-center mb-10 backdrop-blur-md bg-white/10 px-6 py-4 rounded-full shadow-lg border border-white/20">
        <div className="text-lg font-bold tracking-wide">Payal Bera 2</div>
        <div className="flex items-center space-x-6 text-sm">
          <a href="#about" className="hover:text-cyan-300">About 2</a>
          <a href="#projects" className="hover:text-cyan-300">Projects 2</a>
          <a href="#contact" className="hover:text-cyan-300">Contact 2</a>
          <a href="/payal-bera-resume.pdf" download className="px-3 py-1 border border-white/20 rounded-full hover:bg-white/10">Resume 2</a>
        </div>
      </nav>

      {/* 🔹 Hero Headline */}
      <h1 className="text-4xl md:text-5xl font-bold mb-3">Hi, I’m Payal Bera</h1>
      <h2 className="text-xl text-cyan-200 mb-4">
        <Typewriter
          words={['Full Stack Web Developer', 'Blazor Enthusiast', 'Clean Coder', 'SQL Server Specialist', 'Creative Problem Solver']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        /></h2>
      <div className="flex items-center space-x-6 text-sm font-medium justify-center mb-10">
  <a
    href="#about"
    className="relative text-white hover:text-cyan-300 transition duration-300 group"
  >
    About
    <span className="block h-0.5 bg-cyan-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </a>

  <a
    href="#projects"
    className="relative text-white hover:text-cyan-300 transition duration-300 group"
  >
    Projects
    <span className="block h-0.5 bg-cyan-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </a>

  <a
    href="#contact"
    className="relative text-white hover:text-cyan-300 transition duration-300 group"
  >
    Contact
    <span className="block h-0.5 bg-cyan-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </a>

  <a
    href="/payal-bera-resume.pdf"
    download
    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1.5 rounded-full shadow-lg transition duration-300"
  >
    Download Resume
  </a>
</div>
        

      <p className="max-w-xl mx-auto text-white/80 text-center mb-12">
        I build scalable web applications using Blazor, ASP.NET, SQL Server, and modern frontend tools.
      </p>

      {/* 🔹 Code Block */}
      <div className="max-w-md mx-auto bg-white/5 text-left rounded-xl p-4 font-mono text-sm text-pink-300 shadow-inner mb-12">
        <p>const greet = () =&gt; &#123;</p>
        <p className="ml-4">console.log("Hello from Payal");</p>
        <p>&#125;;</p>
      </div>

      {/* 🔹 About + Skills */}
      <GlassCard id="about" className="max-w-4xl mx-auto mb-12">
        <h3 className="text-xl font-bold mb-4">About Me 3</h3>
        <p className="text-sm text-white/80 mb-6">
          Passionate about merging elegant design with clean code. I love working on user-first applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ProgressBar label="OOPs" value={80} />
          <ProgressBar label="DSA" value={55} />
          <ProgressBar label="C++" value={90} />
          <ProgressBar label="SQL" value={60} />
          <ProgressBar label="JavaScript" value={75} />
          <ProgressBar label="C#" value={85} />
        </div>
      </GlassCard>

      {/* 🔹 Projects */}
      <div id="projects" className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        <GlassCard className="flex flex-col justify-between hover:scale-[1.02] transition">
          <div>
            <p className="text-xs text-cyan-300 mb-1">Blazor App</p>
            <h4 className="text-lg font-semibold">Task Tracker</h4>
            <p className="text-sm text-white/70 mb-4">Track and update your tasks using C# & SQL.</p>
            <ProgressBar label="C#" value={80} />
            <ProgressBar label="SQL" value={75} />
          </div>
          <div className="flex justify-start gap-4 text-cyan-300 mt-4">
            <a href="https://github.com/Payal091999/task-tracker" target="_blank" rel="noreferrer" className="flex items-center gap-1"><FaGithub /> GitHub</a>
            <a href="https://task-tracker.netlify.app" target="_blank" rel="noreferrer" className="flex items-center gap-1"><FaExternalLinkAlt /> Live</a>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col justify-between hover:scale-[1.02] transition">
          <div>
            <p className="text-xs text-cyan-300 mb-1">Full Stack</p>
            <h4 className="text-lg font-semibold">SoulSync</h4>
            <p className="text-sm text-white/70 mb-4">AI-powered emotional support app with Blazor + .NET API.</p>
          </div>
          <div className="flex justify-start gap-4 text-cyan-300 mt-4">
            <a href="https://github.com/Payal091999/soulsync" target="_blank" rel="noreferrer" className="flex items-center gap-1"><FaGithub /> GitHub</a>
            <a href="https://soulsync-app.netlify.app" target="_blank" rel="noreferrer" className="flex items-center gap-1"><FaExternalLinkAlt /> Live</a>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col justify-between p-4 hover:scale-[1.02] transition">
          <div>
            <p className="text-xs text-cyan-300 mb-1">Frontend</p>
            <h4 className="text-lg font-semibold">My Portfolio</h4>
            <p className="text-sm text-white/70">A personal portfolio built with React + TailwindCSS, showcasing my projects and skills.</p>
          </div>
          <div className="flex justify-between mt-4 text-cyan-300">
            <a href="https://github.com/Payal091999/my-portfolio" target="_blank" rel="noreferrer" className="flex gap-1 items-center">
              <FaGithub /> GitHub
            </a>
            <a href="https://myportfolio-091999.netlify.app" target="_blank" rel="noreferrer" className="flex gap-1 items-center">
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col justify-between p-4 hover:scale-[1.02] transition">
          <div>
            <p className="text-xs text-cyan-300 mb-1">Blazor Server App</p>
            <h4 className="text-lg font-semibold">Zoo Management Web App</h4>
            <p className="text-sm text-white/70 mb-4">
              Manage animals, feeding schedules, and caretakers. Built with Blazor, EF Core & SQL Server. Features sorting, filtering, feeding logs, and timestamp tracking.
            </p>
            <ProgressBar label="Blazor" value={85} />
            <ProgressBar label="EF Core" value={80} />
            <ProgressBar label="SQL Server" value={75} />
          </div>
          <div className="flex justify-between mt-4 text-cyan-300">
            <a href="https://github.com/Payal091999/zoo-management-app" target="_blank" rel="noreferrer" className="flex gap-1 items-center">
              <FaGithub /> GitHub
            </a>
            <a href="https://zoo-management.netlify.app" target="_blank" rel="noreferrer" className="flex gap-1 items-center">
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </GlassCard>
      </div>

      {/* 🔹 Contact */}
      <GlassCard id="contact" className="text-center max-w-2xl mx-auto py-10">
        <h3 className="text-xl font-bold mb-2">Contact 3</h3>
        <p className="text-sm text-white/80 mb-4">Let’s collaborate on something great!</p>
        <div className="text-2xl animate-bounce">↑</div>
      </GlassCard>
    </section>
  );
}
