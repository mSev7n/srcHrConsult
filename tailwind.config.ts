import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        navy: {
          50: "#eef2fb",
          100: "#d6e0f3",
          200: "#aec0e6",
          300: "#7f9bd6",
          400: "#4f6fb8",
          500: "#2e4a90",
          600: "#1e3570",
          700: "#152858",
          800: "#0f1d40",
          900: "#0a1330",
          950: "#050a1c",
        },
        ink: "#0a0e1a",
        paper: "#fbfbfd",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(10, 19, 48, 0.08), 0 8px 24px -8px rgba(10, 19, 48, 0.10)",
        card: "0 1px 2px rgba(10,19,48,0.06), 0 12px 32px -12px rgba(10,19,48,0.14)",
        "glow-navy": "0 20px 60px -20px rgba(21, 40, 88, 0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(251,251,253,1) 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
