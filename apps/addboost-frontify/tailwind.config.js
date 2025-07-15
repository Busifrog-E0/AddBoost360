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
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        garamond: ["Cormorant Garamond", "sans-serif"],
        arya: ["Arya", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      spacing: {
        14: "3.5rem", // for px-14, py-14
        20: "5rem", // for md:py-20
        24: "6rem", // for lg:py-24
        36: "9rem", // for lg:px-36
        60: "15rem", // for xl:px-60
        80: "20rem", // for 2xl:px-80
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
