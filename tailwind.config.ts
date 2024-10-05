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

      screens: {
        sm: "375px",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(900px)" },
          "100%": { transform: "translateX(0)" },
        },
        blob: {
          "0% , 100%": {
            "border-radius": " 65% 35% 42% 48% / 40% 66% 25% 52%;",
          },
          "20%": {
            "border-radius": "37% 53% 34% 66% / 60% 33% 63% 34",
          },
          "50%": {
            "border-radius": "62% 35% 54% 46% / 48% 49% 51% 52%;",
          },
          "80%": {
            "border-radius": "44% 53% 71% 29% / 37% 77% 23% 56%;",
          },
        },
      },

      animation: {
        slidein: "slidein .5s ease-in-out ",
        blob: "blob 8s ease-in-out infinite ",
      },
      dropShadow: {
        "3xl": "0 1px 35px rgba(126, 89, 226, .5)",
      },
      minHeight: {
        normalh: "900px",
      },
      height: {
        normalh: "900px",
      },
    },
  },
  plugins: [],
};
export default config;
