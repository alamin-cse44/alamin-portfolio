import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0D16",
        "bg-soft": "#0D1120",
        surface: "#121729",
        "surface-2": "#1A2036",
        border: {
          DEFAULT: "#262D45",
          soft: "#1C2338",
        },
        ink: "#E9ECF6",
        muted: "#8891AC",
        faint: "#5B6382",
        accent: {
          DEFAULT: "#F2A93B",
          dim: "#B9822F",
        },
        accent2: "#7C9EFF",
        accent3: "#63D3B0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "scroll-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "scroll-x": "scroll-x 28s linear infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
