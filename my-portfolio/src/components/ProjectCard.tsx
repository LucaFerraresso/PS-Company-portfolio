// components/ProjectCard.tsx
"use client";
import { motion } from "framer-motion";
import { CgVercel } from "react-icons/cg";
import { GithubIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: JSX.Element;
  technologies: string[];
  date: string;
  vercelLink: string;
  githubLink: string;
  onIconClick: (description: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  icon,
  technologies,
  date,
  vercelLink,
  githubLink,
  onIconClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-lg shadow-md overflow-hidden border transition-colors duration-300
        light:bg-background-light light:text-foreground-light light:border-secondary-light
        dark:bg-background-dark dark:text-foreground-dark dark:border-secondary-dark
        dimmed:bg-background-dimmed dimmed:text-foreground-dimmed dimmed:border-secondary-dimmed
        max-w-sm sm:max-w-md lg:max-w-lg w-full h-full"
    >
      <motion.img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover opacity-0 transition-opacity duration-500 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-light">
            {title}
          </h2>
          <div
            onClick={() => onIconClick(description)}
            className="cursor-pointer flex items-center gap-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {icon}
            <span className="text-lg text-primary-dark dark:text-primary-light">
              Info
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between h-[150px] mb-4">
          <div className="mt-2">
            <strong className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Tecnologie:
            </strong>
            <span className="text-secondary text-sm">
              {technologies.join(", ")}
            </span>
          </div>

          <div className="mt-2">
            <strong className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Periodo:
            </strong>
            <span className="text-secondary text-sm">{date}</span>
          </div>
        </div>

        <div className="flex items-center justify-around mt-4 gap-6">
          <a
            href={vercelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-primary-dark dark:text-primary-light hover:text-green-400 transition-colors"
          >
            <CgVercel size={24} />
            <span>Vercel</span>
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-primary-dark dark:text-primary-light hover:text-blue-400 transition-colors "
          >
            <GithubIcon size={24} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
