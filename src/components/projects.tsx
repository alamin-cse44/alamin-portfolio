import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 md:py-32 border-t border-border-soft">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="font-mono text-sm text-faint mb-4">
          <span className="text-accent2">./projects</span>
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Featured projects
        </h2>
        <p className="text-muted max-w-lg mb-14">
          Personal builds where I designed the data model, the API, and the interface.
        </p>

        <div className="grid gap-8">
          {projects.map((p, idx) => (
            <div
              key={p.title}
              className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft grid md:grid-cols-[1.1fr_1fr] overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="font-mono text-xs text-faint mb-2">0{idx + 1} / featured</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold">{p.title}</h3>
                <p className="text-muted mt-4 leading-relaxed">{p.description}</p>
                {p.points && (
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {p.points.map((pt, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent">–</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-7">
                  {p.links?.live && (
                    <a href={p.links.live} target="_blank" rel="noopener" className={buttonVariants({ variant: "outline", size: "sm" })}>
                      Live site ↗
                    </a>
                  )}
                  {p.links?.client && (
                    <a href={p.links.client} target="_blank" rel="noopener" className={buttonVariants({ variant: "outline", size: "sm" })}>
                      Client repo ↗
                    </a>
                  )}
                  {p.links?.server && (
                    <a href={p.links.server} target="_blank" rel="noopener" className={buttonVariants({ variant: "outline", size: "sm" })}>
                      Server repo ↗
                    </a>
                  )}
                </div>
              </div>

              <div
                className="relative border-t md:border-t-0 md:border-l border-border-soft min-h-[220px] flex items-center justify-center p-8"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(124,158,255,0.10), transparent 60%), radial-gradient(circle at 80% 80%, rgba(242,169,59,0.10), transparent 55%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full max-w-[280px]">
                    <div className="rounded-t-xl border border-border-soft bg-surface-2 flex items-center gap-1.5 px-3 py-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3A4058]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3A4058]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3A4058]" />
                    </div>
                    <div className="rounded-b-xl border border-t-0 border-border-soft bg-surface p-4 space-y-2">
                      <div className="h-3 w-2/3 rounded bg-surface-2" />
                      <div className="h-16 rounded bg-surface-2" />
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded bg-surface-2" />
                        <div className="h-8 flex-1 rounded bg-surface-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
