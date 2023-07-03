/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        yellow: {
          main: '#FFB300'
        },
        blue: {
          main: '#0B1B32'
        }
      }
    },
  },
  plugins: [],
}

