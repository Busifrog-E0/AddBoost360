/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#19437D",
        primaryDark: "#0B2A53",
        lightgray: "#C8C8C8",
        dangerRed: "#FF0004",
        pastelpink: "#F4F1F2",
        grey: "#787878",
        lightblack: "#262626",
        PrimaryDarkBlue: "#00203C",
        PrimaryWhite: "#F4F4F4",
      },
      backgroundImage: {
        BackgroundGradientleft: "linear-gradient(to left, #00203C, #04406C)",
        BackgroundGradientright: "linear-gradient(to right, #00203C, #04406C)",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        garamond: ["Cormorant Garamond", "sans-serif"],
        arya: ["Arya", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      spacing: {
        14: "3.5rem",
        20: "5rem",
        24: "6rem",
        36: "9rem",
        60: "15rem",
        80: "20rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, // half, for seamless loop
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite", // slower continuous scroll
      },
    },
  },
  plugins: [],
};
