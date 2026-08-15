import type { Metadata } from "next";
import { CheckIcon } from "lucide-react";

import { ServiceCard } from "@/components/shared/service-card";
import {
  CONDITIONS,
  PATIENT_JOURNEY,
  PROCEDURES,
  TREATED_CONDITIONS,
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
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <JsonLd
        data={buildBreadcrumbSchema([{ name: "Напрямки роботи", path: "/services" }])}
      />
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-4xl font-semibold text-foreground sm:text-5xl">
          Напрямки роботи
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          З якими проблемами варто звертатись та як влаштований шлях пацієнта.
        </p>
      </div>

      <section aria-labelledby="conditions-heading" className="mt-14">
        <h2 id="conditions-heading" className="font-heading text-2xl font-semibold text-foreground">
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

      <section aria-labelledby="procedures-heading" className="mt-14">
        <h2 id="procedures-heading" className="font-heading text-2xl font-semibold text-foreground">
          Процедури та операції
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {PROCEDURES.map((procedure) => (
            <li
              key={procedure}
              className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4"
            >
              <CheckIcon className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden="true" />
              <span className="text-base text-foreground">{procedure}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="treated-conditions-heading" className="mt-14">
        <h2 id="treated-conditions-heading" className="font-heading text-2xl font-semibold text-foreground">
          Хвороби, які лікує відділення
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {TREATED_CONDITIONS.map((condition) => (
            <li
              key={condition}
              className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4"
            >
              <CheckIcon className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden="true" />
              <span className="text-base text-foreground">{condition}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="journey-heading" className="mt-14">
        <h2 id="journey-heading" className="font-heading text-2xl font-semibold text-foreground">
          Як проходить лікування
        </h2>
        <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PATIENT_JOURNEY.map((step) => (
            <li
              key={step.step}
              className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-4"
            >
              <span
                aria-hidden="true"
                className="flex size-8 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-primary-foreground"
              >
                {step.step}
              </span>
              <span className="font-medium text-foreground">{step.title}</span>
              <span className="text-sm text-muted-foreground">{step.description}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="prepare-heading" className="mt-14 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-glass sm:p-8">
        <h2 id="prepare-heading" className="font-heading text-2xl font-semibold text-foreground">
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
