/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem',
      },
      translate: {
        'distant': '13rem'
      },
      transitionDuration: {
        '10000': '10000ms'
      },
      colors: {
        'main-bg': '#fcfaf8',
        'opaque-gray': '#444444'
      },
      screens: {
        '5xsm': '130px',
        '4xsm': '200px',
        '3xsm': '270px',
        '2xsm': '360px', 
        'xsm': '480px'
      }
    },
  },
  plugins: [],
}
