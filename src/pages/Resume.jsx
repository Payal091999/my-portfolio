// src/pages/Resume.jsx
import React from 'react';

export default function Resume() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 text-center py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">📄 My Resume</h2>

      {/* Two buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {/* Preview Button */}
        <a
          href="/payal-bera-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition"
        >
          👁 Preview Resume
        </a>

        {/* Download Button */}
        <a
          href="/payal-bera-resume.pdf"
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
        >
          ⬇️ Download Resume
        </a>
      </div>

      {/* Embedded PDF preview (optional, can remove if only using preview button) */}
      <div className="w-full max-w-5xl mx-auto">
        <iframe
          src="/payal-bera-resume.pdf"
          className="w-full h-[80vh] border rounded-lg shadow-md"
          title="Resume PDF Preview"
        >
          Your browser does not support iframes.
        </iframe>
      </div>
    </section>
  );
}
