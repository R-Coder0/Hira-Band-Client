/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          700: '#800000',
          900: '#4D0000',
        },
        gold: {
          500: '#FFD700',
          700: '#C5A300',
        },
      },
    },
  },
  plugins: [],
}
