/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js, jsx}"],
  theme: {
    extend: {
      scale: {
        '101': '1.01',
        '102': '1.02',
      },
      colors: {
      'coffee': '#411d13',
      'cappuccino': '#c3a995',
      'espresso': '#ede0d4'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-12deg)'},
            '50%': { transform: 'rotate(12deg)'},
        }
      }
    },
  },
  plugins: [],
}
