/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
      },
      margin: {
        '1/2': '50%',
        '1/3': '33.33%',
        '3/20': '15%',
      },
      padding: {
        '1/2': '50%',
        '1/3': '33.33%',
      }
    },
  },
  plugins: [],
}

