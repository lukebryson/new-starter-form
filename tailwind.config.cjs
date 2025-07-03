/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Century Gothic', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#1E3E89',
        secondary: '#9375B2',
        'secondary-dark': '#7a5e99',
        accent: '#95C7ED',
        'accent-dark': '#7bbbe2',
      },
    },
  },
  plugins: [],
}