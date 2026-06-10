/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0099FF",
          secondary: "#0B1120",
          accent: "#1E293B",
          background: "#050816",
          surface: "rgba(15, 23, 42, 0.78)",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0, 153, 255, 0.2), 0 20px 80px rgba(0, 153, 255, 0.18)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.18) 1px, transparent 0)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
