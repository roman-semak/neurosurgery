"use client";

import type { SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

export function Stenosis({ animated = true, ...props }: VesselProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 110" aria-hidden="true" {...props}>
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
        d="M8,44 L124,44 C146,44 148,54 168,54 C188,54 190,44 216,44 L312,44 L312,70 L216,70 C190,70 188,60 168,60 C148,60 146,70 124,70 L8,70 Z"
        fill="#ff6b6b"
        opacity={0.28}
      />

      <path
        d="M8,57 L126,57"
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray="20 60"
        opacity={0.75}
        data-flow=""
        className={animated ? "animate-vflow-fast" : undefined}
      />
      <path
        d="M214,57 L312,57"
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="8 90"
        opacity={0.5}
        data-flow=""
        className={animated ? "animate-vflow-slow" : undefined}
      />

      <path d="M170,18 L170,34" stroke="#35696e" strokeWidth={2.5} strokeLinecap="round" />
      <path
        d="M164,30 L170,36 L176,30"
        fill="none"
        stroke="#35696e"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
