import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SkillChart({ value, label }) {
  return (
    <div className="w-24 h-24">
      <CircularProgressbar
        value={value}
        text={label}
        styles={buildStyles({
          textSize: "16px",
          textColor: "#ffffff",
          pathColor: "#06b6d4",       // Main color of progress
          trailColor: "#ffffff22"     // Background trail
        })}
      />
    </div>
  );
}
