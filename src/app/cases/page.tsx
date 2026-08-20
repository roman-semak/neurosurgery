import type { Metadata } from "next";

import { PatientCaseCard } from "@/components/shared/patient-case-card";
import { PATIENT_CASES } from "@/lib/content/patient-cases";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Клінічні випадки",
  description:
    "Приклади лікування пацієнтів до та після операції — фотографії та короткий опис кожного випадку.",
  alternates: {
    canonical: "/cases",
  },
};

export default function CasesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
      <JsonLd
        data={buildBreadcrumbSchema([{ name: "Клінічні випадки", path: "/cases" }])}
      />
      <div className="max-w-2xl">
        <h1 className="font-heading text-[30px] font-semibold tracking-[-0.8px] text-foreground sm:text-[42px] lg:text-[52px]">
          Клінічні випадки
        </h1>
        <p className="mt-4 text-[15px] text-muted-foreground sm:text-lg">
          Приклади лікування — з якою проблемою звернувся пацієнт та який
          результат отримано. Натисніть на картку, щоб побачити фото до та
          після.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PATIENT_CASES.map((patientCase) => (
          <PatientCaseCard key={patientCase.id} patientCase={patientCase} />
        ))}
      </div>
    </div>
  );
}
