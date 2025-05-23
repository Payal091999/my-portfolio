import React from 'react';

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">My Resume</h1>
      <a
        href="/Payal_Bera_Resume.pdf"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300"
      >
        📄 Download Resume
      </a>
    </div>
  );
}
