/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#fcfaf8',
        'opaque-gray': '#444444'
      },
      fontSize: {
        '2xs': '0.65rem',
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },
      screens: {
        '5xsm': '130px',
        '4xsm': '200px',
        '3xsm': '270px',
        '2xsm': '360px', 
        'xsm': '480px'
      },
      transitionDuration: {
        '10000': '10000ms'
      },
      translate: {
        'distant': '13rem'
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
