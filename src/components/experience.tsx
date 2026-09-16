import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 py-24 md:py-32 border-t border-border-soft"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="font-mono text-sm text-faint mb-4">
          <span className="text-accent2">./experience</span>
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-14">
          Where I&apos;ve worked
        </h2>

        <div className="relative pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent via-border to-transparent" />
          {experience.map((job) => (
            <div key={job.company} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[34px] top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-accent shadow-[0_0_0_4px_rgba(242,169,59,0.12)]" />
              <p className="font-mono text-xs text-faint">{job.period}</p>
              <h3 className="font-display text-xl md:text-2xl font-semibold mt-2">
                {job.role}{" "}
                <span className="text-muted font-normal">· {job.company}</span>
              </h3>
              <p className="text-sm text-faint font-mono mt-1">{job.type}</p>
              {"description" in job && job.description && (
                <p className="text-muted mt-3 max-w-2xl leading-relaxed">
                  {job.description}
                </p>
              )}
              <ul className="mt-4 space-y-2 text-muted max-w-2xl leading-relaxed">
                {job.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent">–</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {"tags" in job && job.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              )}
              {"link" in job && job.link && (
                <Link
                  href={job.link}
                  target="_blank"
                  rel="noopener"
                  className={`${buttonVariants({ variant: "outline", size: "sm" })} inline-block mt-5`}
                >
                  View project ↗
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
