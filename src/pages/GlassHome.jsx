import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Typewriter } from 'react-simple-typewriter';
import {
  FaSun,
  FaMoon,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaDownload
} from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import ProgressBar from '../components/ProgressBar';
import Footer from '../components/Footer';
import heroAnimation from '../assets/animations/hero-animation.json';

export default function GlassHome() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolvedTheme = stored || (prefersDark ? 'dark' : 'light');
    if (resolvedTheme === 'dark') document.documentElement.classList.add('dark');
    setTheme(resolvedTheme);

    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full backdrop-blur-md bg-black/30" />
          <div className="w-full h-full opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px]" />
          <Player autoplay loop src={heroAnimation} className="absolute top-0 w-full h-full opacity-10 pointer-events-none" />
        </div>

        <button
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-50 text-2xl p-2 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-white/20 transition"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-3">Hi, I’m Payal Bera</h1>
        <h2 className="text-xl text-cyan-200 mb-4">
          <Typewriter
            words={[
              'Full Stack Web Developer',
              'Blazor Enthusiast',
              'Clean Coder',
              'SQL Server Specialist',
              'Creative Problem Solver'
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 text-base font-semibold mb-14 tracking-wide">
          {[
            { label: 'About', href: '#about', icon: <FaUser className="mr-2 text-cyan-300 group-hover:animate-pulse" /> },
            { label: 'Projects', href: '#projects', icon: <FaProjectDiagram className="mr-2 text-cyan-300 group-hover:animate-ping" /> },
            { label: 'Contact', href: '#contact', icon: <FaEnvelope className="mr-2 text-cyan-300 group-hover:animate-bounce" /> }
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative group flex items-center text-white transition-all duration-300 ease-in-out hover:scale-110 hover:text-cyan-300"
            >
              <span className="flex items-center gap-2">{link.icon}{link.label}</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full shadow-cyan-500/40" />
            </a>
          ))}
          <a
            href="/payal-bera-resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 text-white font-semibold shadow-lg border border-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 hover:shadow-cyan-400/50 hover:brightness-110"
          >
            <FaDownload className="text-white animate-bounce" />
            Resume
          </a>
        </div>

        <p className="max-w-xl mx-auto text-white/80 text-center mb-12">
          I build scalable web applications using Blazor, ASP.NET, SQL Server, and modern frontend tools.
        </p>

        <div className="max-w-md mx-auto bg-white/5 text-left rounded-xl p-4 font-mono text-sm text-pink-300 shadow-inner mb-12">
          <p>const greet = () =&gt; &#123;</p>
          <p className="ml-4">console.log("Hello from Payal");</p>
          <p>&#125;;</p>
        </div>

        <GlassCard id="about" className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold mb-4">About Me</h3>
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

        <section id="projects" className="max-w-6xl mx-auto mb-12 px-2">
          <h3 className="text-2xl font-bold mb-6 text-center">🚀 Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Task Tracker',
                desc: 'Track and update tasks using Blazor, C#, SQL.',
                type: 'Blazor App'
              },
              {
                title: 'SoulSync',
                desc: 'AI-powered emotional support app with Blazor + .NET API.',
                type: 'Full Stack'
              },
              {
                title: 'My Portfolio',
                desc: 'Responsive portfolio made with React + Tailwind.',
                type: 'Frontend'
              },
              {
                title: 'Zoo Management',
                desc: 'Manage animal feed logs and zoo info using Blazor Server.',
                type: 'Blazor App'
              }
            ].map((proj, i) => (
              <GlassCard key={i} className="hover:scale-[1.02] transition">
                <p className="text-xs text-cyan-300 mb-1">{proj.type}</p>
                <h4 className="text-lg font-semibold">{proj.title}</h4>
                <p className="text-sm text-white/70">{proj.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/projects"
              className="inline-block text-sm px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur hover:bg-white/20 transition"
            >
              View Full Projects →
            </a>
          </div>
        </section>

        <GlassCard id="contact" className="text-center max-w-2xl mx-auto py-10">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-sm text-white/80 mb-4">Let’s collaborate on something great!</p>
          <div className="text-2xl animate-bounce">↑</div>
        </GlassCard>
      </main>

      <Footer />
    </div>
  );
}
