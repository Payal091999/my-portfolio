import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#resume' },
  ];

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    setTheme(html.classList.contains('dark') ? 'dark' : 'light');
  };

  return (
    <>
      <header className="bg-white dark:bg-slate-900 shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* 🔹 Logo or Name */}
          <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
            Payal Bera
          </div>

          <div className="flex items-center space-x-4">
            {/* 🔹 Desktop Nav Links */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* 🔹 Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-xl text-gray-700 dark:text-white"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            {/* 🔹 Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-blue-600 dark:text-white text-2xl">
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Mobile Menu Drawer */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white dark:bg-slate-900">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* 🔹 Floating Scroll Snap Dots (Right Side) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-4 hidden md:flex flex-col">
        {['home', 'about', 'projects', 'contact', 'resume'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="w-4 h-4 rounded-full bg-gray-400 hover:bg-blue-500 transition transform hover:scale-125 border-2 border-white dark:border-slate-800"
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          />
        ))}
      </div>
    </>
  );
}
