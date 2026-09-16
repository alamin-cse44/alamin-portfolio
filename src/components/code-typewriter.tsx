"use client";

import { useEffect, useRef, useState } from "react";

type Segment = { t: string; c: string };

const codeLines: Segment[][] = [
  [{ t: "const ", c: "tok-kw" }, { t: "developer", c: "" }, { t: " = {", c: "tok-punc" }],
  [{ t: "  name", c: "" }, { t: ": ", c: "tok-punc" }, { t: "'Al Amin'", c: "tok-str" }, { t: ",", c: "tok-punc" }],
  [{ t: "  role", c: "" }, { t: ": ", c: "tok-punc" }, { t: "'Software Developer'", c: "tok-str" }, { t: ",", c: "tok-punc" }],
  [
    { t: "  stack", c: "" },
    { t: ": [", c: "tok-punc" },
    { t: "'Next.js'", c: "tok-str" },
    { t: ", ", c: "tok-punc" },
    { t: "'Node.js'", c: "tok-str" },
    { t: ", ", c: "tok-punc" },
    { t: "'TypeScript'", c: "tok-str" },
    { t: "],", c: "tok-punc" },
  ],
  [{ t: "  focus", c: "" }, { t: ": ", c: "tok-punc" }, { t: "'full-stack, production-ready'", c: "tok-str" }, { t: ",", c: "tok-punc" }],
  [{ t: "  available", c: "" }, { t: ": ", c: "tok-punc" }, { t: "true", c: "tok-fn" }],
  [{ t: "};", c: "tok-punc" }],
  [{ t: "", c: "" }],
  [{ t: "// let's build something.", c: "tok-com" }],
];

export function CodeTypewriter() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function renderStatic() {
      if (!container) return;
      container.innerHTML = codeLines
        .map(
          (line) =>
            `<div class="whitespace-pre">${line
              .map((seg) => `<span class="${seg.c}">${seg.t}</span>`)
              .join("")}</div>`
        )
        .join("");
    }

    if (reduceMotion) {
      renderStatic();
      setDone(true);
      return;
    }

    let cancelled = false;
    async function typewrite() {
      if (!container) return;
      container.innerHTML = "";
      for (const line of codeLines) {
        if (cancelled) return;
        const lineEl = document.createElement("div");
        lineEl.className = "whitespace-pre";
        container.appendChild(lineEl);
        for (const seg of line) {
          const span = document.createElement("span");
          span.className = seg.c;
          lineEl.appendChild(span);
          for (const ch of seg.t) {
            if (cancelled) return;
            span.textContent += ch;
            await new Promise((r) => setTimeout(r, 8));
          }
        }
      }
      setDone(true);
    }
    typewrite();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={ref}
      className="p-6 font-mono text-[13px] md:text-sm leading-7 min-h-[260px]"
      aria-label="code preview"
    >
      {done && <span className="inline-block w-2 h-[1.05em] bg-accent align-text-bottom ml-0.5 animate-blink" />}
    </div>
  );
}
