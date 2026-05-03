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
        ink: {
          950: "#050505",
          900: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#262626",
          500: "#3a3a3a",
          400: "#5a5a5a",
          300: "#8a8a8a",
          200: "#bababa",
          100: "#e5e5e5",
          50: "#f6f6f6",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,255,255,0.08), 0 0 120px rgba(255,255,255,0.04)",
        "glow-strong":
          "0 0 60px rgba(255,255,255,0.15), 0 0 180px rgba(255,255,255,0.08)",
        "inner-soft": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
        elevated:
          "0 30px 60px -15px rgba(0,0,0,0.7), 0 18px 36px -18px rgba(0,0,0,0.4)",
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
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
