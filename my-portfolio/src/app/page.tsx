"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Image component

export default function Home() {
  const imageUrl = "/images/sections/img1.jpg"; // URL dell'immagine di sfondo
  const imageUrl2 = "/images/sections/img2.jpg"; // Immagine per la prima card (Projects)
  const imageUrl3 = "/images/sections/img3.jpg"; // Immagine per la seconda card (About Me)
  const imageUrl4 = "/images/sections/img4.jpg"; // Immagine per la quarta card (Contacts)
  const imageUrl5 = "/images/sections/img5.jpg"; // Immagine per la quinta card (Soft Skills)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="relative min-h-screen px-8 py-16 text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }} // Apply background image for styling
        >
          {/* Overlay with themes */}
          <div className="absolute inset-0 bg-black opacity-30 light:opacity-20 dark:opacity-50 dimmed:opacity-40"></div>
          <div className="flex flex-col justify-center items-center min-h-full relative z-10">
            <motion.div className="relative z-10 text-center">
              <motion.h1 className="text-5xl font-extrabold text-primary sm:text-6xl md:text-7xl transition-all duration-500">
                Benvenuto nel mio Portfolio
              </motion.h1>

              <motion.p className="mt-6 text-lg text-secondary sm:text-xl md:text-2xl max-w-2xl mx-auto transition-all duration-500">
                Esplora i miei{" "}
                <Link
                  href="/projects"
                  className="text-accent underline hover:text-primary transition-all duration-300"
                >
                  Progetti
                </Link>{" "}
                e scopri di più{" "}
                <Link
                  href="/aboutme"
                  className="text-accent underline hover:text-primary transition-all duration-300"
                >
                  su di me
                </Link>
                .
              </motion.p>
            </motion.div>

            {/* Card section */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* First card - Projects */}
              <motion.div
                className="card relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link href="/projects">
                  <Image
                    src={imageUrl2}
                    alt="Progetti"
                    className="w-full h-48 object-cover"
                    width={500} // Provide width
                    height={200} // Provide height
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold text-primary">
                      I miei Progetti
                    </h2>
                    <p className="text-sm text-secondary mt-2">
                      Scopri i progetti su cui ho lavorato, dalle applicazioni
                      web a siti responsive e soluzioni creative.
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Second card - About Me */}
              <motion.div
                className="card relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link href="/aboutme">
                  <Image
                    src={imageUrl3}
                    alt="Chi Sono"
                    className="w-full h-48 object-cover"
                    width={500}
                    height={200}
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold text-primary">
                      Su di me
                    </h2>
                    <p className="text-sm text-secondary mt-2">
                      Scopri di più su di me, la mia esperienza e la mia
                      passione per lo sviluppo front-end.
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Third card - Contacts */}
              <motion.div
                className="card relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link href="/contacts">
                  <Image
                    src={imageUrl4}
                    alt="Contatti"
                    className="w-full h-48 object-cover"
                    width={500}
                    height={200}
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold text-primary">
                      Contatti
                    </h2>
                    <p className="text-sm text-secondary mt-2">
                      Contattami per qualsiasi domanda o richiesta. Sono sempre
                      disponibile per nuove opportunità.
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Fourth card - Soft Skills */}
              <motion.div
                className="card relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link href="/softSkills">
                  <Image
                    src={imageUrl5}
                    alt="Soft Skills"
                    className="w-full h-48 object-cover"
                    width={500}
                    height={200}
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold text-primary">
                      Soft Skills
                    </h2>
                    <p className="text-sm text-secondary mt-2">
                      Scopri le mie soft skills, come la comunicazione e la
                      gestione del tempo, che mi aiutano a lavorare in team e
                      raggiungere obiettivi.
                    </p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
