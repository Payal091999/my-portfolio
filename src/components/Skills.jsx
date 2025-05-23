import React from 'react';
import { FaCode, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { motion } from 'framer-motion';
import sqlIcon from '../assets/icons/sqlserver.png';


const skills = [
  { icon: <FaCode className="text-xl text-purple-600" />, label: 'C#' },
  { icon: <SiDotnet className="text-blue-700" />, label: '.NET / Blazor' },
  { icon: <img src={sqlIcon} alt="SQL Server" className="w-6 h-6" />, label: 'SQL Server' },
  { icon: <FaHtml5 className="text-orange-600" />, label: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-500" />, label: 'CSS3' },
  { icon: <FaReact className="text-cyan-500" />, label: 'React' },
];

export default function Skills() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <span className="text-sm">{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
