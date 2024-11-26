// pages/projects.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FaSearch } from "react-icons/fa"; // Importa l'icona universale
import Modal from "@/components/Modal";

const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");

  const openModal = (description: string) => {
    setSelectedDescription(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDescription("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          icon={<FaSearch />}
          technologies={project.technologies}
          date={project.date}
          vercelLink={project.vercelLink}
          githubLink={project.githubLink}
          onIconClick={openModal} // Passiamo la funzione per aprire la modale
        />
      ))}

      {/* La modale verrà gestita qui a livello di pagina */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          description={selectedDescription}
        />
      )}
    </motion.div>
  );
};

export default ProjectsPage;
