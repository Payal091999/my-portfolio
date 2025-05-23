import React from 'react';

export default function Resume() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold text-blue-600">Resume</h2>
      
      <p className="mt-4 text-gray-700">
        You can download my resume from the link below.
      </p>

      <a
        href="/Payal_Bera_Resume.pdf"
        download
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300"
      >
        📄 Download Resume
      </a>
    </div>
  );
}

