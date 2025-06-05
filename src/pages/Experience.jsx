import React from 'react';
import PageTemplate from './PageTemplate';
import Timeline from '../components/Timeline';

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Your Company",
      duration: "2023 - Present",
      description: "Working as a full-stack developer specializing in React and Node.js",
      highlights: [
        "Developed and maintained web applications",
        "Implemented new features and improvements",
        "Collaborated with cross-functional teams"
      ]
    }
    // Add more experiences
  ];

  return (
    <PageTemplate title="Experience">
      <div className="space-y-8">
        <Timeline experiences={experiences} />
      </div>
    </PageTemplate>
  );
}
