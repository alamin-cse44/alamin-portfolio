"use client";

import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-24 md:py-32 border-t border-border-soft"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12 grid md:grid-cols-[0.85fr_1.3fr] gap-14">
        <div>
          <p className="font-mono text-sm text-faint mb-4">
            <span className="text-accent2">./about</span>
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            A developer who cares about the whole stack
          </h2>

          {/* PHOTO SLOT
              Drop your photo at /public/profile.jpg (or .png) and it will
              render automatically — see the <img> below. Until then, the
              monogram placeholder is shown. */}
          <div className="relative w-full max-w-[280px]">
            <div
              className="absolute -inset-3 rounded-[22px] border border-border-soft"
              style={{
                background:
                  "linear-gradient(160deg, rgba(242,169,59,0.10), transparent 60%)",
              }}
            />
            <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/5] bg-gradient-to-br from-surface-2 to-bg-soft">
              <Image
                src="/icons/panjabi_pic.png"
                alt="Al Amin"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget
                    .nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="w-full h-full flex-col items-center justify-center gap-3 text-center px-6 hidden absolute inset-0">
                <span className="font-display text-4xl font-semibold text-accent">
                  AA
                </span>
                <span className="font-mono text-[11px] text-faint leading-relaxed mt-2">
                  add /public/profile.jpg
                </span>
              </div>
              <div className="absolute top-3 right-3 font-mono text-[10px] text-faint opacity-60">
                {"</>"}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            I specialize in JavaScript and TypeScript across the stack — Node.js
            and Express on the backend, React and Next.js on the front. I like
            projects where I own a feature end to end: schema design, API, and
            the interface someone actually clicks through.
          </p>
          <p>
            At MAR Group I work on production apps used by real customers, where
            I&apos;ve upgraded the Node runtime across the fleet, tightened the
            gap between development and production environments, and pushed for
            architecture that scales rather than just ships.
          </p>
          <p>
            Outside of work I keep my problem-solving sharp on Codeforces,
            CodeChef, LeetCode and AtCoder, and I hold a CS degree from the
            University of Asia Pacific with three Dean&apos;s List terms.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft p-4">
              <p className="text-xs font-mono text-faint">Based in</p>
              <p className="mt-1 text-ink">Kalabagan, Dhaka, BD</p>
            </div>
            <div className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft p-4">
              <p className="text-xs font-mono text-faint">Currently</p>
              <p className="mt-1 text-ink">Software Developer, MAR Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
