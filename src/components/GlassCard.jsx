import React from 'react';
// src/components/Hero.jsx

export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
