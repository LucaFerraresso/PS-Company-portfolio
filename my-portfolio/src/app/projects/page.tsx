"use client";
import { motion } from "framer-motion";
import projects from "@/data/projects";

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-background text-foreground rounded-lg shadow-md overflow-hidden border border-secondary"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{project.title}</h2>
              {project.icon}
            </div>
            <p className="mt-2 text-sm">{project.description}</p>
            <div className="mt-4">
              <strong>Tecnologie:</strong>{" "}
              <span className="text-sm text-secondary">
                {project.technologies.join(", ")}
              </span>
            </div>
            <div className="mt-2">
              <strong>Periodo:</strong>{" "}
              <span className="text-sm text-secondary">{project.date}</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                href={project.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Codice sorgente
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsPage;
