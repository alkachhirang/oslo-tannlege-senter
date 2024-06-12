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
        md: "100%",
        "3md": "138%",

      },
      fontSize: {
        "4md": "40px",
        "6lg": "60px",

      },

    },
  },
  plugins: [],
}

