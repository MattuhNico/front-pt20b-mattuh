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
        primary: "#081b29",
        secondary: "#4E31AA",
        tertiary: "#00abf0",
        quaternary: "#ededed",
      },
    },
  },
  plugins: [],
};
export default config;
