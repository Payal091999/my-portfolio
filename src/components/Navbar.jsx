import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-2 md:space-y-0">
      <Link to="/" className="text-blue-600 font-semibold hover:underline">Home</Link>
      <Link to="/about" className="text-blue-600 font-semibold hover:underline">About</Link>
      <Link to="/projects" className="text-blue-600 font-semibold hover:underline">Projects</Link>
      <Link to="/contact" className="text-blue-600 font-semibold hover:underline">Contact</Link>
      <Link to="/resume" className="text-blue-600 font-semibold hover:underline">Resume</Link>
    </nav>
  );
}
