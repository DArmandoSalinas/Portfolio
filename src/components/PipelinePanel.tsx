const STAGES = [
  { num: "01", label: "Signal", note: "PPG · vibration · sensors · text · tabular" },
  { num: "02", label: "Features", note: "Filtering, time / frequency / non-linear" },
  { num: "03", label: "Model", note: "XGBoost · RF · SVR · neural nets · LLMs" },
  { num: "04", label: "Explain", note: "SHAP, LIME, honest validation splits" },
  { num: "05", label: "Serve", note: "FastAPI · Streamlit · iOS · Cloud Run" },
];

/**
 * Architecture panel used in place of a device mockup — the site has no
 * real app screenshots to show, so it shows the shape of the work instead.
 */
export function PipelinePanel() {
  return (
    <div className="card overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-muted">
          The path, every time
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Live
        </span>
      </div>

      <ol className="divide-y divide-line/70">
        {STAGES.map((s) => (
          <li
            key={s.num}
            className="group flex items-baseline gap-4 px-5 py-3.5 transition-colors duration-240 hover:bg-elevated/60"
          >
            <span className="w-6 shrink-0 text-[11px] font-extrabold tabular-nums tracking-[0.14em] text-primary">
              {s.num}
            </span>
            <span className="w-[5.5rem] shrink-0 text-[15px] font-bold tracking-[-0.01em] text-ink">
              {s.label}
            </span>
            <span className="min-w-0 flex-1 text-[12.5px] leading-snug text-muted">
              {s.note}
            </span>
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-3 divide-x divide-line/70 border-t border-line">
        {[
          { v: "16", l: "systems built" },
          { v: "62", l: "study participants" },
          { v: "0.90", l: "best clinical AUC" },
        ].map((m) => (
          <div key={m.l} className="px-3 py-4 text-center">
            <div className="metric-value">{m.v}</div>
            <div className="metric-label">{m.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
