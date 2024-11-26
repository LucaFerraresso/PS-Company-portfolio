"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Definizione dei temi disponibili
type Theme = "light" | "dark" | "dimmed";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Carica il tema salvato o imposta 'light' come predefinito
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (
        storedTheme === "light" ||
        storedTheme === "dark" ||
        storedTheme === "dimmed"
      ) {
        return storedTheme;
      }
    }
    return "dimmed";
  });

  useEffect(() => {
    const root = document.documentElement;
    // Rimuovi tutte le classi di tema e aggiungi quella corrente
    root.classList.remove("light", "dark", "dimmed");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "dimmed" : "light"
    );
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
