# Diego Armando Salinas Lugo — Portfolio

Personal site for an AI & Machine Learning engineer. Dark, architectural,
metric-led. The visual system is a deliberate sibling of
**[ARMATUS](https://www.armatus.app/)** — Diego's own product — reusing its
brand mark and design tokens as identity, not decoration.

**Live:** _add the Vercel URL here, then update `site.url` in `src/data/site.ts`._

---

## Stack

| Concern   | Choice                                             |
| --------- | -------------------------------------------------- |
| Framework | Next.js 16 (App Router) + React 19 + TypeScript     |
| Styling   | Tailwind CSS v4, ARMATUS tokens via `@theme inline` |
| Motion    | Framer Motion (filters, lightbox) + CSS reveals     |
| Hosting   | Vercel (static export of every route)               |

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — the Next.js preset is
   detected automatically; no environment variables are required.
3. After the first deploy, set `site.url` in `src/data/site.ts` to the real
   domain so canonical URLs, `sitemap.xml`, `robots.txt` and Open Graph tags
   point at the right place.

---

## Editing content

All copy lives in `src/data/` — no component edits needed for routine updates.

| File                 | Controls                                              |
| -------------------- | ----------------------------------------------------- |
| `site.ts`            | Name, headline, contact, links, nav, hero protocol row |
| `experience.ts`      | The four numbered roles                                |
| `projects.ts`        | Featured + archive projects, filters, "Earlier work"   |
| `certifications.ts`  | Every credential, grouped; `featured: true` picks the hero cert |
| `education.ts`       | Degrees and coursework                                 |
| `stack.ts`           | Grouped tooling, plus the "How I work" principles      |
| `resume.ts`          | The CV — kept separate so the PDF can be tuned alone   |

## The résumé PDF

`/resume` is a real page with a print stylesheet; the PDF is rendered *from it*,
so the two can never drift apart.

```bash
npm run cv     # builds, serves, prints /resume with headless Chrome
```

Output: `public/resume/Diego-Armando-Salinas-Lugo-CV.pdf` (3 pages, Letter).
Without Chrome installed, open `/resume` and use **Print → Save as PDF** to the
same path.

## Certificate images

See [`public/certs/README.md`](public/certs/README.md). Cards render a
self-documenting drop-zone naming the exact filename they want until the image
is added, so the grid never collapses.

---

## Design system

Tokens are mirrored from
[`ARMATUSWebPage/styles.css`](https://github.com/DArmandoSalinas/ARMATUSWebPage/blob/main/styles.css)
and defined in `src/app/globals.css`.

```
background #000000   surface  #1C1C1E   surface-elevated #2C2C2E   border #38383A
primary    #FF6B35   deep     #E04A12   soft             #FFB48A
text       #FFFFFF   secondary #8E8E93  tertiary         #48484A
```

- **Type** — system UI stack (SF Pro / Segoe / Roboto), 17px body, 1.5 line-height.
- **Radius** — 8 / 12 / 16 / 24. **Max width** — 1120px.
- **Rhythm** — `clamp(4.25rem, 11vw, 8rem)` between sections.
- **Motion** — 160 / 240 / 360ms on `cubic-bezier(0.33, 1, 0.68, 1)`.
- **Orange is scarce** — CTAs, numbers, active filters, underlines, the logo halo.

### Two decisions worth knowing

**Reveals are CSS, not `whileInView`.** Motion-library scroll reveals ship
`opacity: 0` in the SSR HTML, so a slow hydration or a JS failure leaves a blank
page. Here the markup renders visible and a tiny pre-paint script in
`src/lib/revealBoot.ts` opts into the hidden state — only after confirming it can
also undo it. Reduced motion and missing `IntersectionObserver` skip it entirely,
and a 1.5s failsafe un-hides anything still above the fold. Framer Motion is kept
for the work it is actually good at: filter transitions and the lightbox.

**Contrast.** `--text-tertiary` (#48484A) is 2.30:1 on black and fails WCAG AA,
so it is used only for `aria-hidden` separators and decorative glyphs. Anything
a reader needs uses `--text-secondary` (6.44:1) or brighter.

## Accessibility

Semantic landmarks, a skip link, visible focus rings, labelled controls,
`aria-pressed` filters with a live region, keyboard- and Escape-dismissable
lightbox, and full `prefers-reduced-motion` support.

---

© Diego Armando Salinas Lugo · _La fuerza no se improvisa. Se arma._
