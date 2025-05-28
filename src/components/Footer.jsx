import React from 'react';
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
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* 🔹 Right: Social Icons */}
        <div className="flex space-x-5 text-lg">
          <a href="https://linkedin.com/in/abcxyz" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Payal091999" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>
          <a href="mailto:abc@gmail.com" className="hover:text-cyan-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
