import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "custom-footer": "#C49D9D",
      "custom-pink": "#C49D9D50",
      "custom-white": "#FAFAFA",
      "custom-black": "#1F1F1F",
      "custom-gray": "#EFEFEF",
      "custom-yellow": "#DED5B5",
      "custom-button-light": "#F5F5F5",
      "custom-button-hover": "#E0E0E0",
      "custom-button-pink": "#C49D9D80",
      "custom-input-border": "#BBBBBB",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  plugins: [],
};
export default config;
