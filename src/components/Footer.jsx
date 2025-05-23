import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto space-y-4 sm:space-y-0">
        <p>&copy; {new Date().getFullYear()} Payal Bera. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/resume" className="hover:underline">Resume</a>
        </div>
      </div>
    </footer>
  );
}
