import React from 'react';
import PageTemplate from './PageTemplate';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      title: "Full Stack Web Development",
      organization: "freeCodeCamp",
      date: "2024",
      description: "Completed a comprehensive program covering front-end, back-end, and database integration.",
      link: "https://freecodecamp.org/certification/payalbera/full-stack"
    },
    {
      title: "React Developer",
      organization: "Udemy",
      date: "2023",
      description: "Advanced React and Redux course",
      link: "https://udemy.com/certificate/UC-1234567890"
    },
    {
      title: "JavaScript",
      organization: "Codecademy",
      date: "2023",
      description: "JavaScript course completion",
      link: "https://codecademy.com/certification/javascript"
    },
    {
      title: "MongoDB",
      organization: "MongoDB University",
      date: "2023",
      description: "Completed MongoDB for Developers course",
      link: "https://university.mongodb.com/course_completion/123456"
    }
  ];

  return (
    <PageTemplate title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-gray-400 mb-2">{cert.organization}</p>
                <p className="text-sm text-gray-400">{cert.date}</p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition"
                >
                  View Certificate
                </a>
              )}
            </div>
            <p className="text-gray-300">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </PageTemplate>
  );
}
