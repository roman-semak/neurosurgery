import type { SVGProps } from "react";

export function Stenosis(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 110"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8,40 L124,40 C150,40 150,52 170,52 C190,52 190,40 216,40 L312,40"
        fill="none"
        stroke="#e63946"
        strokeWidth={3.5}
      />
      <path
        d="M8,74 L124,74 C150,74 150,62 170,62 C190,62 190,74 216,74 L312,74"
        fill="none"
        stroke="#e63946"
        strokeWidth={3.5}
      />
      <path
        d="M8,57 L312,57"
        fill="none"
        stroke="#ff6b6b"
        strokeWidth={26}
        opacity={0.28}
      />
      <path
        d="M126,44 C148,44 150,54 168,54 C188,54 190,44 214,44 L214,70 C190,70 188,60 168,60 C150,60 148,70 126,70 Z"
        fill="#0a2540"
        opacity={0.55}
      />
      <path d="M170,18 L170,34" stroke="#5dcaa5" strokeWidth={2.5} strokeLinecap="round" />
      <path
        d="M164,30 L170,36 L176,30"
        fill="none"
        stroke="#5dcaa5"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
