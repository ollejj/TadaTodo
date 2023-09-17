import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ok: "#4e9068",
        ecru: "#BFB48F",
        wenge: "#564E58",
        cordovan: {
          100: "#b5767c",
          200: "#ac656d",
          300: "#a1575f",
          400: "#904E55",
          500: "#7f454b",
          600: "#6f3c41",
          700: "#5e3338",
        },
        isabeline: "#F2EFE9",
        "eerie-black": {
          50: "#636668",
          100: "#4a4c4e",
          200: "#3e4041",
          300: "#313334",
          400: "#252627",
          500: "#19191a",
          600: "#0c0d0d",
          700: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
