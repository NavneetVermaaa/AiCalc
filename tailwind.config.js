/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#080b12",
        panel: "#0e1420",
        line: "#223044",
        mint: "#52f0b8",
        sky: "#67d8ff",
        amber: "#f8bf55"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(82, 240, 184, 0.14)"
      }
    }
  },
  plugins: []
};
