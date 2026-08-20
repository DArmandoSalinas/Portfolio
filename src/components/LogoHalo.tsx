import Image from "next/image";

type Props = {
  /** Rendered size of the mark in px. Rings scale from it. */
  size?: number;
  className?: string;
  priority?: boolean;
  /** Hide the animated rings — used in the nav where the mark stands alone. */
  bare?: boolean;
};

/**
 * The ARMATUS mark inside concentric orange rings.
 * Ring geometry and timing come straight from `.logo-ring` / `.logo-core-glow`.
 */
export function LogoHalo({ size = 72, className = "", priority = false, bare = false }: Props) {
  const outer = Math.round(size * 1.85);
  const inner = Math.round(size * 1.42);

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {!bare && (
        <>
          <span
            aria-hidden
            className="logo-ring"
            style={{ width: outer, height: outer, left: (size - outer) / 2, top: (size - outer) / 2 }}
          />
          <span
            aria-hidden
            className="logo-ring logo-ring--inner"
            style={{ width: inner, height: inner, left: (size - inner) / 2, top: (size - inner) / 2 }}
          />
          <span aria-hidden className="logo-core-glow" />
        </>
      )}
      <Image
        src="/brand/icon-mark.webp"
        alt=""
        width={size}
        height={size}
        priority={priority}
        className="relative z-[2] h-full w-full object-contain"
      />
    </span>
  );
}
