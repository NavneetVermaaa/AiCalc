/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: '#0b1220',
        panel: '#111827',
        line: '#293548',
        accent: {
          light: '#14B8A6',
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        mint: '#10B981',
        content: {
          primary: '#F8FAFC',
          muted: '#94A3B8',
        },
        sky: '#0ea5e9',
        amber: '#f59e0b',
      },
      boxShadow: {
        clean: "0 18px 45px rgba(2, 6, 23, 0.28)"
      }
    }
  },
  plugins: []
};
