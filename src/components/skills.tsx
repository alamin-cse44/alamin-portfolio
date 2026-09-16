import { Badge } from "@/components/ui/badge";
import { coreStack, skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 md:py-32 border-t border-border-soft">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="font-mono text-sm text-faint mb-4">
          <span className="text-accent2">./skills</span>
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          What I build with
        </h2>
        <p className="text-muted max-w-lg mb-14">
          Grouped the way I actually reach for them on a project — language, framework, data layer,
          tooling.
        </p>

        <div className="space-y-3 mb-16">
          {coreStack.map((s) => (
            <div
              key={s.label}
              className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
            >
              <div className="sm:w-64 flex items-center gap-3 flex-shrink-0">
                <span className="text-ink font-medium">{s.label}</span>
                <Badge variant={s.level === "Advanced" ? "advanced" : "proficient"}>
                  {s.level}
                </Badge>
              </div>
              <p className="text-sm text-muted leading-relaxed">{s.context}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft p-5 transition-transform hover:-translate-y-1"
            >
              <p className="font-mono text-xs text-accent2 mb-3">{g.title}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
