import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle'; // ✅ Import here

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home1', href: '#home' },
    { name: 'About1', href: '#about' },
    { name: 'Projects1', href: '#projects' },
    { name: 'Contact1', href: '#contact' },
    { name: 'Resume1', href: '#resume' },
  ];

  return (
    <>
      <header className="bg-white dark:bg-slate-900 shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* 🔹 Logo */}
          <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
            Payal Bera
          </div>

          <div className="flex items-center space-x-4">
            {/* 🔹 Desktop Links */}
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
            <ThemeToggle /> {/* ✅ Used here */}

            {/* 🔹 Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-600 dark:text-white text-2xl">
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Mobile Drawer */}
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

      {/* 🔹 Scroll Snap Dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-4 hidden md:flex flex-col">
        {['home', 'about', 'projects', 'resume','contact'].map((section) => (
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
