// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'Frontend Developer at XYZ Corp',
    quote: 'Working with Payal was a delight. She is highly skilled and her dedication to detail truly stood out.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Rahul Mehta',
    role: 'Project Manager at ABC Ltd',
    quote: 'She consistently delivered quality code and collaborated efficiently with the entire team.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Sneha Verma',
    role: 'UX Designer at DesignFlow',
    quote: 'Payal combines creativity with technical skills. Her projects are both functional and beautiful.',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">💬 Testimonials</h2>
      
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-cyan-200 dark:border-slate-700 hover:shadow-cyan-300/50 transition-all"
          >
            <FaQuoteLeft className="text-cyan-500 text-2xl absolute -top-4 left-4 bg-white dark:bg-slate-900 p-2 rounded-full shadow-md" />
            <p className="text-slate-700 dark:text-gray-300 italic mb-4">“{item.quote}”</p>
            <div className="flex items-center space-x-4 mt-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full border-2 border-cyan-500 shadow"
              />
              <div>
                <h4 className="text-md font-semibold text-slate-800 dark:text-white">{item.name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
