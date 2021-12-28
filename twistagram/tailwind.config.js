module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      width: {
        '40-r': '40rem',
        '35-r': '35rem',
        '30-r': '30rem'
      },
      height: {
        '40-r': '40rem',
        '35-r': '35rem',
        '30-r': '30rem'
      }
    },
  },
  plugins: [],
}