"use client";

import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type DeviceProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Сітчастий каркас розкривається у звуженій ділянці. */
export function StentDevice({ animated = true, className, ...props }: DeviceProps) {
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
        d="M10,50 L110,50 C146,50 146,66 172,66 C200,66 200,50 236,50 L312,50"
        fill="none"
        stroke="#e63946"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <path
        d="M10,100 L110,100 C146,100 146,84 172,84 C200,84 200,100 236,100 L312,100"
        fill="none"
        stroke="#e63946"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <path d="M10,75 L312,75" fill="none" stroke="#ff6b6b" strokeWidth={44} opacity={0.2} />
      <path
        d="M112,54 C144,54 146,70 170,70 C198,70 200,54 234,54 L234,96 C200,96 198,80 170,80 C146,80 144,96 112,96 Z"
        fill="#d9c9a8"
        opacity={0.85}
      />
      <g
        stroke="#6f6257"
        strokeWidth={3}
        fill="none"
        data-anim=""
        className={a("animate-mesh-in")}
        style={{ transformOrigin: "173px 75px" }}
      >
        <path d="M108,56 L238,56" />
        <path d="M108,94 L238,94" />
        <path d="M108,56 L134,94 M134,56 L160,94 M160,56 L186,94 M186,56 L212,94 M212,56 L238,94" />
        <path d="M134,56 L108,94 M160,56 L134,94 M186,56 L160,94 M212,56 L186,94 M238,56 L212,94" />
      </g>
    </svg>
  );
}
