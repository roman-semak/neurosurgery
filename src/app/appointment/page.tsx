import type { Metadata } from "next";

import { AppointmentForm } from "@/components/appointment/appointment-form";
import { LocationMap } from "@/components/shared/location-map";
import { CONTACT } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Запис на консультацію",
  description:
    "Заповніть форму, щоб записатися на консультацію. Ми зв'яжемось з вами для узгодження зручного часу.",
};

export default function AppointmentPage() {
  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden px-4 py-14 sm:px-6 sm:py-20">
      <div
        className="absolute -top-16 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-heading text-4xl font-semibold text-foreground sm:text-5xl">
          Запис на консультацію
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Заповніть форму нижче — ми зателефонуємо або напишемо вам, щоб
          узгодити зручний день і час консультації. Якщо зручніше, ви також
          можете зателефонувати нам напряму: {" "}
          <a href={CONTACT.phoneHref} className="font-medium text-accent-bright hover:underline">
            {CONTACT.phone}
          </a>
          .
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-glass backdrop-blur-glass sm:p-8">
        <AppointmentForm />
      </div>

      <section aria-labelledby="location-heading" className="mt-14">
        <h2 id="location-heading" className="font-heading text-2xl font-semibold text-foreground">
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
