"use client";
import { useTheme } from "@/app/context/ThemeContext";
import React from "react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-trasparent text-white px-4 py-2 rounded font-bold hover:border "
    >
      {theme === "light" ? "🌞" : theme === "dark" ? "🌙" : "🌆"}
    </button>
  );
};

export default ThemeToggle;
