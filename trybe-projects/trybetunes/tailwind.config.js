/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'his-purple': '#400090',
        'her-green': '#003399'
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
