/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'Arial', 'sans-serif'],
      },
      screens: {
        'xs': '300px',
        'xm': '350px',
        'sm': '640px',
        'md': '768px',
        'lg': '950px',
        'xl': '1280px',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #800080, #DA70D6)', // Gradient from semi-dark to somewhat light purple
      },
    },
  },
  plugins: [],
}
