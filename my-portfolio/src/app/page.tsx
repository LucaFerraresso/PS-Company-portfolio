import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-[calc(100vh-160px)] px-8 text-center">
      <h1 className="text-5xl font-bold text-primary sm:text-6xl md:text-7xl transition-all duration-500">
        Benvenuto nel mio Portfolio
      </h1>
      <p className="mt-4 text-lg text-secondary sm:text-xl md:text-2xl transition-all duration-500">
        Esplora i miei{" "}
        <Link
          href="/projects"
          className="text-accent underline hover:text-primary"
        >
          Progetti
        </Link>{" "}
        e scopri di più{" "}
        <Link
          href="/aboutme"
          className="text-accent underline hover:text-primary"
        >
          su di me
        </Link>
        .
      </p>
    </div>
  );
}
