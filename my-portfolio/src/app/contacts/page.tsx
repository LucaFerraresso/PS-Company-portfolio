"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  FacebookIcon,
  WebhookIcon,
} from "lucide-react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    nome: "",
    cognome: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.nome) newErrors.nome = "Il nome è obbligatorio";
    if (!formData.cognome) newErrors.cognome = "Il cognome è obbligatorio";
    if (!formData.email) {
      newErrors.email = "L'email è obbligatoria";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Per favore, inserisci una email valida";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setMessage(
        `Grazie ${formData.nome} ${formData.cognome} per avermi contattato!`
      );
      setFormData({ nome: "", cognome: "", email: "" });
      setErrors({ nome: "", cognome: "", email: "" }); // Reset errors
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center max-w-4xl mx-auto p-6 gap-12 rounded-lg transition-colors duration-300
        light:bg-primary-light light:text-foreground-light
        dark:bg-primary-dark dark:text-foreground-dark
        dimmed:bg-primary-dimmed dimmed:text-foreground-dimmed"
    >
      {/* Contact Form */}
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Contattami</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-lg">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              id="nome"
              className="w-full p-3 rounded-md border-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Inserisci il tuo nome"
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">{errors.nome}</p>
            )}
          </div>
          <div>
            <label htmlFor="cognome" className="block text-lg">
              Cognome
            </label>
            <input
              type="text"
              name="cognome"
              value={formData.cognome}
              onChange={handleInputChange}
              id="cognome"
              className="w-full p-3 rounded-md border-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Inserisci il tuo cognome"
            />
            {errors.cognome && (
              <p className="text-red-500 text-sm">{errors.cognome}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              id="email"
              className="w-full p-3 rounded-md border-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Inserisci la tua email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            Iscriviti alla NewsLetter
          </button>
        </form>
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center font-semibold text-green-600"
          >
            {message}
          </motion.p>
        )}
      </div>

      {/* Social Links and Additional Information */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Seguimi sui Social
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center space-x-8 mb-8"
        >
          <motion.a
            href="https://www.linkedin.com/in/luca-ferraresso/"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 transform transition-transform duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={36} />
          </motion.a>
          <motion.a
            href="https://github.com/LucaFerraresso"
            target="_blank"
            className="text-gray-900 hover:text-gray-700 transform transition-transform duration-300 hover:scale-110 dark:text-white"
            whileHover={{ scale: 1.1 }}
            rel="noopener noreferrer"
          >
            <GithubIcon size={36} />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/luca.ferraresso/"
            target="_blank"
            className="text-blue-700 hover:text-blue-500 transform transition-transform duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            rel="noopener noreferrer"
          >
            <FacebookIcon size={36} />
          </motion.a>
          <motion.a
            href="https://workspace.google.com/intl/it/gmail/"
            className="text-red-500 hover:text-red-700 transform transition-transform duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <MailIcon size={36} />
          </motion.a>
          <motion.a
            href="https://react-portfolio-coral-five.vercel.app/homepage"
            target="_blank"
            className="text-green-600 hover:text-green-800 transform transition-transform duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            rel="noopener noreferrer"
          >
            <WebhookIcon size={36} />
          </motion.a>
        </motion.div>

        <div className="text-center">
          <h3 className="text-xl font-medium">Contatti</h3>
          <p className="mt-2 text-lg">
            Email:{" "}
            <a
              href="mailto:tuo-email@gmail.com"
              className="text-blue-600 hover:text-blue-800"
            >
              lucaferraresso96@gmail.com
            </a>
          </p>
          <p className="mt-2 text-lg">
            Telefono: <span className="text-blue-600">+39 334 83 66 ###</span>
          </p>

          <p className="mt-6">
            Se hai domande o desideri ulteriori informazioni, non esitare a
            contattarmi. Risponderò il prima possibile!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contacts;
