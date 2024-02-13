/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Anton': '"Anton", sans-serif',
        'Inter': "'Inter', sans-serif",
      },
      boxShadow: {
        '7xl': '0px 0px 30px 0px #75EF8A',
        '8xl': '0px 0px 20px 0px #FFF',
      },
    },
  },
  plugins: [],
}

