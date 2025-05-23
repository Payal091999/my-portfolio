// src/pages/Resume.jsx
import React from 'react';

export default function Resume() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 text-center py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">📄 My Resume</h2>

      <div className="mb-6">
        <a
          href="/abcxyz_resume.pdf"
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
        >
          ⬇️ Download Resume (PDF)
        </a>
      </div>

      <iframe
        src="/abcxyz_resume.pdf"
        className="w-full h-[80vh] border rounded-lg shadow-md"
        title="Resume Preview"
      ></iframe>
    </section>
  );
}
