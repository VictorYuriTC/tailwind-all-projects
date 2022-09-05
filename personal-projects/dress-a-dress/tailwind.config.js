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
    },
  },
  plugins: [],
}
