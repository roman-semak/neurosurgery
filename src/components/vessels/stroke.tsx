import type { SVGProps } from "react";

export function Stroke(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 110"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6,55 C60,55 100,50 140,50"
        fill="none"
        stroke="#e63946"
        strokeWidth={11}
        strokeLinecap="round"
      />
      <path
        d="M140,50 C180,50 206,32 250,26"
        fill="none"
        stroke="#e63946"
        strokeWidth={8}
        strokeLinecap="round"
        opacity={0.22}
      />
      <path
        d="M140,50 C180,50 206,70 250,84"
        fill="none"
        stroke="#e63946"
        strokeWidth={8}
        strokeLinecap="round"
        opacity={0.22}
      />
      <ellipse cx={140} cy={50} rx={13} ry={11} fill="#7a9cb5" />
      <circle cx={250} cy={26} r={4} fill="#7a9cb5" opacity={0.5} />
      <circle cx={250} cy={84} r={4} fill="#7a9cb5" opacity={0.5} />
    </svg>
  );
}
