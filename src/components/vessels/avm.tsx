import type { SVGProps } from "react";

export function Avm(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 110"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6,40 C50,40 80,52 110,58"
        fill="none"
        stroke="#e63946"
        strokeWidth={11}
        strokeLinecap="round"
      />
      <path
        d="M314,74 C270,74 240,64 212,58"
        fill="none"
        stroke="#1d9bf0"
        strokeWidth={11}
        strokeLinecap="round"
      />
      <g fill="none" strokeWidth={4.5} strokeLinecap="round">
        <path d="M112,58 C130,30 160,30 172,52 C182,70 206,72 212,58" stroke="#ff6b6b" />
        <path d="M112,58 C126,84 152,90 168,74 C184,58 204,66 212,58" stroke="#4dabf7" />
        <path d="M124,50 C144,44 150,72 168,64" stroke="#ff6b6b" />
        <path d="M134,76 C154,80 156,44 180,50" stroke="#4dabf7" />
        <path d="M150,36 C170,44 176,84 196,76" stroke="#ff6b6b" />
      </g>
    </svg>
  );
}
