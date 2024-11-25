"use client";
import Link from "next/link";
import ThemeToggle from "./ToggleMenu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-primary text-foreground transition-colors duration-300">
      <div className="text-lg font-bold">
        <Link href="/" className="text-white hover:text-accent">
          My Portfolio
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/projects"
            className="text-white font-bold hover:text-accent"
          >
            Progetti
          </Link>
        </li>
        <li>
          <Link
            href="/aboutme"
            className="text-white font-bold hover:text-accent"
          >
            About Me
          </Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
