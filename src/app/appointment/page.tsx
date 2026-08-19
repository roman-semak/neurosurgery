import type { Metadata } from "next";

import { AppointmentForm } from "@/components/appointment/appointment-form";
import { LocationMap } from "@/components/shared/location-map";
import { CONTACT } from "@/lib/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Запис на консультацію",
  description:
    "Заповніть форму, щоб записатися на консультацію. Ми зв'яжемось з вами для узгодження зручного часу.",
  alternates: {
    canonical: "/appointment",
  },
};

export default function AppointmentPage() {
  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
      <JsonLd
        data={buildBreadcrumbSchema([{ name: "Запис на консультацію", path: "/appointment" }])}
      />
      <div
        className="absolute -top-16 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="grid items-start gap-6.5 lg:grid-cols-2">
        <div>
          <h1 className="font-heading text-[30px] font-semibold tracking-[-0.8px] text-foreground sm:text-[42px] lg:text-[52px]">
            Запис на консультацію
          </h1>
          <p className="mt-4 max-w-115 text-[15px] text-pretty text-muted-foreground">
            Заповніть форму нижче — ми зателефонуємо або напишемо вам, щоб
            узгодити зручний день і час консультації. Якщо зручніше, ви також
            можете зателефонувати нам напряму: {" "}
            <a href={CONTACT.phoneHref} className="font-medium text-accent-bright hover:underline">
              {CONTACT.phone}
            </a>
            .
          </p>
          <div className="mt-5 flex flex-col gap-2.5 text-sm text-ink-muted">
            <div>{CONTACT.address}</div>
            <a href={CONTACT.phoneHref} className="text-accent-bright hover:underline">
              {CONTACT.phone}
            </a>
          </div>
        </div>

        <div className="rounded-panel border border-black/8 bg-white/70 p-6 shadow-glass backdrop-blur-glass sm:p-8">
          <AppointmentForm />
        </div>
      </div>

      <section aria-labelledby="location-heading" className="mt-14">
        <h2 id="location-heading" className="font-heading text-[24px] font-semibold text-foreground sm:text-[30px]">
          Як нас знайти
        </h2>
        <p className="mt-3 text-base text-muted-foreground">{CONTACT.address}</p>
        <div className="mt-4">
          <LocationMap query={CONTACT.mapQuery} title="Карта проїзду до клініки" />
        </div>
      </section>
    </div>
  );
}
