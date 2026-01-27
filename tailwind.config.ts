import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-vault': '#0B0F1A',
        'electric-cyan': '#00E5FF',
      },
    },
  },
  plugins: [],
};
export default config;