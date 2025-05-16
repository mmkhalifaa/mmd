/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#002D72',
          light: '#1A3F7D',
          lighter: '#2A4883'
        },
        teal: {
          DEFAULT: '#00A3E0',
          dark: '#0082B3'
        },
        'light-gray': '#F5F6F7'
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};