import { ConditionCard } from "@/components/shared/condition-card";
import { MethodSwitch } from "@/components/shared/method-switch";
import { PatientPath } from "@/components/shared/patient-path";
import {
  PATIENT_JOURNEY,
  TREATMENT_METHODS,
  VASCULAR_CONDITIONS,
} from "@/lib/content/services";

export function HowItWorksSection() {
  return (
    <section className="border-y border-white/8 bg-elevated py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        <p className="font-heading text-xs font-semibold uppercase tracking-[2px] text-accent">
          Як це відбувається
        </p>
        <h2 className="mt-2.5 font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:text-[30px] lg:text-[36px]">
          Шлях пацієнта
        </h2>
        <p className="mt-2 max-w-[560px] text-[15px] text-pretty text-ink-body">
          П&apos;ять кроків від першої розмови до відновлення. На кожному ви
          знатимете, що відбувається і чому.
        </p>

        <div className="mt-6">
          <PatientPath steps={PATIENT_JOURNEY} />
        </div>

        <h2 className="mt-[34px] font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:mt-[52px] sm:text-[30px] lg:mt-[76px] lg:text-[36px]">
          Що саме відбувається з судиною
        </h2>
        <p className="mt-2 text-sm text-ink-muted">Просте пояснення чотирьох станів.</p>
        <div className="mt-[18px] grid gap-3.5 sm:grid-cols-2">
          {VASCULAR_CONDITIONS.map((c) => (
            <ConditionCard key={c.slug} {...c} />
          ))}
        </div>

        <h2 className="mt-[34px] font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:mt-[52px] sm:text-[30px] lg:mt-[76px] lg:text-[36px]">
          Методи лікування
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Два підходи. Який саме — вирішуємо після діагностики, разом із вами.
        </p>
        <div className="mt-4">
          <MethodSwitch methods={TREATMENT_METHODS} />
        </div>
      </div>
    </section>
  );
}
