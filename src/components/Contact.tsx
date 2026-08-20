import { Reveal } from "./Reveal";
import { LogoHalo } from "./LogoHalo";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";
import { site } from "@/data/site";

const CHANNELS = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: MailIcon,
    primary: true,
  },
  {
    label: "LinkedIn",
    value: "diego-armando-salinas",
    href: site.links.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "DArmandoSalinas",
    href: site.links.github,
    Icon: GitHubIcon,
  },
  { label: "Phone", value: site.phone, href: `tel:${site.phoneHref}`, Icon: PhoneIcon },
];

export function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden" aria-labelledby="contact-title">
      <div className="ambient" aria-hidden>
        <span
          className="ambient-orb"
          style={{ width: 460, height: 460, top: "-30%", left: "50%", opacity: 0.16 }}
        />
      </div>

      <div className="shell relative z-[1]">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <LogoHalo size={56} />
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title section-title--impact">
              Build the system. Stop improvising.
            </h2>
          </div>
        </Reveal>

        <Reveal index={1} className="mt-4">
          <p className="section-lead">
            Open to AI / ML engineering roles in Mexico and the United States.{" "}
            <span className="text-ink/90">{site.workAuth}.</span>
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {CHANNELS.map((c, i) => (
            <Reveal as="li" key={c.label} index={i}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card card-linkable group flex-row items-center gap-4 p-5"
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border text-[18px] transition-colors duration-240 ${
                    c.primary
                      ? "border-[var(--orange-border)] bg-[var(--orange-fill)] text-primary"
                      : "border-line text-muted group-hover:border-[var(--orange-border)] group-hover:text-primary"
                  }`}
                >
                  <c.Icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted">
                    {c.label}
                  </span>
                  <span className="block truncate text-[15px] font-semibold text-ink">
                    {c.value}
                  </span>
                </span>
                <ArrowUpRight className="shrink-0 text-[16px] text-muted transition-colors group-hover:text-primary" />
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal index={2} className="mt-10">
          <a
            href={site.links.armatus}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-linkable group flex-row items-center justify-between gap-6 p-6"
            style={{ borderColor: "var(--orange-border)" }}
          >
            <span>
              <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
                Founder product
              </span>
              <span className="mt-1 block text-[19px] font-extrabold tracking-[-0.025em] text-ink">
                ARMATUS — armatus.app
              </span>
              <span className="mt-1 block text-[13.5px] text-muted">
                La fuerza no se improvisa. Se arma.
              </span>
            </span>
            <ArrowUpRight className="shrink-0 text-[22px] text-primary transition-transform duration-240 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
