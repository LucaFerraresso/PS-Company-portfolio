// components/Modal.tsx
"use client";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, description }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-gray-800"
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg max-w-lg w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-500 dark:text-gray-300"
        >
          ×
        </button>
        <p className="text-lg">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
