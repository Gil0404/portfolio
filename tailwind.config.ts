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
        main: "#003366",
        buttons: "#008080",
        actions: "#E0E0E0",
      },
      fontFamily: {
        heading: ["Righteous", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      },
      maxWidth: {
        normal: "110rem",
      },
    },
  },
  plugins: [],
};
export default config;
