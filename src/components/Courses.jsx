import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/courses')
      .then(res => setCourses(res.data));
  }, []);

  return (
    <section className="bg-gray-50 rounded-xl p-6 md:p-10 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course._id} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{course.title}</h3>

            <div className="flex items-center gap-2 mb-3">
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-blue-500 h-2.5 transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <span className="text-sm text-gray-600">{course.progress}%</span>
            </div>

            <p className="text-sm text-gray-500 mb-1">
              <span className="font-medium">Duration:</span> {course.startDate} to {course.endDate}
            </p>
            <p
              className={`text-sm font-semibold ${
                course.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
              }`}
            >
              {course.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
