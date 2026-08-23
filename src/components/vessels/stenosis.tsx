"use client";

import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Товстий потік до бляшки, розігнаний у звуженні, рідкий після нього. */
export function Stenosis({ animated = true, className, ...props }: VesselProps) {
  const a = (name: string) => (animated ? name : undefined);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 220"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
      {...props}
    >
      {/* стінки */}
      <path d="M10,66 L188,66 C228,66 228,92 254,92 C282,92 282,66 322,66 L470,66" fill="none" stroke="#e63946" strokeWidth={6} strokeLinecap="round" />
      <path d="M10,154 L188,154 C228,154 228,128 254,128 C282,128 282,154 322,154 L470,154" fill="none" stroke="#e63946" strokeWidth={6} strokeLinecap="round" />

      {/* просвіт; перед звуженням наростає тиск */}
      <path d="M10,110 L470,110" fill="none" stroke="#ff6b6b" strokeWidth={82} opacity={0.2} />
      <path
        d="M10,110 L188,110"
        fill="none"
        stroke="#ff6b6b"
        strokeWidth={82}
        opacity={0.35}
        data-anim=""
        className={a("animate-pressure")}
      />

      {/* атеросклеротична бляшка */}
      <path
        d="M190,70 C226,70 228,96 252,96 C280,96 282,70 320,70 L320,150 C282,150 280,124 252,124 C228,124 226,150 190,150 Z"
        fill="#d9c9a8"
        opacity={0.9}
      />
      <path d="M190,70 C226,70 228,96 252,96 C280,96 282,70 320,70" fill="none" stroke="#b9a179" strokeWidth={2.5} />
      <path d="M190,150 C226,150 228,124 252,124 C280,124 282,150 320,150" fill="none" stroke="#b9a179" strokeWidth={2.5} />

      {/* три режими потоку */}
      <path d="M10,110 L192,110" fill="none" stroke="#fff3f3" strokeWidth={14} strokeLinecap="round" strokeDasharray="40 46" opacity={0.9} data-anim="" className={a("animate-flow-fast")} />
      <path d="M196,110 L316,110" fill="none" stroke="#fff3f3" strokeWidth={6} strokeLinecap="round" strokeDasharray="20 40" opacity={0.85} data-anim="" className={a("animate-flow-jet")} />
      <path d="M320,110 L470,110" fill="none" stroke="#fff3f3" strokeWidth={7} strokeLinecap="round" strokeDasharray="16 130" opacity={0.6} data-anim="" className={a("animate-flow-starved")} />

      {/* маркер місця звуження */}
      <path d="M254,26 L254,52" stroke="#3f7d82" strokeWidth={3} strokeLinecap="round" />
      <path d="M246,46 L254,54 L262,46" fill="none" stroke="#3f7d82" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
