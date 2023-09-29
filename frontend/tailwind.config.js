/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-serif": ['"Roboto Serif"', "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],
};
