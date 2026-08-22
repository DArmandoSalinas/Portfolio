import { Reveal } from "./Reveal";

type Props = {
  label: string;
  title: string;
  lead?: string;
  meta?: React.ReactNode;
  id?: string;
};

export function SectionHead({ label, title, lead, meta, id }: Props) {
  return (
    <Reveal className="mb-12 sm:mb-14">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <p className="text-[13px] font-semibold tracking-[0.04em] text-signal">{label}</p>
        {meta && <p className="text-[13px] text-muted">{meta}</p>}
      </div>
      <h2 id={id} className="h2 mt-3 max-w-[20ch]">
        {title}
      </h2>
      {lead && <p className="lead mt-4 max-w-[46ch] text-muted">{lead}</p>}
    </Reveal>
  );
}
