"use client";

import { useId, type SVGProps } from "react";

export function CircleOfWillis(props: SVGProps<SVGSVGElement>) {
  const id = useId();
  const glowA = `${id}-glowA`;
  const glowV = `${id}-glowV`;
  const artg = `${id}-artg`;
  const veins = `${id}-veins`;
  const art = `${id}-art`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 420"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <filter id={glowA} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
          </feMerge>
        </filter>
        <linearGradient id={artg} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#e63946" />
        </linearGradient>
        <filter id={glowV} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <g id={veins} fill="none" stroke="#1d9bf0" strokeWidth={5} strokeLinecap="round">
          <path d="M28,88 C110,22 250,22 332,88" />
          <path d="M40,150 C96,120 130,150 150,200" />
          <path d="M320,150 C264,120 230,150 210,200" />
          <path d="M60,300 C110,300 140,320 168,360" />
          <path d="M300,300 C250,300 220,320 192,360" />
        </g>
        <g id={art} fill="none" stroke={`url(#${artg})`} strokeWidth={7} strokeLinecap="round">
          <path d="M170,120 C167,84 159,52 149,24" />
          <path d="M190,120 C193,84 201,52 211,24" />
          <path d="M170,120 L190,120" strokeWidth={6} />
          <path d="M170,120 C156,132 141,139 126,146" />
          <path d="M190,120 C204,132 219,139 234,146" />
          <path d="M126,146 C111,169 106,197 115,224" />
          <path d="M234,146 C249,169 254,197 245,224" />
          <path d="M126,146 C99,152 72,161 44,170" />
          <path d="M234,146 C261,152 288,161 316,170" />
          <path d="M74,159 C66,140 56,126 42,114" strokeWidth={5} />
          <path d="M286,159 C294,140 304,126 318,114" strokeWidth={5} />
          <path d="M62,164 C52,178 46,192 42,208" strokeWidth={5} />
          <path d="M298,164 C308,178 314,192 318,208" strokeWidth={5} />
          <path d="M115,224 C123,237 135,244 150,247" strokeWidth={5.5} />
          <path d="M245,224 C237,237 225,244 210,247" strokeWidth={5.5} />
          <path d="M180,258 C170,250 161,247 150,247 C131,247 114,256 98,269" />
          <path d="M180,258 C190,250 199,247 210,247 C229,247 246,256 262,269" />
          <path d="M180,258 L180,322" strokeWidth={8} />
          <path d="M180,322 C176,348 166,374 153,400" />
          <path d="M180,322 C184,348 194,374 207,400" />
        </g>
      </defs>
      <use href={`#${veins}`} filter={`url(#${glowV})`} opacity={0.45} data-pulse="" className="animate-vpulse" />
      <use href={`#${veins}`} opacity={0.5} />
      <use href={`#${art}`} filter={`url(#${glowA})`} opacity={0.75} data-pulse="" className="animate-vpulse" />
      <use href={`#${art}`} />
    </svg>
  );
}
