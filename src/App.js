import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Testimonials from './pages/Testimonials';
import AiAssistant from './pages/AiAssistant';
import CoursesPage from './pages/CoursesPage';
import AdminCoursesPage from './pages/AdminCoursesPage';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/ai" element={<AiAssistant />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/admin/courses" element={<AdminCoursesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
