import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      colors: {
        // navy palette — deepest at 950, lightest at 50
        ink: {
          950: "#000c32", // rgb(0, 12, 50)
          900: "#06143f",
          800: "#0c1c4a",
          700: "#18234b", // rgb(24, 35, 75)
          600: "#1f2c5e",
          500: "#2a3a78",
          400: "#4a5a98",
          300: "#8693c0",
          200: "#b8c2dc",
          100: "#dde3f0",
          50: "#f4f6fb",
        },
        // mint accent — derived from rgb(128, 214, 151)
        mint: {
          700: "#3fa05c",
          600: "#5cbf78",
          500: "#80d697", // rgb(128, 214, 151)
          400: "#a3e3b3",
          300: "#c2edcd",
          200: "#ddf3e3",
          100: "#ecf9f0",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(128, 214, 151, 0.12), 0 0 120px rgba(128, 214, 151, 0.06)",
        "glow-strong":
          "0 0 60px rgba(128, 214, 151, 0.28), 0 0 180px rgba(128, 214, 151, 0.14)",
        "glow-cool":
          "0 0 50px rgba(80, 120, 220, 0.25), 0 0 140px rgba(80, 120, 220, 0.12)",
        "inner-soft": "inset 0 1px 0 0 rgba(255,255,255,0.08)",
        elevated:
          "0 30px 60px -15px rgba(0, 4, 24, 0.75), 0 18px 36px -18px rgba(0, 4, 24, 0.5)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fadeIn 1.2s ease-out both",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin 28s linear infinite",
        shimmer: "shimmer 3.2s linear infinite",
        pulseRing: "pulseRing 3.5s ease-out infinite",
        marquee: "marquee 40s linear infinite",
        "tilt-in": "tiltIn 0.9s cubic-bezier(0.22,1,0.36,1) both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.85)", opacity: "0.6" },
          "80%,100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        tiltIn: {
          "0%": {
            opacity: "0",
            transform: "perspective(800px) rotateX(8deg) translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "perspective(800px) rotateX(0deg) translateY(0)",
          },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(195,220,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(195,220,255,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(128,214,151,0.18) 0%, transparent 60%)",
        "brand-gradient":
          "linear-gradient(180deg, rgb(0, 12, 50) 30%, rgb(24, 35, 75) 70%, rgb(128, 214, 151) 100%)",
        "brand-gradient-soft":
          "linear-gradient(180deg, rgb(0, 12, 50) 0%, rgb(24, 35, 75) 60%, rgba(128, 214, 151, 0.35) 100%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
