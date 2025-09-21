/** @type {import('tailwindcss').Config} */
module.exports = {
 // tailwind.config.js
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",     // For App Router
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // For components
  ],
  // ... rest of config
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
