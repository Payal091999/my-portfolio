import React, { useEffect, useState } from 'react';

const sections = ['home', 'about', 'projects', 'resume', 'contact'];

export default function SideNav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition && (el.offsetTop + el.offsetHeight) > scrollPosition) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
      {sections.map((sec) => (
        <a
          key={sec}
          href={`#${sec}`}
          className={`block w-3 h-3 rounded-full transition-all duration-300 ${
            active === sec ? 'bg-blue-500 scale-125 shadow-md' : 'bg-gray-400'
          }`}
          title={sec.charAt(0).toUpperCase() + sec.slice(1)}
        ></a>
      ))}
    </div>
  );
}
