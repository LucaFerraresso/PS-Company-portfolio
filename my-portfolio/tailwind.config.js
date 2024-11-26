/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
  "./my-portfolio/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      background: "var(--background-light)",
      foreground: "var(--foreground-light)",
      primary: "var(--primary-light)",
      secondary: "var(--secondary-light)",
      accent: "var(--accent-light)",
    },
  },
};
export const plugins = [];
