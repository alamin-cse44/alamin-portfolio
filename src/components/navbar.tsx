"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        <div className="mt-3 sm:mt-4 rounded-2xl border border-border-soft bg-bg-soft/80 backdrop-blur-xl shadow-[0_16px_40px_-24px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between px-3 py-3 sm:px-4">
            <Link
              href="#top"
              onClick={closeMenu}
              className="font-display font-semibold text-lg tracking-tight"
            >
              Al Amin<span className="text-accent">.</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-7 text-sm text-muted font-mono">
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
            <div className="hidden lg:block">
              <Link href="#contact" className={buttonVariants({ size: "sm" })}>
                Get in touch
              </Link>
            </div>
            <button
              type="button"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-border-soft text-muted transition-colors hover:border-accent2 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent2 lg:hidden"
            >
              {menuOpen ? (
                <X size={19} strokeWidth={1.8} />
              ) : (
                <Menu size={19} strokeWidth={1.8} />
              )}
            </button>
          </div>
          <div
            className={`${menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} grid transition-[grid-template-rows,opacity] duration-300 lg:hidden`}
          >
            <nav className="min-h-0 overflow-hidden">
              <div className="mx-3 mb-3 border-t border-border-soft pt-2 sm:mx-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 font-mono text-sm text-muted transition-colors hover:bg-surface hover:text-ink"
                  >
                    {l.label}
                    <span className="text-faint">↗</span>
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className={`${buttonVariants({ size: "sm" })} mt-2 w-full`}
                >
                  Get in touch
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
