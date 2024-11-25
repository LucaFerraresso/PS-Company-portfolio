/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Permette il cambio tra tema chiaro e scuro usando la classe 'dark'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
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
        highlight: "var(--highlight-light)", // Nuovo colore per evidenziare
        muted: "var(--muted-light)", // Colore per testi deboli
        surface: "var(--surface-light)", // Colore per superfici (card, box)

        // Aggiunta del tema scuro
        backgroundDark: "var(--background-dark)",
        foregroundDark: "var(--foreground-dark)",
        primaryDark: "var(--primary-dark)",
        secondaryDark: "var(--secondary-dark)",
        accentDark: "var(--accent-dark)",
        highlightDark: "var(--highlight-dark)",
        mutedDark: "var(--muted-dark)",
        surfaceDark: "var(--surface-dark)",
      },
      transitionProperty: {
        colors: "background-color, color",
      },
    },
  },
  plugins: [],
};
