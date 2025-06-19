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
          textColor: 'var(--text-color)',
          pathColor: 'var(--primary-color)',
          trailColor: 'var(--bg-color)',
          backgroundColor: 'var(--bg-color)',
        })}
      />

      {/* Glowing outer ring on hover */}
      <div className="absolute inset-0 rounded-full border-2 border-cyan-400 dark:border-cyan-500 blur-sm opacity-0 group-hover:opacity-80 transition-all duration-500 animate-pulse pointer-events-none"></div>
    </div>
  );
}
