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
          100: "hsl(0deg 100% 10% 100% / <alpha-value>)",
          200: "hsl(0deg 100% 20% 100% / <alpha-value>)",
          300: "hsl(0deg 100% 30% 100% / <alpha-value>)",
          400: "hsl(0deg 100% 40% 100% / <alpha-value>)",
          500: "hsl(0deg 100% 50% 100% / <alpha-value>)",
          600: "hsl(0deg 100% 60% 100% / <alpha-value>)",
          700: "hsl(var(--color-primary) / <alpha-value>)",
          800: "hsl(0deg 100% 80% 100% / <alpha-value>)",
          900: "hsl(0deg 100% 90% 100% / <alpha-value>)",
          950: "hsl(0deg 100% 95% 100% / <alpha-value>)",
          990: "hsl(0deg 100% 99% 100% / <alpha-value>)",
        },
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        tertiary: "hsl(var(--color-tertiary) / <alpha-value>)",
      },
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
