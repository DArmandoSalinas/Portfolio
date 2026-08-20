import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger index — 60ms each, capped so long lists stay snappy. */
  index?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Scroll reveal, mirroring the ARMATUS `.reveal.is-in` behaviour.
 *
 * Deliberately *not* a motion component: the markup renders visible, and the
 * inline boot script in the layout hides + observes it before first paint.
 * That keeps content readable without JS, without hydration, and without a
 * flash — the failure mode of `whileInView` is an invisible page.
 */
export function Reveal({ children, index = 0, className, as: Tag = "div" }: Props) {
  const delay = Math.min(index * 60, 360);
  return (
    <Tag
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
