/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Century Gothic', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}