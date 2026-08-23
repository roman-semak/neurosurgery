import type { Metadata } from "next";
import Link from "next/link";

import { ProcedureWalkthrough } from "@/components/services/procedure-walkthrough";
import { CoilDevice } from "@/components/vessels/coil-device";
import { StentDevice } from "@/components/vessels/stent-device";
import { FlowDiverter } from "@/components/vessels/flow-diverter";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";
import {
  PROCEDURE_ADVANTAGES,
  PROCEDURE_DEVICES,
  PROCEDURE_FACTS,
  PROCEDURE_FAQ,
  PROCEDURE_LIMITS,
} from "@/lib/content/endovascular";

export const metadata: Metadata = {
  title: "Ендоваскулярна операція — як це відбувається",
  description:
    "Покрокове пояснення ендоваскулярного втручання на судинах мозку: доступ через артерію, проведення катетера, ангіографія, встановлення спіралі чи стента. Що відчуває пацієнт і скільки триває відновлення.",
  alternates: { canonical: "/services/endovascular" },
};

const DEVICE_ILLUSTRATIONS = {
  coil: CoilDevice,
  stent: StentDevice,
  "flow-diverter": FlowDiverter,
} as const;

export default function EndovascularPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Напрямки роботи", path: "/services" },
          { name: "Ендоваскулярна операція", path: "/services/endovascular" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: PROCEDURE_FAQ.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-12 lg:pt-16">
        <p className="font-heading text-xs font-semibold uppercase tracking-[2px] text-accent">
          Методи лікування
        </p>
        <h1 className="mt-3 max-w-[760px] font-heading text-[34px] font-semibold leading-[1.06] tracking-[-1.4px] text-balance text-foreground sm:text-[44px] lg:text-[52px]">
          Ендоваскулярна операція: як це відбувається
        </h1>
        <p className="mt-4 max-w-[640px] text-[17px] text-pretty text-ink-body lg:text-lg">
          Лікування судини зсередини — без розрізу на голові. Інструмент довжиною
          близько метра й товщиною з волосінь заходить через артерію на зап&apos;ясті
          або стегні й доходить до судин мозку.
        </p>

        <dl className="mt-6 flex flex-wrap gap-2.5">
          {PROCEDURE_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[14px] border border-black/8 bg-elevated px-4.5 py-3"
            >
              <dd className="font-heading text-xl leading-none font-bold text-foreground">
                {fact.value}
              </dd>
              <dt className="mt-1 text-[13px] text-ink-muted">{fact.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-11 border-y border-black/8 bg-elevated py-11">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
          <h2 className="font-heading text-[26px] font-semibold tracking-[-0.6px] text-foreground sm:text-[30px] lg:text-[34px]">
            Шлях інструмента
          </h2>
          <p className="mt-2 mb-6 max-w-[560px] text-base text-pretty text-ink-body">
            Оберіть крок — схема покаже, де в цей момент перебуває катетер і що саме
            робить хірург.
          </p>
          <ProcedureWalkthrough />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-12">
        <h2 className="font-heading text-[26px] font-semibold tracking-[-0.6px] text-foreground sm:text-[30px] lg:text-[34px]">
          Що саме ставлять у судину
        </h2>
        <p className="mt-2 mb-6 max-w-[560px] text-base text-pretty text-ink-body">
          Залежно від діагнозу — три різні пристрої. Усі проходять усередині катетера
          й розкриваються вже на місці.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROCEDURE_DEVICES.map((device) => {
            const Illustration = DEVICE_ILLUSTRATIONS[device.slug];
            return (
              <article
                key={device.slug}
                className="overflow-hidden rounded-[22px] border border-black/8 bg-elevated"
              >
                <div className="bg-canvas p-2.5">
                  <Illustration />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {device.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] text-pretty text-ink-body">
                    {device.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-14 sm:px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <h2 className="font-heading text-[26px] font-semibold tracking-[-0.6px] text-foreground sm:text-[30px] lg:text-[34px]">
            Чому цей метод
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {PROCEDURE_ADVANTAGES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-black/8 bg-elevated p-4"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                >
                  <path
                    d="M5 12.5 L10 17.5 L19 7"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  />
                </svg>
                <span className="text-[15px] text-pretty text-ink-body">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-[26px] font-semibold tracking-[-0.6px] text-foreground sm:text-[30px] lg:text-[34px]">
            Коли він не підходить
          </h2>
          <p className="mt-4 text-[15.5px] text-pretty text-ink-body">
            Ендоваскулярний доступ можливий не завжди. Рішення ухвалюємо після
            ангіографії, коли видно точну анатомію судини.
          </p>
          <ul className="mt-3.5 flex flex-col gap-2.5">
            {PROCEDURE_LIMITS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-black/8 bg-canvas p-4 text-[15px] text-pretty text-ink-body"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3.5 text-[14.5px] text-pretty text-ink-muted">
            У цих випадках надійніший мікрохірургічний шлях — класична операція під
            мікроскопом. Він не гірший, просто інший.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-12">
        <h2 className="font-heading text-[26px] font-semibold tracking-[-0.6px] text-foreground sm:text-[30px] lg:text-[34px]">
          Часті питання
        </h2>
        <dl className="mt-5 grid gap-3 lg:grid-cols-2">
          {PROCEDURE_FAQ.map((item) => (
            <div
              key={item.question}
              className="rounded-[18px] border border-black/8 bg-elevated p-5"
            >
              <dt className="font-heading text-base font-semibold text-foreground">
                {item.question}
              </dt>
              <dd className="mt-1.5 text-[15px] text-pretty text-ink-body">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-12 lg:py-18">
        <div className="grid items-center gap-5 rounded-[26px] border border-accent/20 bg-accent/6 p-8 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <h2 className="font-heading text-[26px] font-semibold tracking-[-0.6px] text-balance text-foreground lg:text-[32px]">
              Не впевнені, який метод ваш?
            </h2>
            <p className="mt-2 max-w-[520px] text-base text-pretty text-ink-body">
              Надішліть знімки МРТ, КТ чи ангіографії — подивлюсь і скажу, що можливо
              у вашому випадку.
            </p>
          </div>
          <Button asChild size="lg" className="min-h-14 w-full lg:w-auto">
            <Link href="/appointment">Записатися на консультацію</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
