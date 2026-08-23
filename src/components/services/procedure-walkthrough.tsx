"use client";

import { useState } from "react";

import { CatheterRoute } from "@/components/vessels/catheter-route";
import { Button } from "@/components/ui/button";
import { PROCEDURE_STEPS } from "@/lib/content/endovascular";
import { cn } from "@/lib/utils";

export function ProcedureWalkthrough() {
  const [index, setIndex] = useState(0);
  const current = PROCEDURE_STEPS[index];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Етапи операції"
        className="mb-5 flex flex-wrap gap-1.5 rounded-full border border-black/8 bg-black/3 p-1.5"
      >
        {PROCEDURE_STEPS.map((step, i) => (
          <button
            key={step.label}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "min-h-12 min-w-[150px] flex-1 rounded-full px-3 text-sm font-medium transition-colors",
              i === index
                ? "bg-accent text-white shadow-sm"
                : "text-ink-body hover:text-foreground"
            )}
          >
            {step.label}
          </button>
        ))}
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-[22px] border border-black/8 bg-canvas p-3.5">
          <CatheterRoute
            progress={current.progress}
            tip={current.tip}
            contrast={index === 2}
          />
        </div>

        <div className="flex flex-col justify-between rounded-[22px] border border-black/8 bg-canvas p-6">
          <div>
            <p className="font-heading text-[11.5px] font-semibold tracking-[1.6px] text-accent">
              Крок {index + 1} з {PROCEDURE_STEPS.length}
            </p>
            <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground">
              {current.title}
            </h3>
            <p className="mt-3 text-[15.5px] text-pretty text-ink-body">
              {current.description}
            </p>
            <div className="mt-3.5 rounded-[14px] border border-accent/20 bg-accent/6 p-4">
              <p className="font-heading text-[11.5px] font-semibold tracking-[1.6px] text-accent">
                Що відчуває пацієнт
              </p>
              <p className="mt-1.5 text-[14.5px] text-pretty text-ink-body">
                {current.sensation}
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-2">
            <Button
              variant="outline"
              className="min-h-[46px] flex-1"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
            >
              Назад
            </Button>
            <Button
              className="min-h-[46px] flex-1"
              onClick={() => setIndex((i) => Math.min(PROCEDURE_STEPS.length - 1, i + 1))}
              disabled={index === PROCEDURE_STEPS.length - 1}
            >
              Далі
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
