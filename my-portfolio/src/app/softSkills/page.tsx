// pages/skills.tsx
"use client";
import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import skills from "@/data/skills";

const SkillPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 p-6 max-w-7xl mx-auto"
    >
      {skills.map((skill) => (
        <SkillCard
          key={crypto.randomUUID()}
          title={skill.title || ""}
          description={skill.description}
          icon={skill.component}
        />
      ))}
    </motion.div>
  );
};

export default SkillPage;
