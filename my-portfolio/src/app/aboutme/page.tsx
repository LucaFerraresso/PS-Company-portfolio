"use client";
import { motion } from "framer-motion";
import { aboutMeData } from "@/data/aboutme";

const AboutMe = () => {
  const { profileImage, name, intro, sections, closingText } = aboutMeData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="about-me-container max-w-4xl mx-auto p-6 rounded-lg transition-colors duration-300
        light:bg-background-light light:text-foreground-light
        dark:bg-background-dark dark:text-foreground-dark
        dimmed:bg-background-dimmed dimmed:text-foreground-dimmed"
    >
      {/* Profilo utente */}
      <div className="profile-section text-center mb-12">
        <h1 className="name text-3xl font-bold">{name}</h1>
        <motion.img
          src={profileImage}
          alt={`Foto di ${name}`}
          className=" mt-4 mb-4 profile-image w-40 h-40 mx-auto rounded-full shadow-xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <p className="intro mt-4 text-lg text-secondary max-w-3xl mx-auto">
          {intro}
        </p>
      </div>

      {/* Sezioni strutturate */}
      <div className="structured-sections space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="section space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-2xl font-bold text-primary">
              {section.title}
            </h2>
            <motion.img
              src={section.image}
              alt={`Immagine della sezione ${section.title}`}
              className="section-image w-full h-64 object-cover rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <p className="section-text text-sm text-secondary">
              {section.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Conclusione */}
      <motion.div
        className="closing-section mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="closing-title text-2xl font-bold text-primary">
          Conclusione
        </h2>
        <p className="closing-text text-lg text-secondary mt-4">
          {closingText}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
