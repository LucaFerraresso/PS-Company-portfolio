"use client";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, padding: 0 }}
      animate={{ opacity: 1, padding: "24px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="skill-card flex flex-col items-center justify-around h-[500px] rounded-lg shadow-lg overflow-hidden
        transition-transform duration-300
        bg-light-background text-light-foreground border-light-secondary
        dark:bg-dark-background dark:text-dark-foreground dark:border-dark-secondary
        dimmed:bg-dimmed-background dimmed:text-dimmed-foreground dimmed:border-dimmed-secondary
        hover:bg-light-secondary hover:text-light-foreground
        dark:hover:bg-dark-secondary dark:hover:text-dark-foreground
        dimmed:hover:bg-dimmed-secondary dimmed:hover:text-dimmed-foreground"
    >
      <div className="flex justify-center items-center gap-4 p-4">
        {icon}{" "}
        <h3 className="title text-xl font-semibold text-center">{title}</h3>
      </div>

      <div className="h-[300px] overflow-auto scrollbar-none">
        {" "}
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
