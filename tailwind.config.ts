import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Core surfaces
        ink: "#0A0A0B", // matte black — page background
        graphite: "#131316", // panel / card background
        "graphite-alt": "#1B1B1F", // slightly raised panel
        hairline: "rgba(255,255,255,0.08)", // border colour on dark surfaces

        // Typography
        bone: "#F5F3EF", // primary text (soft warm white, not pure white)
        mist: "#A6ACB5", // secondary / muted text (cool grey)

        // Accents
        silver: "#C9CDD3", // cool silver accent
        sand: "#BCA687", // warm neutral accent, used sparingly (Healthcheck, key CTAs)
        "sand-dim": "#8C7A62",
        nexus: "#7C8794", // connecting line / node colour
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-fine": "38px 38px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        pulseNode: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        pulseNode: "pulseNode 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
