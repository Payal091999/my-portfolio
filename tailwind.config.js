/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        pulseSlow: 'pulse 4s infinite',
      }
    },
  },
  plugins: [],
};
