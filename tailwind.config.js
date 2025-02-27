import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          'DEFAULT': '1rem',
          'sm': '2rem',
        },
        screens: {
          'xl': '1040px',
        }
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    // require('tailwind-scrollbar'),
  ],
};
