/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Baskervville'],
        'cursive': ['"Alex Brush'],
      },
      colors: {
        green: {
          primary: '#89907C',
          dark: '#434F2B'
        },
        white: {
          DEFAULT: '#FEFEFE'
        }
      }
    },
  },
  plugins: [],
}