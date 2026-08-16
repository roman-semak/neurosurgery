import { ServiceCard } from "@/components/shared/service-card";
import { HOW_I_HELP } from "@/lib/content/services";

export function HowWeHelpSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-[24px] font-semibold text-foreground sm:text-[30px]">
          Чим допомагаю
        </h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          Основні напрямки роботи — детальніше на сторінці «Напрямки роботи».
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {HOW_I_HELP.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
