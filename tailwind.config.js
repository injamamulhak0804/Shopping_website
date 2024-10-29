/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        volkhov: ["Volkhov", "serif"]
      },
      textStroke: {
        black: '1px black', // You can adjust the color and width here
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke-width': '0.4px',
          '-webkit-text-stroke-color': 'black',
        },
      });
    },
  ],
}