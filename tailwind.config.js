/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d938b',
        secondary: '#a2c515',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}