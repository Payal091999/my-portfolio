import React from 'react';
import PageTemplate from './PageTemplate';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions",
      duration: "2023 - Present",
      description: "Working as a full-stack developer specializing in React and Node.js",
      highlights: [
        "Developed and maintained web applications",
        "Implemented new features and improvements",
        "Collaborated with cross-functional teams"
      ]
    },
    {
      title: "Junior Developer",
      company: "WebTech",
      duration: "2022 - 2023",
      description: "Started my career as a junior developer",
      highlights: [
        "Learned web development",
        "Worked on multiple projects",
        "Improved coding skills"
      ]
    }
  ];

  return (
    <PageTemplate title="Experience">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">{exp.duration}</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">{exp.description}</p>
              <div className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <p key={hIndex} className="text-sm text-gray-400">
                    <span className="text-cyan-400">•</span> {highlight}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageTemplate>
  );
}
