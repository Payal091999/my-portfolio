// src/components/SkillChart.jsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SkillChart({ value, label }) {
  return (
    <div className="w-24 h-24 relative group transition-transform duration-500 hover:scale-110">
      <CircularProgressbar
        value={value}
        text={label}
        strokeWidth={12}
        styles={buildStyles({
          textSize: '18px',
          textColor: '#ffffff',
          pathColor: '#06b6d4',           // cyan-500
          trailColor: '#1e293b',          // slate-800
          backgroundColor: '#0f172a',     // dark slate
        })}
      />

      {/* Glowing outer ring on hover */}
      <div className="absolute inset-0 rounded-full border-2 border-cyan-500 blur-sm opacity-0 group-hover:opacity-80 transition-all duration-500 animate-pulse pointer-events-none"></div>
    </div>
  );
}
