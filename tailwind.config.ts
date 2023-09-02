import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.5rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
    },
    screens: {
      mobile: "480px",
      tablet: "640px",
      "tablet-large": "768px",
      laptop: "1024px",
      blogpost: "1094px",
      desktop: "1280px",
    },
    letterSpacing: {
      wide: "2.08px",
      wider: "2.32px",
      widest: "3.3px",
    },
    extend: {
      colors: {
        "gray-light": "#ECEFF0",
        yellow: "#F6BD60",
        "yellow-light": "#FFF8F1",
        "navy-blue": "#1E2F3F",
        "navy-blue-light": "#253F57",
        "blue-black": "#233648",
        "blue-gray": "#8195A9",
        "green-light": "#CCDDD9",
        "pink-light": "#FCEEEC",
        coral: "#F28482",
      },
      fontFamily: {
        oakleyscript: "Oakley Script",
        caslon: "Caslon",
        halisMedium: "Halis Medium",
        halisBook: "Halis Book",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
