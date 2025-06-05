import React from 'react';
import { motion } from 'framer-motion';

export default function PageTemplate({ children, title }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 md:p-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
        {title}
      </h1>
      {children}
    </motion.div>
  );
}
