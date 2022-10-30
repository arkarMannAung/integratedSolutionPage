/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins"],
      },
      colors: {
        'dash-dark': '#f4dfcc',
        'silver-gray': '#2d2e32',
      },
      width: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem',
        '184': '46rem',
        '208': '52rem',
      },
      height: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem',
        '184': '46rem',
        '208': '52rem',
      },
      padding: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
      },
      fontSize: {
        'x11': '0.6875rem',
        'x10': '0.625rem',
        'x9': '0.5625rem',
        'x8': '0.5rem',
        'x7': '0.4375rem',
        'x6': '0.375rem',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '14rem',
          '3xl': '16rem',
        },
      },
    },
  },
  plugins: [
  ],
}
