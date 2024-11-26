"use client";
import { useTheme } from "@/app/context/ThemeContext";
import React from "react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-accent text-white px-4 py-2 rounded font-bold hover:bg-primary transition-transform transform hover:scale-105"
    >
      {theme === "light" ? "🌞" : theme === "dark" ? "🌙" : "🌆"}
    </button>
  );
};

export default ThemeToggle;
