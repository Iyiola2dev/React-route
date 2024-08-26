/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      aeoniik_light: ["Aeonik-light", "sans-serif"],
      aeoniik_regular: ["Aeonik-regular", "sans-serif"],
      aeoniik_bold: ["Aeonik-bold", "sans-serif"],
    },
  },
  plugins: [],
};
