# Al Amin — Portfolio (Next.js + Tailwind + shadcn-style UI)

A modern, premium developer portfolio built with:

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling, with custom design tokens (see `tailwind.config.ts`)
- **shadcn/ui-style components** (`Button`, `Badge`, `Card` in `src/components/ui/`) using
  `class-variance-authority` + `tailwind-merge` — the same pattern shadcn generates, hand-written
  here so the project has zero extra CLI setup. You can still run `npx shadcn@latest add <component>`
  any time (this project includes a `components.json` so the CLI recognizes it) to pull in more
  official shadcn primitives (dialog, tabs, accordion, etc.).
- **next/font** for Space Grotesk, Inter and JetBrains Mono (no external font requests at runtime).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata, global background layers
    page.tsx           # assembles every section
    globals.css         # Tailwind directives + a few global effects (grid backdrop, glow)
  components/
    navbar.tsx
    hero.tsx
    code-typewriter.tsx  # the animated "developer.ts" code panel (client component)
    tech-marquee.tsx
    about.tsx             # <- your photo goes here, see below
    skills.tsx
    experience.tsx
    projects.tsx
    client-work.tsx
    education.tsx
    certifications.tsx
    contact.tsx
    footer.tsx
    ui/
      button.tsx
      badge.tsx
      card.tsx
  data/
    skills.ts
    experience.ts
    projects.ts
    client-work.ts
    certifications.ts
  lib/
    utils.ts            # the `cn()` class-merge helper
```

## Editing content

Everything text-based lives in `src/data/*.ts` as plain typed objects/arrays. Edit those files —
no JSX/HTML editing required to add a project, a job, a skill, or a certificate.

## Adding your photo

Drop a photo at `public/profile.jpg` (or update the path in `src/components/about.tsx`). It's
already wired up with a graceful fallback to a monogram placeholder if the file is missing.

## Filling in real links

A few links are placeholders (`#`) because the original resume PDF didn't carry real hyperlinks
for GitHub/LinkedIn/live-project URLs:

- `src/components/navbar.tsx` / `contact.tsx` — GitHub, LinkedIn
- `src/data/projects.ts` — each project's `live`, `client`, `server` links
- `src/data/certifications.ts` — certificate `url` fields (link to an image or PDF once you have one)

## Deploying

This is a standard Next.js app — deploy directly to Vercel:

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo to Vercel's dashboard for automatic deploys on push.
