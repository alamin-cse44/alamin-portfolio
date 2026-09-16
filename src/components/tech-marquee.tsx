import { techMarquee } from "@/data/skills";

export function TechMarquee() {
  const doubled = [...techMarquee, ...techMarquee];
  return (
    <div className="mt-24 overflow-hidden border-y border-border-soft py-5 group">
      <div className="flex gap-12 w-max animate-scroll-x group-hover:[animation-play-state:paused]">
        {doubled.map((t, i) => (
          <span key={i} className="font-mono text-sm text-faint whitespace-nowrap">
            {t}
            <span className="text-accent ml-12">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
