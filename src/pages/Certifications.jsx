import React from 'react';
import PageTemplate from './PageTemplate';

export default function Certifications() {
  const certifications = [
    {
      title: "Full Stack Web Development",
      organization: "FreeCodeCamp",
      date: "2024",
      description: "Completed full stack development certification"
    }
    // Add more certifications
  ];

  return (
    <PageTemplate title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-400 mb-2">{cert.organization}</p>
            <p className="text-sm text-gray-400">{cert.date}</p>
            <p className="text-sm mt-2">{cert.description}</p>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
