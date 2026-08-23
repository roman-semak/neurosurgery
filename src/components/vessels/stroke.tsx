"use client";

import { useId, type SVGProps } from "react";

import { cn } from "@/lib/utils";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Кров упирається в тромб; гілки за ним згасають. */
export function Stroke({ animated = true, className, ...props }: VesselProps) {
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

      <path
        d="M8,110 C80,110 140,104 200,102"
        fill="none"
        stroke="#e63946"
        strokeWidth={34}
        strokeLinecap="round"
        opacity={0.2}
        filter={`url(#${soft})`}
        data-anim=""
        className={a("origin-center animate-wall-pulse-fast")}
      />
      <path d="M8,110 C80,110 140,104 200,102" fill="none" stroke="#e63946" strokeWidth={26} strokeLinecap="round" />

      {/* дистальне русло — згасає без кровопостачання */}
      <g data-anim="" className={a("animate-ischemia")}>
        <path d="M234,100 C296,96 336,60 400,40" fill="none" stroke="#e63946" strokeWidth={17} strokeLinecap="round" />
        <path d="M234,104 C296,110 336,152 400,178" fill="none" stroke="#e63946" strokeWidth={17} strokeLinecap="round" />
        <path d="M330,68 C346,50 352,32 350,14" fill="none" stroke="#e63946" strokeWidth={9} strokeLinecap="round" />
        <path d="M330,140 C346,158 352,178 350,200" fill="none" stroke="#e63946" strokeWidth={9} strokeLinecap="round" />
        <circle cx={400} cy={40} r={7} fill="#e63946" />
        <circle cx={400} cy={178} r={7} fill="#e63946" />
      </g>

      {/* потік доходить тільки до тромба */}
      <path
        d="M8,110 C80,110 140,104 196,102"
        fill="none"
        stroke="#fff3f3"
        strokeWidth={8}
        strokeLinecap="round"
        strokeDasharray="30 56"
        opacity={0.9}
        data-anim=""
        className={a("animate-flow-fast")}
      />

      {/* тромб — щільна пробка, ледь піддається тиску */}
      <g data-anim="" className={a("animate-clot-push")}>
        <ellipse cx={216} cy={101} rx={24} ry={17} fill="#6f6257" />
        <ellipse cx={209} cy={97} rx={7} ry={5} fill="#8b7c6e" opacity={0.8} />
        <ellipse cx={223} cy={106} rx={6} ry={4} fill="#8b7c6e" opacity={0.6} />
      </g>

      <path d="M258,196 L340,196" stroke="#3f7d82" strokeWidth={3} strokeLinecap="round" opacity={0.8} />
      <text x={299} y={216} textAnchor="middle" fontFamily="var(--font-heading), sans-serif" fontSize={15} fill="#3f7d82">
        без кровопостачання
      </text>
    </svg>
  );
}
