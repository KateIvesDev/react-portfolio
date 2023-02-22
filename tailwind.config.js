/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'fira': ['Fira Code'],
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in forwards'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0},
          "100%": { opacity: 1}
        }
      },
    },
    variants: {
      animation: ["motion-safe"]
    }
  },
  plugins: [ require('tailwind-dracula')(),],
}
