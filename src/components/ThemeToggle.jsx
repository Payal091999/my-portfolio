import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-xl text-gray-700 dark:text-white hover:text-cyan-300 transition"
      title="Toggle Theme"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
}
