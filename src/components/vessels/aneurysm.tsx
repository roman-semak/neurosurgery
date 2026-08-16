import { useId, type SVGProps } from "react";

export function Aneurysm(props: SVGProps<SVGSVGElement>) {
  const id = useId();
  const glowA = `${id}-glowA`;
  const artg = `${id}-artg`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 110"
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
      </defs>
      <path
        d="M10,72 C70,72 96,66 120,60"
        fill="none"
        stroke="#e63946"
        strokeWidth={12}
        strokeLinecap="round"
        opacity={0.35}
        filter={`url(#${glowA})`}
      />
      <path
        d="M10,72 C70,72 96,66 120,60 C150,53 168,40 200,40 C240,40 280,52 310,44"
        fill="none"
        stroke="#e63946"
        strokeWidth={11}
        strokeLinecap="round"
      />
      <circle cx={175} cy={26} r={21} fill="#ff6b6b" opacity={0.28} />
      <path
        d="M158,44 C158,16 196,14 194,42"
        fill="#ff6b6b"
        stroke="#ff6b6b"
        strokeWidth={4}
      />
      <circle
        cx={176}
        cy={26}
        r={26}
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={1.5}
        strokeDasharray="4 6"
        opacity={0.7}
      />
    </svg>
  );
}
