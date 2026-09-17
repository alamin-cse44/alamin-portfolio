import Image from "next/image";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative z-10 py-24 md:py-32 border-t border-border-soft"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="font-mono text-sm text-faint mb-4">
          <span className="text-accent2">./certifications</span>
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Certificates & recommendations
        </h2>
        <p className="text-muted max-w-lg mb-14">
          Documented recognition from employers and course providers.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full border-b border-border-soft bg-white p-3">
                <Image
                  src={c.image}
                  alt={`${c.title} from ${c.issuer}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain p-3"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">
                  {c.title}
                </h3>
                <p className="text-sm text-accent2 font-mono mt-1">
                  {c.issuer}
                </p>
                <p className="text-sm text-muted mt-3 leading-relaxed">
                  {c.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
