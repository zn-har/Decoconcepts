import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        surface: "#131313",
        "surface-bright": "#393939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1b1c1c",
        "surface-container": "#1f2020",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353535",
        "on-surface": "#e4e2e1",
        "on-surface-variant": "#c4c7c8",
        primary: "#ffffff",
        "on-primary": "#2f3131",
        secondary: "#c8c6c5",
        "on-secondary": "#313030",
        outline: "#8e9192",
        "outline-variant": "#444748",
        laterite: "#b85834",
        "laterite-dark": "#8a3c20",
        teak: "#8c5636",
        brass: "#d4af37",
        terracotta: "#c86444",
        "black-oxide": "#111213",
      },
      spacing: {
        "margin-mobile": "24px",
        "margin-desktop": "64px",
        "container-max": "1440px",
        gutter: "32px",
        unit: "8px",
      },
      fontFamily: {
        bodoni: ["var(--font-bodoni)", "serif"],
        hanken: ["var(--font-hanken)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        full: "0px",
      },
    },
  },
  plugins: [],
};

export default config;
