# Diego Armando Salinas Lugo — Portfolio

Personal site for an AI & Machine Learning engineer. White paper, cobalt signal.
The register of a calibration lab: graph paper, a living waveform drawn from the
HRV and machine-health work, numbers you can audit.

**Live:** _add the Vercel URL here, then update `site.url` in `src/data/site.ts`._

---

## Stack

| Concern   | Choice                                          |
| --------- | ----------------------------------------------- |
| Framework | Next.js 16 (App Router) + React 19 + TypeScript  |
| Styling   | Tailwind CSS v4, tokens via `@theme inline`      |
| Type      | `next/font` — Syne, Source Sans 3, IBM Plex Mono |
| Motion    | CSS reveals + Framer Motion for the lightbox     |
| Hosting   | Vercel (every route prerendered)                |

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint
npm run shots        # headless Chrome screenshots of every section
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — the Next.js preset is
   detected automatically; no environment variables are required.
3. After the first deploy, set `site.url` in `src/data/site.ts` to the real
   domain so canonical URLs, `sitemap.xml`, `robots.txt` and Open Graph tags
   point at the right place.

---

## Page structure

Six sections, ordered by what a hiring manager needs first.

| Section       | What carries it                                                 |
| ------------- | --------------------------------------------------------------- |
| Hero          | Name, role, the bio in two beats, one primary CTA                |
| — proof rail  | Four marked points: SAP, ARMATUS, MSc Distinction, location      |
| Work          | Five case studies (problem / system / metrics), then all 17 behind a disclosure |
| Experience    | Four roles as two-column entries                                 |
| Credentials   | Education + certifications merged: four headline documents, every other scan in the archive |
| Toolkit       | Five tooling groups, one line each                               |
| Contact       | The email address at display size, CV, and the other channels    |

## Editing content

All copy lives in `src/data/` — no component edits needed for routine updates.

| File                | Controls                                                        |
| ------------------- | ---------------------------------------------------------------- |
| `site.ts`           | Name, role, `bio` paragraphs, contact, links, nav, hero proof rail |
| `experience.ts`     | The four roles                                                    |
| `projects.ts`       | All projects; `SPOTLIGHT_IDS` orders the five cases; `problem` + `brief`/`body` are the case copy |
| `certifications.ts` | Every credential, grouped                                         |
| `education.ts`      | The two degrees and their certificates                            |
| `stack.ts`          | Grouped tooling and the Coursera skill tracks                     |
| `resume.ts`         | The CV — kept separate so the PDF can be tuned alone              |

## The résumé PDF

`/resume` is a real page with a print stylesheet; the PDF is rendered *from it*,
so the two can never drift apart.

```bash
npm run cv     # builds, serves, prints /resume with headless Chrome
```

Output: `public/resume/Diego-Armando-Salinas-Lugo-CV.pdf` (Letter).
Without Chrome installed, open `/resume` and use **Print → Save as PDF** to the
same path.

## Certificate images

See [`public/certs/README.md`](public/certs/README.md). Tiles render a
self-documenting drop-zone naming the exact filename they want until the image
is added, so the grid never collapses.

---

## Design system

Tokens live in `src/app/globals.css`.

```
paper  #FFFFFF   wash  #F3F6FB   sunk  #EEF3FA     ← white paper, cool lab wash
ink    #0A1628   body  #3A4D63   slate #5A6F86
rule   #E2E8F0   strong #C5D0DE  control #8AA0B8
signal #1C4FE0   ← structure, interaction, and motion. The only accent.
```

- **Type** — Syne for display (name, titles), Source Sans 3 for reading, IBM Plex
  Mono for every measured number, label and year.
- **Radius** — 3 / 6 / 10px. Sharp enough to feel machined.
- **Max width** — 1180px. **Rhythm** — `clamp(3.75rem, 7.5vw, 6rem)` per section.
- **Depth** — a cool radial wash plus a faint graph-paper grid on `body`, fading
  out so it textures the hero and not the whole scroll. Sheets lift with a
  blue-tinted shadow.
- **Motion** — a load sequence (field up, content rises, PPG-shaped signal draws,
  portrait scan, rail ticks power on), a cobalt scroll-progress bar, section
  rules that draw as you reach them, and hover after that: plates lift, the
  accent bar runs the width of an entry, live dots pulse, link underlines draw
  in from the left. `prefers-reduced-motion` collapses all of it to instant.

### Four decisions worth knowing

**One colour does the work.** `--signal` (cobalt) marks structure, interaction
and motion: section ticks, the primary button, links, focus rings, the proof
marks, the live flags, the waveform. There is no second accent. Everything else
is ink, grey, and white.

**The waveform is the signature.** The hero trace is a photoplethysmogram-shaped
path — the same family of signal as the HRV thesis and the motor-health work —
drawn once on load. It is not a particle field.

**Sheets carry things, rules carry prose.** Projects and certificates sit on
raised plates because they are objects worth handling; experience, toolkit and
contact stay on hairline rules because they are text. Experience gets a spine
whose markers are filled for current roles and hollow for finished ones.

**Reveals are CSS, not `whileInView`.** Motion-library scroll reveals ship
`opacity: 0` in the SSR HTML, so a slow hydration or a JS failure leaves a blank
page. Here the markup renders visible and a tiny pre-paint script in
`src/lib/revealBoot.ts` opts into the hidden state — only after confirming it can
also undo it. Reduced motion and missing `IntersectionObserver` skip it entirely,
and a 1.5s failsafe un-hides anything still above the fold.

## Accessibility

Text pairs are set for WCAG AA on white (`--slate` is the dimmest reading colour).
Semantic landmarks, a skip link, visible focus rings, labelled controls,
`aria-pressed` filters with a live region, a keyboard- and Escape-dismissable
lightbox, and full `prefers-reduced-motion` support.

---

© Diego Armando Salinas Lugo
