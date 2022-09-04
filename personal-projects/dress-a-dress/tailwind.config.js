/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        'distant': '16.5rem'
      },
      transitionDuration: {
        '10000': '10000ms'
      }
    },
  },
  plugins: [],
}
