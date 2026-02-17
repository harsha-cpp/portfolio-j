import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Color System ─────────────────────────────────────
      colors: {
        base: {
          DEFAULT: "#0a0a0b",
          surface: "#131316",
          elevated: "#1a1a1f",
          hover: "#222228",
        },
        border: {
          DEFAULT: "#27272a",
          subtle: "#1e1e22",
          hover: "#3a3a3f",
        },
        accent: {
          DEFAULT: "#4ade80",
          muted: "#22c55e",
          dim: "rgba(74, 222, 128, 0.12)",
        },
        text: {
          primary: "#f0f0f0",
          secondary: "#a1a1aa",
          muted: "#71717a",
          dim: "#3f3f46",
        },
      },

      // ─── Typography ───────────────────────────────────────
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-inter)", "system-ui", "sans-serif"],
        handwritten: ["var(--font-caveat)", "cursive"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "3.75rem",
          { lineHeight: "1.08", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        display: [
          "2.75rem",
          { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        "heading-1": [
          "2rem",
          { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        "heading-2": [
          "1.5rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "heading-3": [
          "1.125rem",
          { lineHeight: "1.4", fontWeight: "500" },
        ],
        body: ["0.9375rem", { lineHeight: "1.7" }],
        small: ["0.8125rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5" }],
        mono: ["0.8125rem", { lineHeight: "1.5" }],
      },

      // ─── Spacing Scale ────────────────────────────────────
      spacing: {
        sidebar: "240px",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        container: "1200px",
        content: "1040px",
        prose: "680px",
      },

      // ─── Border Radius ────────────────────────────────────
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
      },

      // ─── Animations ───────────────────────────────────────
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },

      // ─── Box Shadows ──────────────────────────────────────
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.05)",
        "card-hover":
          "0 8px 30px rgba(0, 0, 0, 0.5), 0 0 1px rgba(74, 222, 128, 0.15)",
        elevated: "0 12px 40px rgba(0, 0, 0, 0.5)",
        glow: "0 0 40px rgba(74, 222, 128, 0.1)",
        "inner-glow": "inset 0 1px 0 rgba(255, 255, 255, 0.04)",
      },

      // ─── Backdrop Blur ────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
