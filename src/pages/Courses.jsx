import React from 'react';
import PageTemplate from './PageTemplate';
import { motion } from 'framer-motion';

export default function Courses() {
  const courses = [
    {
      title: "Course Name 1",
      progress: 80,
      status: "In Progress",
      startDate: "2025-01",
      endDate: "2025-06"
    },
    // Add more courses as needed
  ];

  return (
    <PageTemplate title="Courses & Learning Updates">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <div className="flex items-center mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <span className="ml-2">{course.progress}%</span>
            </div>
            <p className="text-sm text-gray-400">
              {course.startDate} - {course.endDate}
            </p>
            <p className="text-sm text-green-400 font-medium">{course.status}</p>
          </motion.div>
        ))}
      </div>
    </PageTemplate>
  );
}
