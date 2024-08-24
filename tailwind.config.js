/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gainsboroGreen: '#B4E380',
        maingreen:'#73BBA3',
        yellowno:'#FFDE4D',
      },
    },
  },
  plugins: [],
}