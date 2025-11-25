import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#059669",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B"
        },
        charcoal: "#111827"
      },
      borderRadius: {
        "xl2": "1.25rem"
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.2)"
      }
    }
  },
  plugins: []
};
export default config;
