// tailwind.config.ts or tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // For files inside app/
    './components/**/*.{js,ts,jsx,tsx,mdx}', // For files inside components/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}