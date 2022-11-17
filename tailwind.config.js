/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.tsx'],
  daisyui: {
    themes: ['bumblebee'],
  },
  plugins: [require('daisyui')],
}
