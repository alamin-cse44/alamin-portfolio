import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#certifications", label: "certificates" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-border-soft bg-bg-soft/70 backdrop-blur-xl px-4 py-3">
          <Link
            href="#top"
            className="font-display font-semibold text-lg tracking-tight"
          >
            Al Amin<span className="text-accent">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted font-mono">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link href="#contact" className={buttonVariants({ size: "sm" })}>
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
