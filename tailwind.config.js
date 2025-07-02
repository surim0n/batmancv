/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        batYellow: {
          DEFAULT: '#eab308', // yellow-500
          300: '#facc15' // yellow-400
        }
      }
    }
  },
  plugins: []
};
