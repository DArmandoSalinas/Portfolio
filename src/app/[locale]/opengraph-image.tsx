import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { isLocale } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { getUi } from "@/i18n/ui";

export const alt = `${site.displayName} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function inter(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8)" } },
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const { site: copy } = getContent(locale);
  const t = getUi(locale);

  const [semi, regular] = await Promise.all([inter(600), inter(400)]);
  const fonts = [
    semi && { name: "Inter", data: semi, weight: 600 as const, style: "normal" as const },
    regular && { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 600 | 400; style: "normal" }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#e2e4e8",
          padding: "72px 80px",
          fontFamily: fonts.length ? "Inter" : "sans-serif",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 600, color: "#1e5a8a" }}>{copy.role}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#141a22",
              lineHeight: 1.05,
            }}
          >
            {site.displayName}
          </div>
          <div style={{ fontSize: 24, color: "#5a616b", marginTop: 20, maxWidth: 780 }}>
            {t.ogLine}
          </div>
        </div>
        <div style={{ display: "flex", gap: 36, color: "#5a616b", fontSize: 20 }}>
          <span>SAP</span>
          <span>ARMATUS</span>
          <span>{t.ogMsc}</span>
          <span>Monterrey</span>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
