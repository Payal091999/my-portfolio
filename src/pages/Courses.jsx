import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageTemplate from './PageTemplate';
import { motion } from 'framer-motion';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/courses');
        setCourses(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <PageTemplate title="Courses & Learning Updates">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </PageTemplate>
    );
  }

  if (error) {
    return (
      <PageTemplate title="Courses & Learning Updates">
        <div className="p-6 text-red-500">{error}</div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Courses & Learning Updates">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course._id || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
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
            <p className={`text-sm font-medium ${course.status === "Completed" ? 'text-green-400' : 'text-yellow-400'}`}>
              {course.status}
            </p>
          </motion.div>
        ))}
      </div>
    </PageTemplate>
  );
}
