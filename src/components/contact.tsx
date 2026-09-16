import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-24 md:py-32 border-t border-border-soft"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft p-10 md:p-16 text-center relative overflow-hidden">
          <p className="font-mono text-sm text-faint mb-4 flex justify-center">
            <span className="text-accent2">./contact</span>
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">
            Have a product to build? Let&apos;s talk.
          </h2>
          <p className="text-muted mt-5 max-w-md mx-auto">
            Open to full-time roles and select freelance work. I usually reply
            within a day.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="mailto:alamincse44@gmail.com"
              className={buttonVariants()}
            >
              alamincse44@gmail.com
            </Link>
            <Link
              href="tel:+8801643530690"
              className={buttonVariants({ variant: "outline" })}
            >
              +880 1643 530690
            </Link>
          </div>
          <div className="mt-10 flex justify-center gap-6 font-mono text-sm text-muted">
            <Link
              href="https://github.com/alamin-cse44"
              target="_blank"
              rel="noopener"
              className="hover:text-ink"
            >
              github ↗
            </Link>
            <Link
              href="https://www.linkedin.com/in/al-amin-uap-cse44/"
              target="_blank"
              rel="noopener"
              className="hover:text-ink"
            >
              linkedin ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
