import Image from "next/image";

import { CircleOfWillis } from "@/components/vessels/circle-of-willis";
import { DOCTOR } from "@/lib/content/doctor";

export function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-6xl gap-10 overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
      <CircleOfWillis className="pointer-events-none absolute -top-16 -right-24 -z-10 h-105 w-105 opacity-25 blur-[1px] sm:opacity-35" />
      <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
        <p className="rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent-bright">
          {DOCTOR.specialization}
        </p>
        <h1 className="font-heading text-[28px] font-semibold leading-tight tracking-[-0.5px] text-foreground sm:text-[34px]">
          {DOCTOR.fullName}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          {DOCTOR.heroTagline}
        </p>
      </div>

      <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card">
          <Image
            src="/images/doctor-portrait.jpg"
            alt={DOCTOR.portraitAlt.hero}
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
