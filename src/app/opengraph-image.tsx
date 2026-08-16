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
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px 80px",
          background:
            "linear-gradient(135deg, #06192e 0%, #0a2540 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#5dcaa5",
            }}
          >
            Нейрохірург
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 700,
              color: "white",
              marginTop: 24,
              lineHeight: 1.15,
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#5dcaa5",
              marginTop: 28,
              maxWidth: 620,
              lineHeight: 1.4,
            }}
          >
            {DOCTOR.specialization}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 240,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 170,
              height: 170,
              borderRadius: "50%",
              background: "#5dcaa5",
            }}
          />
          <div
            style={{
              display: "flex",
              width: 240,
              height: 150,
              borderRadius: "120px 120px 0 0",
              background: "#5dcaa5",
              marginTop: -46,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
