import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Ваш золотой цвет
        gold: "#D4AF37",
        muted: "#888888",
        "background-light": "#f8f6f6",
        "background-dark": "#221610",
      },
      fontFamily: {
        // Добавляем все шрифты, которые используем в проекте
        sans: ["'Public Sans'", "sans-serif"],
        display: ["'Bodoni Moda'", "serif"],
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        bounce: "bounce 1s infinite",
        'loading-bar': 'loading-bar 1.5s infinite linear',
        'bounce-in': 'bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.5) translateY(20px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;