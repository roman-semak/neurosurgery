"use client";

import { useState } from "react";

import { EndovascularAccess } from "@/components/vessels/endovascular-access";
import { MicrosurgicalClip } from "@/components/vessels/microsurgical-clip";
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
    <div>
      <div
        role="tablist"
        aria-label="Метод лікування"
        className="mb-3.5 flex max-w-105 gap-2 rounded-lg border border-white/12 bg-white/6 p-1"
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
        <div className="glass grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-center bg-deep px-0 py-2">
            {active === "endovascular" ? (
              <EndovascularAccess className="h-auto w-full" />
            ) : (
              <MicrosurgicalClip className="h-auto w-full" />
            )}
          </div>

          <div className="p-5 sm:p-6">
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
        </div>
      ) : null}
    </div>
  );
}
