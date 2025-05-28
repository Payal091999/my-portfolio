// src/components/ProgressBar.jsx
import React from 'react';

export default function ProgressBar({ label, value }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm text-white/80 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div
          className="bg-cyan-400 h-2 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
