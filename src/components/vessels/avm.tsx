"use client";

import { useId, type SVGProps } from "react";

import { cn } from "@/lib/utils";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Два потоки прошивають клубок і зливаються у вену під артеріальним тиском. */
export function Avm({ animated = true, className, ...props }: VesselProps) {
  const id = useId();
  const soft = `${id}-soft`;
  const a = (name: string) => (animated ? name : undefined);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 220"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
      {...props}
    >
      <defs>
        <filter id={soft} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* приносна артерія */}
      <path d="M8,74 C70,74 118,92 166,110" fill="none" stroke="#e63946" strokeWidth={30} strokeLinecap="round" opacity={0.18} filter={`url(#${soft})`} />
      <path d="M8,74 C70,74 118,92 166,110" fill="none" stroke="#e63946" strokeWidth={22} strokeLinecap="round" />

      {/* відвідна вена — розширюється під тиском, на який не розрахована */}
      <path
        d="M472,150 C410,150 362,132 314,114"
        fill="none"
        stroke="#1d9bf0"
        strokeWidth={34}
        strokeLinecap="round"
        opacity={0.18}
        filter={`url(#${soft})`}
        data-anim=""
        className={a("origin-center animate-wall-pulse-fast")}
      />
      <path d="M472,150 C410,150 362,132 314,114" fill="none" stroke="#1d9bf0" strokeWidth={24} strokeLinecap="round" />

      {/* клубок: світний підшар мерехтить — нерівномірний скид */}
      <g
        fill="none"
        strokeWidth={12}
        strokeLinecap="round"
        opacity={0.4}
        filter={`url(#${soft})`}
        data-anim=""
        className={a("animate-nidus-flicker")}
      >
        <path d="M168,110 C196,58 250,58 268,98 C284,134 306,138 314,114" stroke="#ff6b6b" />
        <path d="M168,110 C190,166 240,178 268,146 C296,114 306,130 314,114" stroke="#4dabf7" />
      </g>
      <g fill="none" strokeWidth={7} strokeLinecap="round">
        <path d="M168,110 C196,58 250,58 268,98 C284,134 306,138 314,114" stroke="#ff6b6b" />
        <path d="M168,110 C190,166 240,178 268,146 C296,114 306,130 314,114" stroke="#4dabf7" />
        <path d="M188,94 C222,82 232,148 268,132" stroke="#ff6b6b" strokeWidth={5} />
        <path d="M204,152 C238,160 240,72 282,84" stroke="#4dabf7" strokeWidth={5} />
        <path d="M228,68 C262,82 272,158 302,144" stroke="#ff6b6b" strokeWidth={5} />
      </g>

      {/* два шляхи скиду — швидше, ніж мало б бути */}
      <path
        d="M8,74 C70,74 118,92 166,110 C196,58 250,58 268,98 C284,134 306,138 314,114 C362,132 410,150 472,150"
        fill="none"
        stroke="#fff3f3"
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray="26 74"
        opacity={0.9}
        data-anim=""
        className={a("animate-flow-rush")}
      />
      <path
        d="M8,74 C70,74 118,92 166,110 C190,166 240,178 268,146 C296,114 306,130 314,114 C362,132 410,150 472,150"
        fill="none"
        stroke="#eef7ff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray="18 96"
        opacity={0.8}
        data-anim=""
        className={a("animate-flow-fast")}
      />
    </svg>
  );
}
