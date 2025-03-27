import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // Heroui
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1024px",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        "work-sans": ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
};
