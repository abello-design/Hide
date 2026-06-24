import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        "deep-charcoal": "#111111",
        "warm-dark": "#1a1209",
        "blood-amber": "#8b3a0f",
        "ember-gold": "#c97d2e",
        "pale-cream": "#e8dcc8",
        "fog-white": "#f0ece4",
        "red-dusk": "#6b1a1a",
        "muted-bronze": "#5c3d1e",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        drift: "drift 8s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-12px) scale(1.01)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
