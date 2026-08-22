import { Disclosure } from "./Disclosure";
import { ArrowUpRight } from "./Icons";
import type { EarlierItem } from "@/data/projects";

export function EarlierWork({
  groups,
  label,
  title,
  openLabel,
}: {
  groups: { group: string; items: EarlierItem[] }[];
  label: string;
  title: string;
  openLabel: string;
}) {
  return (
    <Disclosure label={label} title={title}>
      <div className="grid gap-10 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.group}>
            <p className="label border-b border-line pb-2.5">{group.group}</p>
            <ul className="mt-1">
              {group.items.map((item) => (
                <li key={item.title} className="border-b border-line py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="text-[15.5px] font-medium text-ink">
                      {item.title}
                    </span>
                    <span className="readout text-[12px] text-muted">{item.tag}</span>
                  </div>
                  <p className="mt-1 text-[14px] leading-snug text-muted text-pretty">
                    {item.body}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-signal mt-2 inline-flex items-center gap-1 text-[13.5px]"
                    >
                      {openLabel} <ArrowUpRight className="text-[13px]" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Disclosure>
  );
}
