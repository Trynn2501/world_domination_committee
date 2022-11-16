/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'europe': ['Europe', 'cursive'],
        'montserrat': ['Montserrat', 'regular'],
        'homizio': ['Homizio', 'regular'],
      }
    },
  },
  plugins: [],
};
