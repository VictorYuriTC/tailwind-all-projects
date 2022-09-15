/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        '2/3': '66.66667%',
      },
      colors: {
        'his-purple': '#400090',
        'her-green': '#158b7a',
        'dark-gray': '#2f2f2f',
        'light-gray': '#444444'
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
