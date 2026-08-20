import { Ambient } from "./Ambient";
import { LogoHalo } from "./LogoHalo";
import { Portrait } from "./Portrait";
import { ArrowUpRight, DownloadIcon } from "./Icons";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        paddingTop: "calc(var(--nav-h) + var(--safe-top) + clamp(2rem, 6vw, 4rem))",
        paddingBottom: "clamp(3rem, 9vw, 6rem)",
      }}
    >
      <Ambient />

      <div className="shell relative z-[1] grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        {/* ── copy ── */}
        <div className="max-w-[34rem]">
          <div className="flex items-center gap-7 sm:gap-8">
            <LogoHalo size={54} />
            <div className="min-w-0">
              <p className="eyebrow !mb-1">{site.role}</p>
              <p className="truncate text-[13px] font-semibold text-muted">
                {site.name}
              </p>
            </div>
          </div>

          <h1 className="mt-8 text-[clamp(2.35rem,7.4vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-balance">
            Systems that
            <br />
            <span className="text-primary">don&apos;t improvise.</span>
          </h1>

          <p className="mt-6 max-w-[30rem] text-[17px] leading-[1.55] text-muted text-pretty">
            End-to-end machine learning — data, model, API, interface, cloud.
          </p>
          <p className="mt-2 max-w-[30rem] text-[17px] font-semibold leading-[1.55] text-ink text-pretty">
            MSc AI with Distinction · Generative AI at SAP · Founder of ARMATUS
          </p>

          <p className="mt-7 max-w-[31rem] text-[15.5px] leading-[1.6] text-ink/80 text-pretty">
            Predictive maintenance at{" "}
            <span className="font-semibold text-ink">16.74-cycle RMSE</span> on NASA
            C-MAPSS. Leak-free clinical classification at{" "}
            <span className="font-semibold text-ink">0.90 ROC-AUC</span>. Retrieval
            systems where every answer cites its source. A mechatronics foundation, an
            MSc in Artificial Intelligence with Distinction, and two products carried
            from first commit to real users.
          </p>

          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <a href="#projects" className="btn btn-primary">
              View work
            </a>
            <a href={site.cv} download className="btn btn-ghost">
              <DownloadIcon /> Download CV
            </a>
            <a
              href={site.links.armatus}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-text"
            >
              ARMATUS <ArrowUpRight />
            </a>
          </div>

          <p className="mt-7 text-[13px] leading-relaxed text-muted">
            {site.location} · {site.workAuth}
          </p>
        </div>

        {/* ── portrait ── */}
        <Portrait />
      </div>

      {/* ── protocol row ── */}
      <div className="shell relative z-[1] mt-14 sm:mt-20">
        <ul className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4 sm:gap-6">
          {site.protocol.map((p) => (
            <li key={p.num} className="step">
              <span className="step-num">{p.num}</span>
              <span className="step-label">{p.label}</span>
              <span className="text-[12.5px] leading-snug text-muted">{p.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
