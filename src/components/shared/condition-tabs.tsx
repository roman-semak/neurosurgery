"use client";

import type { ComponentType, SVGProps } from "react";
import { useState } from "react";

import { Aneurysm } from "@/components/vessels/aneurysm";
import { Avm } from "@/components/vessels/avm";
import { Stenosis } from "@/components/vessels/stenosis";
import { Stroke } from "@/components/vessels/stroke";
import { cn } from "@/lib/utils";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

const ILLUSTRATIONS: Record<string, ComponentType<VesselProps>> = {
  aneurysm: Aneurysm,
  avm: Avm,
  stenosis: Stenosis,
  stroke: Stroke,
};

type VascularCondition = {
  slug: string;
  title: string;
  whatIsIt: string;
  whyDangerous: string;
  howWeTreat: string;
};

type ConditionTabsProps = {
  conditions: VascularCondition[];
};

export function ConditionTabs({ conditions }: ConditionTabsProps) {
  const [active, setActive] = useState(conditions[0]?.slug ?? "");
  const current = conditions.find((c) => c.slug === active) ?? conditions[0];
  const Illustration = current ? ILLUSTRATIONS[current.slug] : undefined;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Судинні захворювання"
        className="mb-3.5 flex flex-wrap gap-2 rounded-lg border border-black/8 bg-black/3 p-1"
      >
        {conditions.map((c) => (
          <button
            key={c.slug}
            type="button"
            role="tab"
            aria-selected={active === c.slug}
            onClick={() => setActive(c.slug)}
            className={cn(
              "min-h-11 flex-1 rounded-lg px-3 text-sm font-medium transition-colors",
              active === c.slug
                ? "bg-accent text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {c.title}
          </button>
        ))}
      </div>

      {current ? (
        <div className="glass flex flex-col gap-4 p-5 sm:p-6">
          {Illustration ? <Illustration animated className="h-auto w-full" /> : null}
          <h3 className="font-heading text-[18px] font-semibold text-foreground">
            {current.title}
          </h3>
          <dl className="flex flex-col gap-3 text-sm text-ink-body">
            <div>
              <dt className="text-[11.5px] font-medium uppercase tracking-[1.6px] text-ink-muted">
                Що це
              </dt>
              <dd className="mt-1">{current.whatIsIt}</dd>
            </div>
            <div>
              <dt className="text-[11.5px] font-medium uppercase tracking-[1.6px] text-ink-muted">
                Чим небезпечно
              </dt>
              <dd className="mt-1">{current.whyDangerous}</dd>
            </div>
            <div>
              <dt className="text-[11.5px] font-medium uppercase tracking-[1.6px] text-ink-muted">
                Як лікуємо
              </dt>
              <dd className="mt-1">{current.howWeTreat}</dd>
            </div>
          </dl>
        </div>
      ) : null}
    </div>
  );
}
