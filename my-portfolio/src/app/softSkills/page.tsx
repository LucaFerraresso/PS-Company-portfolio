"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import skills from "@/data/skills";

const SkillPage = () => {
  const [theme, setTheme] = useState("light");

  // Effect to update the theme based on OS or user preference
  useEffect(() => {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(userPrefersDark.matches ? "dark" : "light");
    userPrefersDark.addEventListener("change", (e) =>
      setTheme(e.matches ? "dark" : "light")
    );

    return () =>
      userPrefersDark.removeEventListener("change", (e) =>
        setTheme(e.matches ? "dark" : "light")
      );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {skills.map((tech) => (
        <motion.div
          key={tech.title}
          whileHover={{ scale: 1.05 }}
          className={`flex items-center space-x-4 ${
            theme === "dark"
              ? "bg-gray-800 text-gray-300"
              : "bg-gray-100 text-gray-700"
          } p-4 rounded-lg shadow-lg`}
        >
          <div className="w-12 h-12 flex justify-center items-center">
            {/* Render the icon component directly */}
            {tech.component}
          </div>
          <div>
            <h2 className="text-xl font-bold">{tech.title}</h2>
            <p>{tech.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillPage;
