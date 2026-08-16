"use client";

import { useId, type SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

export function Avm({ animated = true, ...props }: VesselProps) {
  const id = useId();
  const glow = `${id}-glow`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 110" aria-hidden="true" {...props}>
      <defs>
        <filter id={glow} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* приносна артерія і відвідна вена */}
      <path d="M6,40 C50,40 80,52 110,58" fill="none" stroke="#e63946" strokeWidth={11} strokeLinecap="round" />
      <path d="M314,74 C270,74 240,64 212,58" fill="none" stroke="#1d9bf0" strokeWidth={11} strokeLinecap="round" />

      {/* клубок: світний підшар пульсує — показує надлишковий скид */}
      <g
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        opacity={0.5}
        filter={`url(#${glow})`}
        data-pulse=""
        className={animated ? "animate-vpulse" : undefined}
      >
        <path d="M112,58 C130,30 160,30 172,52 C182,70 206,72 212,58" stroke="#ff6b6b" />
        <path d="M112,58 C126,84 152,90 168,74 C184,58 204,66 212,58" stroke="#4dabf7" />
      </g>

      <g fill="none" strokeWidth={4.5} strokeLinecap="round">
        <path d="M112,58 C130,30 160,30 172,52 C182,70 206,72 212,58" stroke="#ff6b6b" />
        <path d="M112,58 C126,84 152,90 168,74 C184,58 204,66 212,58" stroke="#4dabf7" />
        <path d="M124,50 C144,44 150,72 168,64" stroke="#ff6b6b" />
        <path d="M134,76 C154,80 156,44 180,50" stroke="#4dabf7" />
        <path d="M150,36 C170,44 176,84 196,76" stroke="#ff6b6b" />
      </g>

      {/* потік: артерія → клубок → вена, без капілярів */}
      <path
        d="M6,40 C50,40 80,52 110,58 C130,30 160,30 172,52 C182,70 206,72 212,58 C240,64 270,74 314,74"
        fill="none"
        stroke="#ffe3e3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="18 300"
        opacity={0.85}
        data-flow=""
        className={animated ? "animate-vflow-fast" : undefined}
      />
    </svg>
  );
}
