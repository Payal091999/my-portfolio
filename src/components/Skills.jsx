import React from 'react';
import { SiDotnet } from 'react-icons/si';
import { motion } from 'framer-motion';
import sqlIcon from '../assets/icons/sqlserver.png';
import reaIcon from '../assets/icons/react.png';
import cshaIcon from '../assets/icons/csharp.png';
import dotnfIcon from '../assets/icons/dotnetframework.png';
import htmIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css3.png';
import cpIcon from '../assets/icons/cpp.png';

const skills = [
  { icon: <SiDotnet className="text-blue-700" />, label: '.NET / Blazor' },
  { icon: <img src={sqlIcon} alt="SQL Server" className="w-6 h-6" />, label: 'SQL Server' },
  { icon: <img src={reaIcon} alt="SQL Server" className="w-6 h-6" />, label: 'React' },
  { icon: <img src={cshaIcon} alt="SQL Server" className="w-6 h-6" />, label: 'C#' },
  { icon: <img src={dotnfIcon} alt="SQL Server" className="w-6 h-6" />, label: '.NET Framework' },
  { icon: <img src={htmIcon} alt="SQL Server" className="w-6 h-6" />, label: 'HTML5' },
  { icon: <img src={cssIcon} alt="SQL Server" className="w-6 h-6" />, label: 'CSS3' },
  { icon: <img src={cpIcon} alt="SQL Server" className="w-6 h-6" />, label: 'C++' },
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
