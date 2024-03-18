/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cg-black': '#212121',
        'cg-green': '#14B67B',
      },
    },
  },
  plugins: [],
}

