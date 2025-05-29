// src/components/Certifications.jsx
import React from 'react';
import { FaCertificate, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'PHP & MySQL Industrial Training',
    issuer: 'XYZ Institute of Technology',
    icon: <FaCertificate className="text-yellow-400 text-3xl" />,
    year: '2023',
  },
  {
    title: 'Problem Solving Through Programming in C',
    issuer: 'NPTEL – IIT Madras',
    icon: <FaUniversity className="text-green-400 text-3xl" />,
    year: '2022',
  },
  {
    title: 'A Crash Course in Data Science',
    issuer: 'Coursera – Johns Hopkins University',
    icon: <FaUniversity className="text-purple-400 text-3xl" />,
    year: '2021',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 text-center bg-gray-50 dark:bg-slate-900">
      <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">📜 Certifications</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700"
          >
            <div className="shrink-0">{cert.icon}</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-cyan-300">{cert.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
              <span className="text-xs text-gray-500 dark:text-gray-400">{cert.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
