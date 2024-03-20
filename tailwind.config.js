/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cg-black': '#212121',
        'cg-green': '#14B67B',
        'cg-red': '#D65745',
        'cg-yellow': '#EAC645',
        'cg-blue': '#5296D5',
        'cg-green-secondary': '#1cc88a',
        'cg-blue-light': '#36b9cc',
      },
      fontFamily: {
        'roboto-regular': 'Roboto_400Regular',
        'roboto-bold': 'Roboto_700Bold',
      }
    },
  },
  plugins: [],
}

