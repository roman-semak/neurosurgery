"use client";

import type { SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Мікрохірургія: кліпса перекриває шийку аневризми. */
export function MicrosurgicalClip({ animated = true, ...props }: VesselProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" aria-hidden="true" {...props}>
      <path
        d="M6,80 C80,80 120,74 160,66"
        fill="none"
        stroke="#e63946"
        strokeWidth={22}
        strokeLinecap="round"
        opacity={0.2}
        data-pulse=""
        className={animated ? "animate-vpulse-slow" : undefined}
      />
      <path
        d="M6,80 C80,80 120,74 160,66 C210,56 260,60 314,54"
        fill="none"
        stroke="#e63946"
        strokeWidth={12}
        strokeLinecap="round"
      />

      {/* виключений мішечок — блідне, бо вимкнений із кровотоку */}
      <path d="M146,60 C146,26 190,26 186,58" fill="#ff6b6b" opacity={0.45} stroke="#ff6b6b" strokeWidth={3} />

      {/* бранші кліпси */}
      <g stroke="#c5d8e8" strokeWidth={5} strokeLinecap="round">
        <path d="M140,58 L192,52" />
        <path d="M140,68 L192,62" />
        <path d="M192,52 L214,44" />
        <path d="M192,62 L214,70" />
      </g>

      <circle
        cx={166}
        cy={40}
        r={20}
        fill="none"
        stroke="#5dcaa5"
        strokeWidth={1.5}
        strokeDasharray="4 6"
        opacity={0.7}
        data-flow=""
        className={animated ? "animate-vflow-slow" : undefined}
      />
    </svg>
  );
}
