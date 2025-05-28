// src/components/ThemeToggle.jsx
import { FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    setTheme(html.classList.contains('dark') ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl text-gray-700 dark:text-white hover:text-cyan-300 transition"
      title="Toggle Theme"
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
}
