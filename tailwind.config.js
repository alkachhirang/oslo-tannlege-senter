/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#606060",
        lightGrey: "#333333",
        sky: "#77C7C9",
        lightSky: "#39B0B5",
        pink: "#FF6499",
      },
      lineHeight: {
        "3md":"138%",
      },

    },
  },
  plugins: [],
}

