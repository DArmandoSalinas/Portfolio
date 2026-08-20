import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* ambient orange field */}
        <div
          style={{
            position: "absolute",
            top: -220,
            left: -140,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(255,107,53,0.34) 0%, rgba(224,74,18,0.10) 45%, rgba(0,0,0,0) 72%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            right: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(255,107,53,0.22) 0%, rgba(0,0,0,0) 68%)",
            display: "flex",
          }}
        />

        {/* halo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 9999,
              border: "3px dashed rgba(255,107,53,0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 9999,
                background: "linear-gradient(180deg, #ff8a5a 0%, #e04a12 100%)",
                display: "flex",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 6,
              color: "#8e8e93",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            AI &amp; Machine Learning Engineer
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.02,
              color: "#ffffff",
              display: "flex",
            }}
          >
            Systems that
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.02,
              color: "#ff6b35",
              display: "flex",
            }}
          >
            don&apos;t improvise.
          </div>
          <div
            style={{
              marginTop: 20,
              width: 96,
              height: 5,
              borderRadius: 3,
              background: "linear-gradient(90deg, #ff6b35, #ffb48a, #e04a12)",
              display: "flex",
            }}
          />
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 34, fontWeight: 700, color: "#ffffff", display: "flex" }}>
              {site.name}
            </div>
            <div style={{ fontSize: 24, color: "#8e8e93", display: "flex" }}>
              MSc AI with Distinction · SAP · Founder of ARMATUS
            </div>
          </div>
          <div style={{ fontSize: 22, color: "#48484a", display: "flex" }}>
            github.com/DArmandoSalinas
          </div>
        </div>
      </div>
    ),
    size,
  );
}
