"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn btn-ghost !py-2.5 !text-[13px]"
    >
      Print
    </button>
  );
}
