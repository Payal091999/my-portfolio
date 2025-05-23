import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
  ];

  // Detect system preference on first load
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
    <header className="bg-white dark:bg-slate-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between w-full">
        <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
          abc xyz
        </div>

        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-white"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-600 dark:text-white text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white dark:bg-slate-900">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
