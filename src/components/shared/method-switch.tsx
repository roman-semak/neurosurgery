"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type TreatmentMethod = {
  method: "endovascular" | "microsurgical";
  title: string;
  description: string;
  procedures: string[];
};

type MethodSwitchProps = {
  methods: TreatmentMethod[];
};

export function MethodSwitch({ methods }: MethodSwitchProps) {
  const [active, setActive] = useState<TreatmentMethod["method"]>(
    methods[0]?.method ?? "endovascular"
  );
  const current = methods.find((item) => item.method === active) ?? methods[0];

  return (
    <div className="glass p-5 sm:p-6">
      <div
        role="tablist"
        aria-label="Метод лікування"
        className="flex gap-2 rounded-lg bg-deep/60 p-1"
      >
        {methods.map((item) => (
          <button
            key={item.method}
            type="button"
            role="tab"
            aria-selected={active === item.method}
            onClick={() => setActive(item.method)}
            className={cn(
              "min-h-11 flex-1 rounded-lg px-3 text-sm font-medium transition-colors",
              active === item.method
                ? "bg-accent text-[#04211a]"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.title}
          </button>
        ))}
      </div>

      {current ? (
        <div className="mt-5">
          <p className="text-base text-ink-body">{current.description}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {current.procedures.map((procedure) => (
              <li
                key={procedure}
                className="rounded-[14px] border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground"
              >
                {procedure}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
