/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['"Archivo Black"', 'sans-serif'],
        'fira-sans': ['"Fira Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}