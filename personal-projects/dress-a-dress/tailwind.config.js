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
        'main-bg': '#f8f8f8',
        'opaque-gray': '#444444'
      },
      screens: {
        '5xsm': [
          { 'max': '200px'},
        ],
        '4xsm': [
          { 'min': '200px', 'max': '270px' },
        ],
        '3xsm': [
          { 'min': '270px', 'max': '360px' },
        ],
        '2xsm': [
          { 'min': '360px', 'max': '480px' }
        ],
        'xsm': [
          { 'min': '480px', 'max': '640px' }
        ]
      }
    },
  },
  plugins: [],
}
