import React from 'react';
import { SiDotnet } from 'react-icons/si';
import { motion } from 'framer-motion';
import sqlIcon from '../assets/icons/sqlserver.png';
import reactIcon from '../assets/icons/react.png';
import csharpIcon from '../assets/icons/csharp.png';
import dotnetIcon from '../assets/icons/dotnetframework.png';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css3.png';
import cppIcon from '../assets/icons/cpp.png';

const skills = [
  { icon: <SiDotnet className="text-blue-700 text-5xl" />, label: '.NET / Blazor' },
  { icon: <img src={sqlIcon} alt="SQL Server" className="w-12 h-12" />, label: 'SQL Server' },
  { icon: <img src={reactIcon} alt="React" className="w-12 h-12" />, label: 'React' },
  { icon: <img src={csharpIcon} alt="C#" className="w-12 h-12" />, label: 'C#' },
  { icon: <img src={dotnetIcon} alt=".NET Framework" className="w-12 h-12" />, label: '.NET Framework' },
  { icon: <img src={htmlIcon} alt="HTML5" className="w-12 h-12" />, label: 'HTML5' },
  { icon: <img src={cssIcon} alt="CSS3" className="w-12 h-12" />, label: 'CSS3' },
  { icon: <img src={cppIcon} alt="C++" className="w-12 h-12" />, label: 'C++' },
];

export default function Skills() {
  return (
    <section className="py-16 px-4 text-center bg-gray-50 dark:bg-slate-900">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">🚀 Tech Stack</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="mb-3 hover-glow">{skill.icon}</div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
