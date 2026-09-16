import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CodeTypewriter } from "@/components/code-typewriter";
import { TechMarquee } from "@/components/tech-marquee";

const stats = [
  { value: "2.5+", label: "years, full-time" },
  { value: "6", label: "live products shipped" },
  { value: "350+", label: "problems solved, Codeforces" },
];

export function Hero() {
  return (
    <section id="top" className="relative z-10 pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-sm text-faint mb-5">
            <span className="text-accent2">~/portfolio</span> &gt; whoami
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Al Amin
          </h1>
          <p className="font-display text-xl md:text-2xl mt-3 text-muted">
            Software Developer, Dhaka
          </p>
          <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-lg">
            I build full-stack web products with React, Next.js and Node — from
            database schema to the last pixel of the UI. Currently shipping
            features at MAR Group.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="#projects" className={buttonVariants()}>
              View my work
            </Link>
            <Link
              href="#contact"
              className={buttonVariants({ variant: "outline" })}
            >
              Say hello
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold">{s.value}</p>
                <p className="text-xs text-faint font-mono mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[14px] border border-border-soft bg-bg-soft shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          <div className="bg-surface-2 border-b border-border-soft rounded-t-[14px] flex items-center gap-2 px-4 py-3">
            <span className="w-[9px] h-[9px] rounded-full bg-[#5F5A54]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#5F5A54]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#5F5A54]" />
            <span className="ml-3 font-mono text-xs text-faint">
              developer.ts
            </span>
          </div>
          <CodeTypewriter />
        </div>
      </div>

      <TechMarquee />
    </section>
  );
}
