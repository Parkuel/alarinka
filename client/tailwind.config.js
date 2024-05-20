/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A365D",
        bg_color: "#6C757D",
        secondary: "#B56A6A",
        accent: "#2D6A4F",
        text: "#F2F2F2",
        highlight: "#D9B964",
      }
    },
  },
  plugins: [],
}