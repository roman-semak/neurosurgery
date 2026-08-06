import type { Metadata } from "next";
import Image from "next/image";

import {
  ASSOCIATIONS,
  BIOGRAPHY_PARAGRAPHS,
  DOCTOR,
  EDUCATION,
  EXPERIENCE,
  PUBLICATIONS,
  WHY_NEUROSURGERY,
} from "@/lib/content/doctor";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Про лікаря",
  description: `Біографія, освіта та досвід лікаря ${DOCTOR.fullName}, ${DOCTOR.specialization.toLowerCase()}.`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <JsonLd
        data={buildBreadcrumbSchema([{ name: "Про лікаря", path: "/about" }])}
      />
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        <div className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-2xl sm:w-48">
          <Image
            src="/images/portrait-placeholder.svg"
            alt={DOCTOR.portraitAlt.about}
            fill
            sizes="192px"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            {DOCTOR.fullName}
          </h1>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            {DOCTOR.titles}
          </p>
        </div>
      </div>

      <section aria-labelledby="biography-heading" className="mt-12">
        <h2 id="biography-heading" className="font-heading text-2xl font-semibold text-foreground">
          Біографія
        </h2>
        <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
          {BIOGRAPHY_PARAGRAPHS.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="education-heading" className="mt-12">
        <h2 id="education-heading" className="font-heading text-2xl font-semibold text-foreground">
          Освіта та стажування
        </h2>
        <ul className="mt-4 flex flex-col gap-4">
          {EDUCATION.map((item) => (
            <li key={`${item.years}-${item.institution}`} className="flex flex-col gap-1 border-l-2 border-secondary/40 pl-4">
              <span className="text-sm font-medium text-secondary">{item.years}</span>
              <span className="font-medium text-foreground">{item.institution}</span>
              <span className="text-sm text-muted-foreground">{item.degree}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="experience-heading" className="mt-12">
        <h2 id="experience-heading" className="font-heading text-2xl font-semibold text-foreground">
          Досвід роботи
        </h2>
        <ul className="mt-4 flex flex-col gap-4">
          {EXPERIENCE.map((item) => (
            <li key={`${item.years}-${item.place}`} className="flex flex-col gap-1 border-l-2 border-secondary/40 pl-4">
              <span className="text-sm font-medium text-secondary">{item.years}</span>
              <span className="font-medium text-foreground">{item.place}</span>
              <span className="text-sm text-muted-foreground">{item.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="publications-heading" className="mt-12">
        <h2 id="publications-heading" className="font-heading text-2xl font-semibold text-foreground">
          Наукова діяльність та публікації
        </h2>
        <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-base text-muted-foreground">
          {PUBLICATIONS.map((publication, index) => (
            <li key={index}>{publication}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="associations-heading" className="mt-12">
        <h2 id="associations-heading" className="font-heading text-2xl font-semibold text-foreground">
          Членство в асоціаціях
        </h2>
        <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-base text-muted-foreground">
          {ASSOCIATIONS.map((association, index) => (
            <li key={index}>{association}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="why-heading" className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-glass sm:p-8">
        <h2 id="why-heading" className="font-heading text-2xl font-semibold text-foreground">
          Чому нейрохірургія
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {WHY_NEUROSURGERY}
        </p>
      </section>
    </div>
  );
}
