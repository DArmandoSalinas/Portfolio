import { ChevronDown } from "./Icons";

type Props = {
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * A native <details> in the page's own grammar: the summary sits on the rule
 * like every section head, so folding something away never looks like an
 * afterthought bolted to the bottom.
 */
export function Disclosure({ label, title, children, className = "" }: Props) {
  return (
    <details className={`group ${className}`}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 border-t border-line py-6 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0">
          <span className="label block">{label}</span>
          <span className="mt-1.5 block text-[17px] font-semibold text-ink">
            {title}
          </span>
        </span>
        <span
          aria-hidden
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform duration-200 group-open:rotate-180 group-hover:border-ink group-hover:text-ink"
        >
          <ChevronDown className="text-[17px]" />
        </span>
      </summary>
      <div className="pb-4 pt-2">{children}</div>
    </details>
  );
}
