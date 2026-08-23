"use client";

import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type DeviceProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Спіраль згортається клубком усередині аневризми. */
export function CoilDevice({ animated = true, className, ...props }: DeviceProps) {
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
        d="M10,116 C90,116 130,108 168,96 C220,80 270,74 312,70"
        fill="none"
        stroke="#e63946"
        strokeWidth={26}
        strokeLinecap="round"
        opacity={0.85}
      />
      <path
        d="M168,96 C166,40 246,34 240,92"
        fill="#ff6b6b"
        data-anim=""
        className={a("animate-sac-quiet")}
      />
      <path d="M168,96 C166,40 246,34 240,92" fill="none" stroke="#e63946" strokeWidth={4.5} />
      <path
        d="M182,80 C198,54 232,58 226,80 C220,100 186,96 194,72 C200,54 228,58 224,76"
        fill="none"
        stroke="#c9a227"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={260}
        data-anim=""
        className={a("animate-coil-settle")}
      />
    </svg>
  );
}
