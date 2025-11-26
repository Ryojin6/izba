import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          black: "#000000",
          red: "#DC2626",
          "dark-gray": "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
