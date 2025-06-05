import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import './Layout.css';

import GlassHome from '../pages/GlassHome';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Skills from './Skills';
import Experience from './Experience';
import Certifications from './Certifications';
import Testimonials from './Testimonials';
import AISection from './AISection';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<GlassHome />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="ai" element={<AISection />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
