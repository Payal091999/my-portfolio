import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 70 }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'Docker', level: 75 }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md"
        >
          <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
          <div className="space-y-4">
            {category.items.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-gray-400">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
