module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        lemon: "#ddff55",
        green: "#01D95A",
        purple: "#706fe6",
        blue: "#43A4FF",
        lightblue: "#75bcff",
        darkblue: "#3595EF",

        yellow: "#fed640",
        greyelement: "#FAFAFA",
        grey: "#f2f3f7",
        darkergrey: "#fed640c2c2c6",
        red: "#E90D0D",
      },
      backgroundColor: {
        "main-bg": "#ffffff",
        "main-dark": "#0F0F0F",
        "section-dark": "#202020",
        "button-dark": "#272727",
        "divider-dark": "#2C2C2C",
        "gray-dark": "#717171",
        "hover-dark": "#323232",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        DEFAULT: "10px",
      },

      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
};
