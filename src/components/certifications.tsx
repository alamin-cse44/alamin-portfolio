import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-24 md:py-32 border-t border-border-soft">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="font-mono text-sm text-faint mb-4">
          <span className="text-accent2">./certifications</span>
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Certificates & recommendations
        </h2>
        <p className="text-muted max-w-lg mb-14">
          Documented recognition from employers and course providers. Certificate images can be
          attached to each card once available.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft p-6 flex gap-4 transition-transform hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-[10px] flex items-center justify-center bg-accent/10 border border-accent/25 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2H16L20 6V22H4V6L8 2Z" stroke="#F2A93B" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8 12L11 15L16 9" stroke="#F2A93B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-accent2 font-mono mt-1">{c.issuer}</p>
                <p className="text-sm text-muted mt-3 leading-relaxed">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
