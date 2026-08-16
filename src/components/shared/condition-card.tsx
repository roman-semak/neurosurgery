"use client";

import type { ComponentType, SVGProps } from "react";

import { Aneurysm } from "@/components/vessels/aneurysm";
import { Avm } from "@/components/vessels/avm";
import { Stenosis } from "@/components/vessels/stenosis";
import { Stroke } from "@/components/vessels/stroke";
import { useInView } from "@/lib/use-in-view";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

const ILLUSTRATIONS: Record<string, ComponentType<VesselProps>> = {
  aneurysm: Aneurysm,
  avm: Avm,
  stenosis: Stenosis,
  stroke: Stroke,
};

type ConditionCardProps = {
  slug: string;
  title: string;
  whatIsIt: string;
  whyDangerous: string;
  howWeTreat: string;
};

export function ConditionCard({
  slug,
  title,
  whatIsIt,
  whyDangerous,
  howWeTreat,
}: ConditionCardProps) {
  const Illustration = ILLUSTRATIONS[slug];
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="glass flex flex-col gap-4 p-5 sm:p-6">
      {Illustration ? (
        <Illustration animated={inView} className="h-auto w-full" />
      ) : null}
      <h3 className="font-heading text-[18px] font-semibold text-foreground">{title}</h3>
      <dl className="flex flex-col gap-3 text-sm text-ink-body">
        <div>
          <dt className="text-[11.5px] font-medium uppercase tracking-[1.6px] text-ink-muted">
            Що це
          </dt>
          <dd className="mt-1">{whatIsIt}</dd>
        </div>
        <div>
          <dt className="text-[11.5px] font-medium uppercase tracking-[1.6px] text-ink-muted">
            Чим небезпечно
          </dt>
          <dd className="mt-1">{whyDangerous}</dd>
        </div>
        <div>
          <dt className="text-[11.5px] font-medium uppercase tracking-[1.6px] text-ink-muted">
            Як лікуємо
          </dt>
          <dd className="mt-1">{howWeTreat}</dd>
        </div>
      </dl>
    </div>
  );
}
