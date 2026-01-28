import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2563eb", // Blue-600
        "primary-dark": "#1d4ed8", // Blue-700
        "background-light": "#eff6ff", // Blue-50
        "background-dark": "#0f172a", // Slate-900
        "text-light": "#0f172a", // Slate-900
        "text-dark": "#f1f5f9", // Slate-100
        "surface-light": "#ffffff",
        "surface-dark": "#1e293b", // Slate-800
        "text-sec-light": "#64748b", // Slate-500
        "text-sec-dark": "#94a3b8", // Slate-400
      },
      fontFamily: {
        "display": ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
