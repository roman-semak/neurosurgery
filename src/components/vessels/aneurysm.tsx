"use client";

import { useId, type SVGProps } from "react";

import { cn } from "@/lib/utils";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Мішечок наповнюється з кожним ударом, потім усередину вкладається спіраль. */
export function Aneurysm({ animated = true, className, ...props }: VesselProps) {
  const id = useId();
  const soft = `${id}-soft`;
  const lumen = `${id}-lumen`;
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
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <linearGradient id={lumen} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#e63946" />
        </linearGradient>
      </defs>

      {/* стінка судини — дихає в такт систолі */}
      <path
        d="M14,164 C90,164 130,156 176,144 C238,128 300,120 466,112"
        fill="none"
        stroke="#e63946"
        strokeWidth={34}
        strokeLinecap="round"
        opacity={0.2}
        filter={`url(#${soft})`}
        data-anim=""
        className={a("origin-center animate-wall-pulse")}
      />
      {/* просвіт */}
      <path
        d="M14,164 C90,164 130,156 176,144 C238,128 300,120 466,112"
        fill="none"
        stroke={`url(#${lumen})`}
        strokeWidth={26}
        strokeLinecap="round"
        opacity={0.9}
      />

      {/* мішечок аневризми */}
      <path
        d="M176,144 C176,72 268,66 262,138"
        fill="#ff6b6b"
        opacity={0.22}
        data-anim=""
        className={a("animate-sac-fill")}
        style={{ transformOrigin: "219px 108px" }}
      />
      <path d="M176,144 C176,72 268,66 262,138" fill="none" stroke="#e63946" strokeWidth={5} strokeLinecap="round" />

      {/* кровотік магістраллю і завихрення в мішечок */}
      <path
        d="M14,164 C90,164 130,156 176,144 C238,128 300,120 466,112"
        fill="none"
        stroke="#fff3f3"
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray="30 90"
        opacity={0.85}
        data-anim=""
        className={a("animate-flow-fast")}
      />
      <path
        d="M186,140 C196,96 240,92 250,132"
        fill="none"
        stroke="#fff3f3"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray="16 70"
        opacity={0.7}
        data-anim=""
        className={a("animate-flow-slow")}
      />

      {/* спіраль, яку заводять катетером — вимикає мішечок із кровотоку */}
      <path
        d="M198,124 C214,100 246,104 240,124 C234,142 202,138 210,116 C216,100 240,104 236,120"
        fill="none"
        stroke="#c9a227"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={210}
        strokeDashoffset={210}
        data-anim=""
        className={a("animate-coil-in")}
      />
    </svg>
  );
}
