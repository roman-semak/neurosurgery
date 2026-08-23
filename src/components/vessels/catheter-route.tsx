"use client";

import { useId, type SVGProps } from "react";

import { cn } from "@/lib/utils";

type CatheterRouteProps = SVGProps<SVGSVGElement> & {
  /** 0–100 — довжина введеного катетера */
  progress: number;
  /** координати кінчика у viewBox 720×400 */
  tip: readonly [number, number];
  /** підсвітити подачу контрасту */
  contrast?: boolean;
  animated?: boolean;
};

const ROUTE =
  "M40,320 C150,320 210,300 268,266 C330,230 360,190 420,160 C480,130 520,116 604,104";

const BRANCHES = [
  "M604,104 C632,86 654,64 662,38",
  "M604,104 C640,108 668,124 686,148",
  "M604,104 C596,72 578,50 552,36",
];

export function CatheterRoute({
  progress,
  tip,
  contrast = false,
  animated = true,
  className,
  ...props
}: CatheterRouteProps) {
  const id = useId();
  const soft = `${id}-soft`;
  const a = (name: string) => (animated ? name : undefined);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 400"
      role="img"
      aria-label="Схема ендоваскулярного доступу від артерії на зап'ясті до судин мозку"
      className={cn("h-auto w-full", className)}
      {...props}
    >
      <defs>
        <filter id={soft} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <text x={44} y={356} fontFamily="var(--font-heading), sans-serif" fontSize={14} fill="#7c6f60">
        місце проколу
      </text>
      <text x={672} y={186} fontFamily="var(--font-heading), sans-serif" fontSize={14} fill="#7c6f60">
        судини мозку
      </text>

      {/* стінка артерії */}
      <path
        d={ROUTE}
        fill="none"
        stroke="#e63946"
        strokeWidth={42}
        strokeLinecap="round"
        opacity={0.18}
        filter={`url(#${soft})`}
        data-anim=""
        className={a("animate-wall-breathe")}
      />
      <path d={ROUTE} fill="none" stroke="#e63946" strokeWidth={30} strokeLinecap="round" opacity={0.85} />

      {/* судини мозку */}
      <g fill="none" stroke="#e63946" strokeWidth={16} strokeLinecap="round" opacity={0.7}>
        {BRANCHES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      {/* власний кровотік */}
      <path
        d={ROUTE}
        fill="none"
        stroke="#fff3f3"
        strokeWidth={7}
        strokeLinecap="round"
        strokeDasharray="34 96"
        opacity={0.8}
        data-anim=""
        className={a("animate-flow-main")}
      />

      {/* катетер: pathLength=100, тож dashoffset = 100 − progress */}
      <path
        d={ROUTE}
        pathLength={100}
        fill="none"
        stroke="#3f7d82"
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray={100}
        style={{
          strokeDashoffset: 100 - progress,
          transition: "stroke-dashoffset 900ms cubic-bezier(.4,0,.2,1)",
        }}
      />

      {/* кінчик катетера */}
      <circle
        cx={tip[0]}
        cy={tip[1]}
        r={6}
        fill="#3f7d82"
        data-anim=""
        className={a("animate-tip-glow")}
        style={{
          transition: "cx 900ms cubic-bezier(.4,0,.2,1), cy 900ms cubic-bezier(.4,0,.2,1)",
        }}
      />

      {/* подача контрасту */}
      {contrast ? (
        <g
          fill="none"
          stroke="#c9a227"
          strokeWidth={10}
          strokeLinecap="round"
          data-anim=""
          className={a("animate-contrast-wash")}
        >
          {BRANCHES.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      ) : null}

      {/* місце проколу */}
      <circle cx={40} cy={320} r={11} fill="none" stroke="#3f7d82" strokeWidth={3} />
      <circle cx={40} cy={320} r={4} fill="#3f7d82" />
    </svg>
  );
}
