/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'crystal-blue': '#0096c7',
        'dark-crystal-blue': '#0077b6',
        'light-grey': '#fafaff',
        'dark-snow': '#fefefe',
        'blurred-white': '#fcfcff',
      },
      screens: {
        'xsm': { 'max':'415px' }
      }
    },
  },
  plugins: [],
}
