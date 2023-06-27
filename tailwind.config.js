/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

