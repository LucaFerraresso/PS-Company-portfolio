"use client";
import { motion } from "framer-motion";

const AboutMe = () => {
  const imageUrl = "/images/personal/Luca-Ferraresso.jpg";
  const longText = Buffer.from(
    "Luca Ferraresso è un aspirante sviluppatore web con una solida formazione in sviluppo front-end, recentemente completata con un bootcamp intensivo. Luca padroneggia HTML, CSS, JavaScript, React e ha una conoscenza base di linguaggi back-end come Node.js e Python. Il suo percorso formativo gli ha permesso di sviluppare capacità di problem-solving, teamwork e di lavorare in modo indipendente su progetti web complessi. Luca è attualmente alla ricerca di un'opportunità come sviluppatore web per mettere in pratica le sue competenze e crescere professionalmente in un contesto stimolante."
  ).toString("utf-8");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6 bg-background text-foreground shadow-md rounded-lg"
    >
      <div className="text-center">
        <img
          src={imageUrl}
          alt="Foto personale"
          className="w-40 h-40 mx-auto rounded-full shadow-lg"
        />
        <h1 className="text-2xl font-bold mt-4">Chi sono</h1>
        <p className="mt-4 text-lg">
          Sono uno sviluppatore front-end con passione per il design, le
          animazioni e lo sviluppo di interfacce utente responsive e
          accessibili. Amo affrontare nuove sfide e lavorare su progetti
          innovativi.
          {longText}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
