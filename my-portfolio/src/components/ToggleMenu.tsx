"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null); // Default to null

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Fallback to 'light' if no theme is set
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme !== null) {
      const root = window.document.documentElement;
      const isDark = theme === "dark";
      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(theme);
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  if (theme === null) {
    return null; // Render nothing until theme is initialized
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-accent text-white px-4 py-2 rounded font-bold hover:bg-primary"
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
