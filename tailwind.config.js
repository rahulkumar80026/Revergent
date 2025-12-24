/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        agrandir: ["Agrandir", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "brand-red": "var(--brand-red)",
        "brand-red-accent": "var(--brand-red-accent)",
        // "brand-dark": "var(--brand-dark)",
        // "brand-light": "var(--brand-light)",
        "brand-amber": "var(--brand-amber)",
      },
      boxShadow: {
        brand: "0 10px 30px rgba(227,22,53,0.12)",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translateY(0) scale(1)" },
          "33%": { transform: "translateY(-12px) scale(1.05)" },
          "66%": { transform: "translateY(8px) scale(.95)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        blob: "blob 8s infinite",
      },
    },
  },
  plugins: [],
};
