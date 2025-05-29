import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  FaCogs,
  FaBriefcase,
  FaCertificate,
  FaPenFancy,
  FaHome,
  FaComments,
  FaRobot
} from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Skills', path: '/skills', icon: <FaCogs /> },
    { name: 'Experience', path: '/experience', icon: <FaBriefcase /> },
    { name: 'Certifications', path: '/certifications', icon: <FaCertificate /> },
    { name: 'Testimonials', path: '/testimonials', icon: <FaComments /> },
    { name: 'AI Assistant', path: '/ai', icon: <FaRobot /> },
    { name: 'Blog', path: 'https://dev.to/payalbera', icon: <FaPenFancy />, external: true },
  ];

  return (
    <>
      <header className="bg-white dark:bg-slate-900 shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
            Payal Bera
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition transform hover:scale-110"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center space-x-2 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition transform hover:scale-110 ${
                      location.pathname === link.path ? 'text-blue-600 dark:text-cyan-400 font-semibold' : ''
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                )
              ))}
            </nav>

            <ThemeToggle />

            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-600 dark:text-white text-2xl">
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white dark:bg-slate-900">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition transform hover:scale-105"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center space-x-2 text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition transform hover:scale-105 ${
                      location.pathname === link.path ? 'text-blue-600 dark:text-cyan-400 font-semibold' : ''
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
