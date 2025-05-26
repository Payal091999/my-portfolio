import React from 'react';

const sections = [
  { id: 'home', label: '🏠' },
  { id: 'about', label: '🙋' },
  { id: 'projects', label: '💼' },
  { id: 'contact', label: '📬' },
  { id: 'resume', label: '📄' }
];

export default function ScrollNav() {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white text-xl transition"
          title={section.id}
        >
          {section.label}
        </a>
      ))}
    </div>
  );
}
