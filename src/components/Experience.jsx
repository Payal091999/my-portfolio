// src/components/Experience.jsx
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: "IT Associate",
    company: "Aisshpra Gems & Jewels",
    date: "Jan 2024 – Present",
    location: "Gorakhpur, UP",
    description: "Handled IT application systems, coordinated digital signage implementation, and ensured smooth inter-department tech support.",
  },
  {
    title: "MCA Internship",
    company: "Narula Institute of Technology",
    date: "July 2023 – Dec 2023",
    location: "Kolkata, WB",
    description: "Worked on mini-projects using ASP.NET and Blazor. Assisted in SQL and system analysis.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <FaBriefcase className="text-cyan-400" />
          Experience
        </h2>

        <div className="space-y-10 border-l-4 border-cyan-500 pl-6 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <span className="absolute -left-[10px] top-1 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-900 shadow-md" />
              <div className="mb-1 text-lg font-semibold text-cyan-300">{exp.title}</div>
              <div className="text-sm text-gray-300">
                <span className="font-medium">{exp.company}</span> – {exp.location}
              </div>
              <div className="text-xs text-gray-400 mb-2">{exp.date}</div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
