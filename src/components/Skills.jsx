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

import SkillChart from './SkillChart';

const skills = [
  { icon: <SiDotnet className="text-blue-700 text-5xl" />, label: '.NET / Blazor', level: 85 },
  { icon: <img src={sqlIcon} alt="SQL Server" className="w-12 h-12" />, label: 'SQL Server', level: 75 },
  { icon: <img src={reactIcon} alt="React" className="w-12 h-12" />, label: 'React', level: 70 },
  { icon: <img src={csharpIcon} alt="C#" className="w-12 h-12" />, label: 'C#', level: 80 },
  { icon: <img src={dotnetIcon} alt=".NET Framework" className="w-12 h-12" />, label: '.NET Framework', level: 70 },
  { icon: <img src={htmlIcon} alt="HTML5" className="w-12 h-12" />, label: 'HTML5', level: 85 },
  { icon: <img src={cssIcon} alt="CSS3" className="w-12 h-12" />, label: 'CSS3', level: 80 },
  { icon: <img src={cppIcon} alt="C++" className="w-12 h-12" />, label: 'C++', level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 text-center bg-white dark:bg-slate-900">
      <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">🚀 Tech Stack</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center bg-white/10 dark:bg-white/5 rounded-xl shadow-lg p-6 backdrop-blur-md border border-white/20 dark:border-slate-700 transition"
          >
            <div className="mb-3">{skill.icon}</div>
            <SkillChart value={skill.level} label={`${skill.level}%`} />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-100 mt-2">{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
