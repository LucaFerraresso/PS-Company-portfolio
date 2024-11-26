"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ToggleMenu";

const Navbar = () => {
  const pathname = usePathname(); // Otteniamo il percorso corrente

  // Funzione per determinare se il link è attivo
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`flex border-b items-center justify-between px-6 py-4 transition-colors duration-300
        light:bg-primary-light light:text-foreground-light
        dark:bg-primary-dark dark:text-foreground-dark
        dimmed:bg-primary-dimmed dimmed:text-foreground-dimmed`}
    >
      <div className="text-lg font-bold">
        <Link
          href="/"
          className={`light:text-foreground-light dark:text-foreground-dark dimmed:text-foreground-dimmed hover:text-accent`}
        >
          My Portfolio
        </Link>
      </div>
      <ul className="flex space-x-4 justify-center items-center">
        <li>
          <Link
            href="/projects"
            className={`font-bold transition-colors ${
              isActive("/projects")
                ? "underline underline-offset-4"
                : "light:text-foreground-light light:hover:text-accent-light dark:text-foreground-dark dark:hover:text-accent-dark dimmed:text-foreground-dimmed dimmed:hover:text-accent-dimmed"
            }`}
          >
            Progetti
          </Link>
        </li>
        <li>
          <Link
            href="/aboutme"
            className={`font-bold transition-colors ${
              isActive("/aboutme")
                ? "underline underline-offset-4"
                : "light:text-foreground-light light:hover:text-accent-light dark:text-foreground-dark dark:hover:text-accent-dark dimmed:text-foreground-dimmed dimmed:hover:text-accent-dimmed"
            }`}
          >
            About Me
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
