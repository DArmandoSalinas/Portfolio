"use client";

import { useI18n } from "@/i18n/context";

export function PrintButton() {
  const { t } = useI18n();
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn btn-ghost !py-2.5 !text-[13px]"
    >
      {t.print}
    </button>
  );
}
