import { ImageResponse } from "next/og";

import { DOCTOR } from "@/lib/content/doctor";
import { SITE_NAME } from "@/lib/content/site";

export const alt = `${SITE_NAME} — нейрохірург`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "#0d3b52",
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 600 }}>{SITE_NAME}</div>
        <div style={{ fontSize: 34, color: "#8fd6c7", marginTop: 16 }}>
          Нейрохірург
        </div>
        <div style={{ fontSize: 26, color: "#cfe3ea", marginTop: 32, maxWidth: 900 }}>
          {DOCTOR.specialization}
        </div>
      </div>
    ),
    { ...size }
  );
}
