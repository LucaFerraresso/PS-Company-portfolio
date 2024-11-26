import { Config } from "tailwindcss";

/** @type {Config} */
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-light)",
        foreground: "var(--foreground-light)",
        primary: "var(--primary-light)",
        secondary: "var(--secondary-light)",
        accent: "var(--accent-light)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // Libreria per nascondere la scrollbar
  ],
};

export default config;
