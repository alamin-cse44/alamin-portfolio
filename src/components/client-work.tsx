import Link from "next/link";
import { clientWork } from "@/data/client-work";

export function ClientWork() {
  return (
    <section
      id="client-work"
      className="relative z-10 py-24 md:py-32 border-t border-border-soft"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="font-mono text-sm text-faint mb-4">
          <span className="text-accent2">./client-work</span>
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Company websites I&apos;ve worked on
        </h2>
        <p className="text-muted max-w-lg mb-14">
          Live production sites built as part of my work at MAR Group.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientWork.map((c) => (
            <Link
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noopener"
              className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft p-6 flex flex-col transition-transform hover:-translate-y-1"
            >
              <p className="font-mono text-xs text-accent2 mb-2">{c.role}</p>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-muted mt-3 leading-relaxed flex-1">
                {c.description}
              </p>
              <span className="text-sm text-faint font-mono mt-5">
                visit site ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
