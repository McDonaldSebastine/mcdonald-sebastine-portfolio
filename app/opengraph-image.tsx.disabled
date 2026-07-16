import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#DC2626", fontWeight: 700 }}>
          McDonald Sebastine
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Executive Assistant & Customer Success Professional
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 24, color: "#a1a1aa" }}>
          Operations · CRM · Customer Success · Executive Support
        </div>
      </div>
    ),
    { ...size }
  );
}
