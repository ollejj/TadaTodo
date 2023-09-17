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
        nav: "#6A67F3",
        main: "#201A36",
        todo: "#2C2547",
        pink: "#FC7785",
        "cbx-ring": "#53538A",
        "date-bg": "#332C4D",
        "date-text": "#5E5783",
        input: "#352C54",
      },
    },
  },
  plugins: [],
};
export default config;
