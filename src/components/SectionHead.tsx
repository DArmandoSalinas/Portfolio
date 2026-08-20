import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  impact?: boolean;
  /** Right-hand slot — counts, links, controls. */
  aside?: React.ReactNode;
};

export function SectionHead({ eyebrow, title, lead, impact, aside }: Props) {
  return (
    <Reveal className="mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-[36rem]">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className={impact ? "section-title section-title--impact" : "section-title"}>
          {title}
        </h2>
        <span className="brand-underline" aria-hidden />
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {aside && <div className="shrink-0 md:pb-1">{aside}</div>}
    </Reveal>
  );
}
