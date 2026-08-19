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
          background: "#f7f1e6",
          color: "#3f7d82",
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
