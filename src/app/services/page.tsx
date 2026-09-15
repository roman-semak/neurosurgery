import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "lucide-react";

import { ConditionTabs } from "@/components/shared/condition-tabs";
import { EndovascularCallout } from "@/components/shared/endovascular-callout";
import { EndovascularText } from "@/components/shared/endovascular-text";
import { MethodSwitch } from "@/components/shared/method-switch";
import { PatientPath } from "@/components/shared/patient-path";
import { ServiceCard } from "@/components/shared/service-card";
import {
  CONDITIONS,
  PATIENT_JOURNEY,
  PROCEDURES,
  TREATED_CONDITION_GROUPS,
  TREATMENT_METHODS,
  VASCULAR_CONDITIONS,
  WHAT_TO_BRING,
} from "@/lib/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Напрямки роботи",
  description:
    "З якими проблемами працює лікар, які процедури проводить та як проходить шлях пацієнта від консультації до відновлення.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
      <JsonLd
        data={buildBreadcrumbSchema([{ name: "Напрямки роботи", path: "/services" }])}
      />
      <div className="max-w-2xl">
        <h1 className="font-heading text-[30px] font-semibold tracking-[-0.8px] text-foreground sm:text-[42px] lg:text-[52px]">
          Напрямки роботи
        </h1>
        <p className="mt-4 text-[15px] text-muted-foreground sm:text-lg">
          З якими проблемами варто звертатись та як влаштований шлях пацієнта.
        </p>
      </div>

      <EndovascularCallout className="mt-8" />

      <section aria-labelledby="conditions-heading" className="mt-14">
        <h2 id="conditions-heading" className="font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:text-[30px] lg:text-[36px]">
          З якими проблемами працюю
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {CONDITIONS.map((condition) => (
            <ServiceCard
              key={condition.title}
              title={condition.title}
              description={condition.description}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="vascular-conditions-heading" className="mt-14">
        <h2
          id="vascular-conditions-heading"
          className="font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:text-[30px] lg:text-[36px]"
        >
          Судинні захворювання
        </h2>
        <div className="mt-6">
          <ConditionTabs conditions={VASCULAR_CONDITIONS} />
        </div>
      </section>

      <section aria-labelledby="procedures-heading" className="mt-14">
        <h2 id="procedures-heading" className="font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:text-[30px] lg:text-[36px]">
          Процедури та операції
        </h2>
        <div className="mt-6">
          <MethodSwitch methods={TREATMENT_METHODS} />
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROCEDURES.map((procedure) => (
            <li
              key={procedure}
              className="flex items-start gap-3 rounded-card border border-black/8 bg-white/60 p-4"
            >
              <CheckIcon className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden="true" />
              <span className="text-base text-foreground">
                <EndovascularText text={procedure} />
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="treated-conditions-heading" className="mt-14">
        <h2 id="treated-conditions-heading" className="font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:text-[30px] lg:text-[36px]">
          Хвороби, які лікує відділення
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] text-pretty text-muted-foreground sm:text-base">
          Знайдіть свій діагноз у списку нижче. Якщо його немає або ви не
          впевнені, опишіть проблему у{" "}
          <Link href="/appointment" className="font-medium text-accent-bright underline underline-offset-2">
            формі запису
          </Link>{" "}
          — лікар підкаже, чи зможемо допомогти.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {TREATED_CONDITION_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-card border border-black/8 bg-white/60 p-5 sm:p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-heading text-[18px] font-semibold text-foreground sm:text-[20px]">
                  {group.title}
                </h3>
                <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent-bright">
                  {group.items.length}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-ink-muted">{group.hint}</p>
              <ul className="mt-4 flex flex-col gap-2 border-t border-black/6 pt-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] leading-relaxed text-foreground"
                  >
                    <span
                      className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent-bright"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="journey-heading" className="mt-14">
        <h2 id="journey-heading" className="font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:text-[30px] lg:text-[36px]">
          Як проходить лікування
        </h2>
        <div className="mt-6">
          <PatientPath steps={PATIENT_JOURNEY} />
        </div>
      </section>

      <section aria-labelledby="prepare-heading" className="mt-14 rounded-panel border border-black/8 bg-white/70 p-6 backdrop-blur-glass sm:p-8">
        <h2 id="prepare-heading" className="font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:text-[30px] lg:text-[36px]">
          Що взяти на консультацію
        </h2>
        <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-base text-muted-foreground">
          {WHAT_TO_BRING.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
