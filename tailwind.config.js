module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { xl: { max: "1280px" }, lg: { max: "1024px" },md: { max: "768px" }  },
    extend: {
      colors: {
        blue_gray: { 100: "#d0d5dd", 500: "#667085", 800: "#344054" },
        blue: { A400: "#3a71ff" },
        gray: {
          50: "#fefaf6",
          300: "#dddddd",
          900: "#101828",
          "900_0c": "#1018280c",
        },
        orange: { 800: "#db6803" },
        black: { 900: "#000000", "900_0c": "#0000000c" },
        purple: { 900: "#493083" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 1px  2px 0px #1018280c",
        bs1: "0px 4px  4px 0px #0000000c",
      },
      fontFamily: {
        worksans: "Work Sans",
        inter: "Inter",
        epilogue: "Epilogue",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
