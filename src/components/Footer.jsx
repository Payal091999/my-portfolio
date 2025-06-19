import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-6 py-8 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* 🔹 Left: Name & Year */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-cyan-400">Payal Bera</span>. All rights reserved.
        </div>

        {/* 🔹 Center: Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link to="/skills" className="hover:text-cyan-400 transition">Skills</Link>
          <Link to="/experience" className="hover:text-cyan-400 transition">Experience</Link>
          <Link to="/certifications" className="hover:text-cyan-400 transition">Certifications</Link>
          <Link to="/testimonials" className="hover:text-cyan-400 transition">Testimonials</Link>
          <Link to="/ai" className="hover:text-cyan-400 transition">AI Assistant</Link>
        </div>

        {/* 🔹 Right: Social Icons */}
        <div className="flex space-x-5 text-lg">
          <a href="https://linkedin.com/in/payalbera" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Payal091999" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>
          <a href="mailto:payalbera@example.com" className="hover:text-cyan-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
