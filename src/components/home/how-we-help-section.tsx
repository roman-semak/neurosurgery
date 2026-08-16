import { ServiceCard } from "@/components/shared/service-card";
import { HOW_I_HELP } from "@/lib/content/services";

export function HowWeHelpSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8.5 sm:px-6 sm:py-13 lg:py-19">
      <div className="max-w-2xl">
        <h2 className="font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:text-[30px] lg:text-[36px]">
          Чим допомагаю
        </h2>
        <p className="mt-3 text-sm text-ink-muted sm:text-base">
          Основні напрямки роботи — детальніше на сторінці «Напрямки роботи».
        </p>
      </div>

      <div className="mt-4.5 grid gap-3 sm:mt-8 sm:grid-cols-2">
        {HOW_I_HELP.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
