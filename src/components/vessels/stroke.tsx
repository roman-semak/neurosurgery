"use client";

import type { SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

export function Stroke({ animated = true, ...props }: VesselProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 110" aria-hidden="true" {...props}>
      <path d="M6,55 C60,55 100,50 140,50" fill="none" stroke="#e63946" strokeWidth={11} strokeLinecap="round" />
      <path
        d="M6,55 C60,55 100,50 136,50"
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="16 70"
        opacity={0.8}
        data-flow=""
        className={animated ? "animate-vflow-fast" : undefined}
      />

      <path d="M140,50 C180,50 206,32 250,26" fill="none" stroke="#e63946" strokeWidth={8} strokeLinecap="round" opacity={0.22} />
      <path d="M140,50 C180,50 206,70 250,84" fill="none" stroke="#e63946" strokeWidth={8} strokeLinecap="round" opacity={0.22} />

      <ellipse
        cx={140}
        cy={50}
        rx={13}
        ry={11}
        fill="#93a0a6"
        data-pulse=""
        className={animated ? "animate-vpulse-slow" : undefined}
      />

      <circle cx={250} cy={26} r={4} fill="#93a0a6" opacity={0.5} />
      <circle cx={250} cy={84} r={4} fill="#93a0a6" opacity={0.5} />
    </svg>
  );
}
