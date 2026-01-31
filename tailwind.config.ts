import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "rgb(var(--bg-main))",
        surface: "rgb(var(--bg-surface))",
        subtle: "rgb(var(--border-subtle))",
        primary: "rgb(var(--text-primary))",
        secondary: "rgb(var(--text-secondary))",
        accent: "rgb(var(--accent))",
      },
      borderRadius: {
        // globals.css'deki isimlerle birebir aynı olmalı
        'xl': 'var(--radius-xl)',
        'lg': 'var(--radius-lg)',
        'md': 'var(--radius-md)',
      },
      spacing: {
        'card': 'var(--spacing-card)',
      },
    },
  },
  plugins: [],
};

export default config;