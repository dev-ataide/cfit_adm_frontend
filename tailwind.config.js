/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cfit_purple: '#A71198',
        cfit_purpledark: '#841179',
        cfit_title: '#6B6B6B',
        cfit_greenbuton : '#2ED47A',
        cfit_redbuton : '#FF0010',
        cfit_gray: '#C2CFE0'
      },
    },
  },
  plugins: [],
};



