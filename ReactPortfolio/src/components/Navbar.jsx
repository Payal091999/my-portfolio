import React from 'react';
export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-center space-x-6">
      <a href="/" className="text-blue-600 font-semibold hover:underline">Home</a>
      <a href="/about" className="text-blue-600 font-semibold hover:underline">About</a>
      <a href="/projects" className="text-blue-600 font-semibold hover:underline">Projects</a>
      <a href="/contact" className="text-blue-600 font-semibold hover:underline">Contact</a>
    </nav>
  );
}
