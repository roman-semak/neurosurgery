import type { Metadata } from "next";

import { AppointmentForm } from "@/components/appointment/appointment-form";
import { ConditionSearch } from "@/components/appointment/condition-search";
import { LocationMap } from "@/components/shared/location-map";
import { PhotoCarousel } from "@/components/shared/photo-carousel";
import { INSTITUTE_PHOTOS } from "@/lib/content/gallery";
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
            Запис на консультацію відбувається лише через форму. Заповніть її —
            ми зв&apos;яжемося з вами, щоб узгодити зручний день і час
            консультації.
          </p>
          <div className="mt-5 text-sm text-ink-muted">{CONTACT.address}</div>
          <div className="mt-6">
            <ConditionSearch />
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

        <h3 className="mt-10 font-heading text-[18px] font-semibold text-foreground sm:text-[20px]">
          Інститут нейрохірургії ім. акад. А.П. Ромоданова
        </h3>
        <PhotoCarousel photos={INSTITUTE_PHOTOS} className="mt-4" />
        <p className="mt-3 text-xs text-ink-muted">
          Фото: Wikimedia Commons —{" "}
          {INSTITUTE_PHOTOS.map((photo, index) =>
            photo.credit ? (
              <span key={photo.src}>
                {index > 0 ? ", " : null}
                <a
                  href={photo.credit.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  {photo.credit.author}
                </a>{" "}
                ({photo.credit.license})
              </span>
            ) : null
          )}
          .
        </p>
      </section>
    </div>
  );
}
