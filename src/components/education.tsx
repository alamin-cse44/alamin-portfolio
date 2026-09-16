export function Education() {
  return (
    <section id="education" className="relative z-10 py-24 md:py-32 border-t border-border-soft">
      <div className="mx-auto max-w-6xl px-6 md:px-12 grid md:grid-cols-2 gap-8">
        <div className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft p-8 transition-transform hover:-translate-y-1">
          <p className="font-mono text-sm text-faint mb-4">
            <span className="text-accent2">./education</span>
          </p>
          <h3 className="font-display text-xl font-semibold">University of Asia Pacific</h3>
          <p className="text-muted mt-1">B.Sc. in Computer Science and Engineering</p>
          <div className="mt-5 flex items-center gap-6">
            <div>
              <p className="font-display text-2xl font-semibold">
                3.63<span className="text-base text-faint">/4.00</span>
              </p>
              <p className="text-xs font-mono text-faint mt-1">CGPA</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold">3×</p>
              <p className="text-xs font-mono text-faint mt-1">Dean&apos;s List</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border-soft">
            <p className="text-xs font-mono text-faint mb-2">PUBLICATION</p>
            <p className="text-muted">
              Bento Packaging Activity Recognition from Motion Capture Data — Springer
            </p>
          </div>
        </div>

        <div className="rounded-[14px] border border-border-soft bg-gradient-to-b from-surface to-bg-soft p-8 transition-transform hover:-translate-y-1">
          <p className="font-mono text-sm text-faint mb-4">
            <span className="text-accent2">./achievements</span>
          </p>
          <h3 className="font-display text-xl font-semibold mb-5">
            Competitive programming & courses
          </h3>
          <ul className="space-y-3 text-muted">
            {[
              ["Codeforces", "350+ problems solved"],
              ["CodeChef", "max rating 1407"],
              ["LeetCode", "active"],
              ["AtCoder", "active"],
              ["Web Development, Level 1 & 2", "Programming Hero"],
            ].map(([label, value], i, arr) => (
              <li
                key={label}
                className={`flex items-center justify-between ${
                  i < arr.length - 1 ? "border-b border-border-soft pb-3" : ""
                }`}
              >
                <span>{label}</span>
                <span className="font-mono text-[0.72rem] border border-border text-muted bg-white/[0.02] px-2.5 py-1 rounded-md">
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
