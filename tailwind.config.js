/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'other-blue': '#0e142f',
      },
      height: {
        '850px': '850px',
      }
    },
  },
  plugins: [require("daisyui")],
}