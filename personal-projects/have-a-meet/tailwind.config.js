/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'crystal-blue': '#0096c7',
        'dark-crystal-blue': '#0077b6',
        'light-grey': '#fafaff',
        'dark-snow': '#edf2fb'
      },
      screens: {
        'xsm': { 'max':'400px' }
      }
    },
  },
  plugins: [],
}
