import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Benvenuto nel mio Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl mt-4"
      >
        Scopri i miei progetti e le mie competenze
      </motion.p>
    </div>
  );
};

export default Hero;
