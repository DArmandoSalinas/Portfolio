import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const alt = "Diego Armando Salinas";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e5a8a",
          color: "#ffffff",
          fontSize: 64,
          fontWeight: 600,
          letterSpacing: "-0.04em",
        }}
      >
        DS
      </div>
    ),
    size,
  );
}
