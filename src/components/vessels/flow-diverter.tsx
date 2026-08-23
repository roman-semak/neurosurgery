"use client";

import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type DeviceProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Щільна сітка відводить кров повз шийку аневризми. */
export function FlowDiverter({ animated = true, className, ...props }: DeviceProps) {
  const a = (name: string) => (animated ? name : undefined);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 150"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
      {...props}
    >
      <path
        d="M10,110 C90,110 130,102 168,90 C220,74 270,68 312,64"
        fill="none"
        stroke="#e63946"
        strokeWidth={26}
        strokeLinecap="round"
        opacity={0.85}
      />
      <path
        d="M168,90 C166,36 246,30 240,86"
        fill="#ff6b6b"
        data-anim=""
        className={a("animate-sac-quiet")}
      />
      <path d="M168,90 C166,36 246,30 240,86" fill="none" stroke="#e63946" strokeWidth={4.5} />
      <g
        stroke="#6f6257"
        strokeWidth={2.5}
        fill="none"
        data-anim=""
        className={a("animate-mesh-in")}
        style={{ transformOrigin: "204px 88px" }}
      >
        <path d="M150,96 C186,88 222,82 258,78" />
        <path d="M150,80 C186,72 222,66 258,62" />
        <path d="M158,80 L166,96 M178,77 L186,93 M198,74 L206,90 M218,71 L226,87 M238,68 L246,84" />
      </g>
      <path
        d="M10,110 C90,110 130,102 168,90 C220,74 270,68 312,64"
        fill="none"
        stroke="#fff3f3"
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray="26 80"
        opacity={0.9}
        data-anim=""
        className={a("animate-flow-main")}
      />
    </svg>
  );
}
