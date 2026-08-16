"use client";

import { useId, type SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

export function Aneurysm({ animated = true, ...props }: VesselProps) {
  const id = useId();
  const glowA = `${id}-glowA`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 110" aria-hidden="true" {...props}>
      <defs>
        <filter id={glowA} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
          </feMerge>
        </filter>
      </defs>

      {/* світний підшар судини — пульсує */}
      <path
        d="M10,72 C70,72 96,66 120,60"
        fill="none"
        stroke="#e63946"
        strokeWidth={12}
        strokeLinecap="round"
        opacity={0.35}
        filter={`url(#${glowA})`}
        data-pulse=""
        className={animated ? "animate-vpulse-slow" : undefined}
      />

      <path
        d="M10,72 C70,72 96,66 120,60 C150,53 168,40 200,40 C240,40 280,52 310,44"
        fill="none"
        stroke="#e63946"
        strokeWidth={11}
        strokeLinecap="round"
      />

      {/* мішечок аневризми: ореол дихає — це і є акцент кадру */}
      <circle
        cx={175}
        cy={26}
        r={21}
        fill="#ff6b6b"
        opacity={0.28}
        data-pulse=""
        className={animated ? "animate-vpulse" : undefined}
      />
      <path d="M158,44 C158,16 196,14 194,42" fill="#ff6b6b" stroke="#ff6b6b" strokeWidth={4} />

      {/* пунктирне кільце-виноска повільно обертається */}
      <circle
        cx={176}
        cy={26}
        r={26}
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={1.5}
        strokeDasharray="4 6"
        opacity={0.7}
        data-flow=""
        className={animated ? "animate-vflow-slow" : undefined}
      />
    </svg>
  );
}
