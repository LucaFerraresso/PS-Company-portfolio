"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { GithubIcon, LinkedinIcon, FacebookIcon, MailIcon } from "lucide-react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(
      `Grazie ${formData.nome} ${formData.cognome} per esserti iscritto alla newsletter.`
    );
    setFormData({ nome: "", cognome: "", email: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto p-6 bg-background text-foreground shadow-md rounded-lg"
    >
      <h1 className="text-2xl font-bold text-center mb-4">Contatti</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          placeholder="Nome"
          required
          className="p-2 rounded border border-foreground bg-background text-foreground"
        />
        <input
          type="text"
          name="cognome"
          value={formData.cognome}
          onChange={handleInputChange}
          placeholder="Cognome"
          required
          className="p-2 rounded border border-foreground bg-background text-foreground"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
          className="p-2 rounded border border-foreground bg-background text-foreground"
        />
        <button
          type="submit"
          className="bg-primary text-white py-2 rounded font-bold hover:bg-accent transition-colors"
        >
          Iscriviti
        </button>
      </form>
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-accent font-bold"
        >
          {message}
        </motion.p>
      )}
      <div className="mt-6 text-center space-x-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-primary font-bold hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="text-primary font-bold hover:underline"
        >
          GitHub
        </a>
        <a
          href="mailto:example@gmail.com"
          className="text-primary font-bold hover:underline"
        >
          Gmail
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-primary font-bold hover:underline"
        >
          Facebook
        </a>
      </div>
    </motion.div>
  );
};

export default Contacts;
