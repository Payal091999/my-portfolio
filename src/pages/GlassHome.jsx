import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaGithub, FaExternalLinkAlt, FaSun, FaMoon } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import SkillChart from '../components/SkillChart';
import ThemeToggle from '../components/ThemeToggle';
import Footer from './Footer'; // ✅ Make sure path is correct
import heroAnimation from '../assets/animations/hero-animation.json';

export default function GlassHome() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolvedTheme = stored || (prefersDark ? 'dark' : 'light');
    if (resolvedTheme === 'dark') document.documentElement.classList.add('dark');
    setTheme(resolvedTheme);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const newTheme = html.classList.contains('dark') ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-700 dark:from-[#0f172a] dark:to-[#0f172a] text-white font-sans">
      <main className="flex-grow relative px-6 py-10">
        {/* 🔹 Visual Background Layers */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full backdrop-blur-md bg-black/30" />
          <div className="w-full h-full opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px]" />
          <Player
            autoplay
            loop
            src={heroAnimation}
            className="absolute top-0 w-full h-full opacity-10 pointer-events-none"
          />
        </div>

        {/* 🔹 Floating Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-50 text-2xl p-2 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-white/20 transition"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        {/* 🔹 Navbar */}
        <nav className="flex justify-between items-center mb-10 backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-full px-6 py-3 border border-white/20 shadow-md z-10">
          <div className="text-lg font-bold">Payal Bera</div>
          <div className="flex gap-4 text-sm items-center">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
            <a
              href="/payal-bera-resume.pdf"
              download
              className="px-3 py-1 border border-white/20 rounded-full hover:bg-white/10"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* 🔹 Hero Section */}
        <GlassCard className="grid md:grid-cols-2 gap-6 items-center mb-10 z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I’m Payal Bera 👋</h1>
            <h2 className="text-xl text-cyan-200 mb-4">Full Stack Web Developer</h2>
            <p className="text-white/80 text-sm">
              I build scalable web applications using Blazor, ASP.NET, SQL Server, and modern frontend tools.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 font-mono text-sm text-pink-300 shadow-inner">
            <p>const greet = () =&gt; &#123;</p>
            <p className="ml-4">console.log("Hello from Payal");</p>
            <p>&#125;;</p>
          </div>
        </GlassCard>

        {/* 🔹 About Section */}
        <GlassCard id="about" className="grid md:grid-cols-2 gap-6 items-center mb-10 z-10">
          <div>
            <h3 className="text-xl font-bold mb-2">About Me</h3>
            <p className="text-sm text-white/80">
              Passionate about merging elegant design with clean code. I love working on user-first applications.
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <SkillChart value={80} label="C#" />
            <SkillChart value={75} label="SQL" />
          </div>
        </GlassCard>

        {/* 🔹 Projects Section */}
        <div id="projects" className="grid md:grid-cols-2 gap-6 mb-10 z-10">
          <GlassCard className="flex flex-col justify-between p-4 hover:scale-[1.02] transition">
            <div>
              <p className="text-xs text-cyan-300 mb-1">Blazor App</p>
              <h4 className="text-lg font-semibold">Task Tracker</h4>
              <p className="text-sm text-white/70">Track and update your tasks efficiently using C# & SQL.</p>
            </div>
            <div className="flex justify-between mt-4 text-cyan-300">
              <a href="https://github.com/yourname/task-tracker" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="https://task-tracker.netlify.app" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col justify-between p-4 hover:scale-[1.02] transition">
            <div>
              <p className="text-xs text-cyan-300 mb-1">Full Stack</p>
              <h4 className="text-lg font-semibold">SoulSync</h4>
              <p className="text-sm text-white/70">AI-powered emotional support app with Blazor + .NET API.</p>
            </div>
            <div className="flex justify-between mt-4 text-cyan-300">
              <a href="https://github.com/yourname/soulsync" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="https://soulsync-app.netlify.app" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </GlassCard>
        </div>

        {/* 🔹 Contact Section */}
        <GlassCard id="contact" className="text-center w-full py-10 rounded-3xl z-10">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-sm text-white/80 mb-4">Let’s collaborate on something great!</p>
          <div className="text-2xl animate-bounce">↑</div>
        </GlassCard>
      </main>

      {/* ✅ Footer Always Visible */}
      <Footer />
    </div>
  );
}
