import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-6 py-10 bg-transparent text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-md text-center max-w-xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Contact</h3>
        <p className="text-sm text-white/80 mb-4">Let’s collaborate on something great!</p>
        <div className="text-2xl animate-bounce">↑</div>
      </div>
    </motion.section>
  );
}
