/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#111A63", ink: "#0C1347", tint: "#E7E9F4" },
        beige: { DEFAULT: "#D2C2B2", soft: "#EDE4DB" },
        paper: "#F8F8F8",
        ink: "#121212",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        accent: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        arabic: ["Tajawal", "sans-serif"],
      },
      borderRadius: { xl2: "1.25rem" },
    },
  },
  plugins: [],
};
