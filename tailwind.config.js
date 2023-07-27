/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notokr: ["var(--font-noto-sans-kr)"],
      },
      colors: {
        primary: {
          100: "#330000",
          200: "#660000",
          300: "#990000",
          400: "#cc0000",
          500: "#ff0000",
          600: "#ff3333",
          700: "var(--color-primary)",
          800: "#ff9999",
          900: "#ffcccc",
          950: "#ffe5e5",
          990: "#fffafa",
        },
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
      },
    },
    gridTemplateRows: {
      layout: "auto minmax(0, 1fr) auto",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/line-clamp"),
  ],
};
