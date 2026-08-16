"use client";

import type { SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Ендоваскулярний доступ: катетер просувається судиною до цілі. */
export function EndovascularAccess({ animated = true, ...props }: VesselProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" aria-hidden="true" {...props}>
      {/* просвіт судини */}
      <path
        d="M6,96 C70,96 110,80 150,60 C186,42 230,34 314,34"
        fill="none"
        stroke="#e63946"
        strokeWidth={24}
        strokeLinecap="round"
        opacity={0.25}
      />
      {/* стінки */}
      <path d="M6,96 C70,96 110,80 150,60 C186,42 230,34 314,34" fill="none" stroke="#e63946" strokeWidth={2.5} strokeLinecap="round" opacity={0.9} />
      <path d="M6,108 C70,108 112,92 152,72 C188,54 230,46 314,46" fill="none" stroke="#e63946" strokeWidth={2.5} strokeLinecap="round" opacity={0.9} />

      {/* катетер: dashoffset тягне кінчик уперед */}
      <path
        d="M10,102 C74,102 112,86 152,66 C190,48 236,40 268,40"
        fill="none"
        stroke="#5dcaa5"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray="300 40"
        data-flow=""
        className={animated ? "animate-vflow-fast" : undefined}
      />
      {/* кінчик і встановлена спіраль */}
      <circle cx={268} cy={40} r={6} fill="#5dcaa5" data-pulse="" className={animated ? "animate-vpulse" : undefined} />
      <path
        d="M282,24 C296,20 302,32 292,38 C284,43 288,26 278,30"
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}
