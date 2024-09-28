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
        mid: "#7450d6",
        high: "#7e59e2",
        light: "#8964ec",
        dark: "#101010",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        Fredoka: ["Fredoka", "sans-serif"],
      },
      maxWidth: {
        normal: "110rem",
      },
      // backgroundImage: {
      //   "hero-pattern": "url(/public/trs.png)",
      // },
    },
  },
  plugins: [],
};
export default config;
