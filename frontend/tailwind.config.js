/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#F5FAFB', // 
          100: '#EAF5F7', // light blue
          200: '#D5EFF2', // lighter blue
          300: '#C0E8ED', // light blue
          400: '#ABE2E8', // light blue
          500: '#A7D8DE', // light blue
          600: '#2b4759', // light blue
          700: '#63BFCB', // light blue
          800: '#41B2C2', // light blue
          900: '#20A6B8' // light blue
        },
      },
    },
  },
  plugins: [],
}