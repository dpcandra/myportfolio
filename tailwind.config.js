/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary : "#a78bfa",
          primaryHighlight: "#5b21b6",
          body: "#08090d",
          bodyLight: "#13151a"
      }
    },
  },
  plugins: [],
}