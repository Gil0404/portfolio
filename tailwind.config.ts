import { button } from "framer-motion/client";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        buttons: "#101010",
        main: "#6339b3",
        actions: "#6B6B6B",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        Fredoka: ["Fredoka", "sans-serif"],
      },
      maxWidth: {
        normal: "110rem",
      },
    },
  },
  plugins: [],
};
export default config;
