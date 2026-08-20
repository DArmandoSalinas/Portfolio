type Orb = { size: number; top: string; left: string; delay: string; opacity: number };

const ORBS: Orb[] = [
  { size: 520, top: "-18%", left: "-8%", delay: "0s", opacity: 0.3 },
  { size: 380, top: "22%", left: "72%", delay: "-3.2s", opacity: 0.2 },
  { size: 300, top: "68%", left: "12%", delay: "-5.5s", opacity: 0.14 },
];

/** Blurred orange field behind the hero. Decorative only. */
export function Ambient({ grid = true }: { grid?: boolean }) {
  return (
    <div className="ambient" aria-hidden>
      {grid && <div className="grid-veil" />}
      {ORBS.map((o, i) => (
        <span
          key={i}
          className="ambient-orb"
          style={{
            width: o.size,
            height: o.size,
            top: o.top,
            left: o.left,
            opacity: o.opacity,
            animationDelay: o.delay,
          }}
        />
      ))}
    </div>
  );
}
