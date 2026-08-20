import { Reveal } from "./Reveal";

const GENERIC = [
  "A wall of tool logos with no evidence attached.",
  "Notebooks that never left the laptop.",
  "Accuracy quoted once, on the split that flattered it.",
  "“Passionate about leveraging cutting-edge AI.”",
];

const THIS = [
  "Pipelines with the deployment URL still live.",
  "APIs, dashboards and an iOS app in real hands.",
  "Test-set numbers — plus the site where the model got worse.",
  "Founder of a shipped product, not a course project.",
];

export function Principle() {
  return (
    <section className="section" aria-labelledby="principle-title">
      <div className="shell">
        <Reveal className="mb-10 max-w-[36rem] sm:mb-12">
          <p className="eyebrow">Principle</p>
          <h2 id="principle-title" className="section-title section-title--impact">
            Evidence. Not adjectives.
          </h2>
          <span className="brand-underline" aria-hidden />
          <p className="section-lead">
            Most portfolios list tools. This one shows the pipeline, the metric, and
            the URL where it runs.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <Reveal index={1} className="border-l-2 border-line py-5 pl-5 pr-2">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.16em] text-muted">
              Generic portfolio
            </p>
            <ul className="space-y-2.5">
              {GENERIC.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-snug text-muted">
                  <span aria-hidden className="mt-[0.55em] h-px w-3 shrink-0 bg-faint" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            index={2}
            className="hidden items-center justify-center text-[11px] font-black tracking-[0.2em] text-primary md:flex"
          >
            <span
              className="rounded-full border px-3 py-2"
              style={{
                borderColor: "var(--orange-border)",
                background: "var(--orange-fill)",
                textShadow: "0 0 16px rgba(255,107,53,0.45)",
              }}
            >
              VS
            </span>
          </Reveal>

          <Reveal index={3} className="overflow-hidden rounded-r-[var(--radius-lg)]">
            <div
              className="border-l-2 border-primary py-5 pl-5 pr-4"
              style={{
                background:
                  "linear-gradient(90deg, var(--orange-fill) 0%, transparent 72%)",
              }}
            >
              <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.16em] text-primary">
                This one
              </p>
              <ul className="space-y-2.5">
                {THIS.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-snug text-ink">
                    <span aria-hidden className="mt-[0.55em] h-px w-3 shrink-0 bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
