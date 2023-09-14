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
        ecru: "#BFB48F",
        wenge: "#564E58",
        cordovan: "#904E55",
        isabeline: "#F2EFE9",
        "eerie-black": "#252627",
      },
    },
  },
  plugins: [],
};
export default config;
