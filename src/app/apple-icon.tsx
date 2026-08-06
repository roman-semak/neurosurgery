import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#0d3b52",
          color: "#8fd6c7",
          fontSize: 96,
          fontWeight: 700,
        }}
      >
        Н
      </div>
    ),
    { ...size }
  );
}
