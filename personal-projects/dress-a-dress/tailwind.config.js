/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        'distant': '13rem'
      },
      transitionDuration: {
        '10000': '10000ms'
      },
      fontFamily: {
        'Poppins': 'Poppins'
      },
      colors: {
        'main-bg': '#f8f8f8',
        'opaque-gray': '#444444'
      },
      screens: {
        '3xsm': [
          { 'max': '359px' },
        ],
        '2xsm': [
          { 'min': '360px', 'max': '479px' }
        ],
        'xsm': [
          { 'min': '480px', 'max': '639px' }
        ]
      }
    },
  },
  plugins: [],
}
