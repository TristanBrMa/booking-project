/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      cursor: {
        none: "none",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
      megrim: ["Megrim"],
    },
    fontSize: {
      custom: "4px",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F1F7ED",
          secondary: "#7CA982",
          accent: "#243E36",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
