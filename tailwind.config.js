/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#8a8a8a",
          "200": "#242424",
          "300": "#1a1a1a",
          "400": "#161616",
        },
        darkgray: "#9a9a9a",
      },
      fontFamily: { outfit: "Outfit" },
      borderRadius: { "10xs": "3px" },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "37xl": "56px",
      lg: "18px",
      "13xl": "32px",
    },
  },
  corePlugins: { preflight: false },
};
