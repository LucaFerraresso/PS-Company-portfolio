import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-6 py-4 bg-secondary text-foreground transition-colors duration-300">
      <div className="flex justify-between items-center text-white font-bold">
        <p>&copy; 2024 My Portfolio</p>
        <ul className="flex space-x-4">
          <li>
            <Link href="/contacts" className="hover:text-accent">
              Contatti
            </Link>
          </li>
          <li>
            <Link href="/softSkills" className="hover:text-accent">
              Soft Skills / Esperienze
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
