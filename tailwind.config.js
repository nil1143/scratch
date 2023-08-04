/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        first: '#61892F', // darkgreen
        second: '#86C232', // green
        third: '#222629', // dark
        fourth: '#474B4F', // gray
        fifth: '#6B6E70' // silver
      },
      fontFamily: {
        inconsolata: ['"Inconsolata"', 'monospace'],
        rajdhani: ['"Rajdhani"', 'sans-serif'],
        ysabeau1: ['"Ysabeau Office"', 'sans-serif'],
        ysabeau2: ['"Ysabeau SC"', 'sans-serif']
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.first')",
        neon2: "5px 0 30px 5px theme('colors.first')"
      }
    },
  },
  plugins: [],
}

