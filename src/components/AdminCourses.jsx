import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'my_courses';
const ADMIN_PASSWORD = 'admin123'; // Change this for your use

export default function AdminCourses() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ title: '', progress: 0, status: '', startDate: '', endDate: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCourses(parsed);
        }
      } catch (e) {
        console.error('Error parsing saved courses:', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(courses));
    } catch (e) {
      console.error('Error saving courses:', e);
    }
  }, [courses]);

  // Admin login handler
  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setPasswordInput('');
    } else {
      alert('Incorrect password');
      setPasswordInput('');
    }
  };

  // Course form handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...courses];
      updated[editingIndex] = form;
      setCourses(updated);
      setEditingIndex(null);
    } else {
      setCourses([...courses, form]);
    }
    setForm({ title: '', progress: 0, status: '', startDate: '', endDate: '' });
  };

  const handleEdit = (index) => {
    setForm(courses[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      const updated = courses.filter((_, i) => i !== index);
      setCourses(updated);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="p-4 max-w-sm mx-auto bg-white/10 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          className="w-full p-2 mb-2 bg-white/10 border rounded"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 p-4 rounded shadow">
        <h2 className="text-lg font-bold">Add / Edit Course</h2>
        <input 
          name="title" 
          value={form.title} 
          onChange={handleChange} 
          placeholder="Course Title" 
          className="w-full p-2 rounded bg-white/10" 
          required 
        />
        <input 
          name="progress" 
          type="number" 
          value={form.progress} 
          onChange={handleChange} 
          placeholder="Progress (%" 
          className="w-full p-2 rounded bg-white/10" 
          required 
          min="0" 
          max="100"
        />
        <select 
          name="status" 
          value={form.status} 
          onChange={handleChange} 
          className="w-full p-2 rounded bg-white/10" 
          required
        >
          <option value="">Select Status</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <input 
          name="startDate" 
          type="month" 
          value={form.startDate} 
          onChange={handleChange} 
          className="w-full p-2 rounded bg-white/10" 
          required 
        />
        <input 
          name="endDate" 
          type="month" 
          value={form.endDate} 
          onChange={handleChange} 
          className="w-full p-2 rounded bg-white/10" 
          required 
        />
        <button 
          type="submit" 
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {editingIndex !== null ? 'Update' : 'Add'} Course
        </button>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-white/10 p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-1">{course.title}</h3>
            <p>Progress: {course.progress}%</p>
            <p>Status: {course.status}</p>
            <p>{course.startDate} – {course.endDate}</p>
            <div className="flex gap-2 mt-2">
              <button 
                onClick={() => handleEdit(index)} 
                className="px-2 py-1 bg-yellow-500 rounded text-white"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(index)} 
                className="px-2 py-1 bg-red-500 rounded text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
