/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],

  theme: {
    extend: {
      colors: {
        primarytext: "#1B5A7D",
        lightblue: "#316887",
        bgprimary: "#eda415",
        partialcolor: "#003f62",
        lightgray: "#4a4a4a",
        filterlablecolor: "#222222",
        addtext: "#2e8fc5",
        container: "#E2F4FF",
        circleround: "#ADADAD",
        bordercol: "#A5A5A5",
        bordercol1: "#B6B6B6",
        border2: "#DFDFDF",
        btnbg: "#87BCD9",
        darkgray: "#2F2F2F",
        thead: "#E2F4FF",
        bgdark: "#434343",
        darkblack: "#232323",
        brown: "#C33131",
        // Add more custom colors as needed
      },
      screens: {
        xx: { min: "300px", max: "640px" },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
