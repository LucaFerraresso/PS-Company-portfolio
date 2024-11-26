"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname(); // Otteniamo il percorso corrente

  // Funzione per verificare se il link è attivo
  const isActive = (path: string) => pathname === path;

  return (
    <footer
      className={`px-6 py-4 border-t transition-colors duration-300
        light:bg-secondary-light light:text-foreground-light
        dark:bg-secondary-dark dark:text-foreground-dark
        dimmed:bg-secondary-dimmed dimmed:text-foreground-dimmed`}
    >
      <div className="flex justify-between items-center font-bold">
        <p
          className={`light:text-foreground-light dark:text-foreground-dark dimmed:text-foreground-dimmed`}
        >
          &copy; 2024 My Portfolio
        </p>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/contacts"
              className={`transition-colors ${
                isActive("/contacts")
                  ? "underline underline-offset-4"
                  : "light:text-foreground-light light:hover:text-accent-light dark:text-foreground-dark dark:hover:text-accent-dark dimmed:text-foreground-dimmed dimmed:hover:text-accent-dimmed"
              }`}
            >
              Contatti
            </Link>
          </li>
          <li>
            <Link
              href="/softSkills"
              className={`transition-colors ${
                isActive("/softSkills")
                  ? "underline underline-offset-4"
                  : "light:text-foreground-light light:hover:text-accent-light dark:text-foreground-dark dark:hover:text-accent-dark dimmed:text-foreground-dimmed dimmed:hover:text-accent-dimmed"
              }`}
            >
              Soft Skills
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
