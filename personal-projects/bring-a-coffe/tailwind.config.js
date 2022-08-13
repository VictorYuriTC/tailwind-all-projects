/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js, jsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
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
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(0px, 0.75px)' },
          '20%': { transform: 'rotate(12deg) translate(0px, 0px)' },
          '40%': { transform: 'rotate(-12deg)' },
          '60%': { transform: 'rotate(6deg)' },
          '80%': { transform: 'rotate(-6deg)' },
        },
      },
    },
  },
  plugins: [],
}
