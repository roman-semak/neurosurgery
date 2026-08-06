import Image from "next/image";

import { DOCTOR } from "@/lib/content/doctor";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
      <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
        <p className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          {DOCTOR.specialization}
        </p>
        <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          {DOCTOR.fullName}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          {DOCTOR.heroTagline}
        </p>
      </div>

      <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/hero-placeholder.svg"
            alt={DOCTOR.portraitAlt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
