import React from 'react';

export default function Resume() {
  return (
    <section
      id="resume"
      className="snap-start min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-center py-16 px-4"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        📄 My Resume
      </h2>

      {/* 🔹 Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href="/payal-bera-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition duration-300"
        >
          👁 Preview Resume
        </a>
        <a
          href="/payal-bera-resume.pdf"
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </div>

      {/* 🔹 Embedded Resume Preview */}
      <div className="w-full max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700">
        <iframe
          src="/payal-bera-resume.pdf"
          className="w-full h-[80vh]"
          title="Resume PDF Preview"
        >
          Your browser does not support PDF viewing.
        </iframe>
      </div>
    </section>
  );
}
