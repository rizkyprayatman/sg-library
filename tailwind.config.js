/** @type {import('tailwindcss').Config} */
export default {
  variants: {
    tableLayout: ['responsive', 'hover', 'focus'],
  },
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}