import Image from "next/image";
import Link from "next/link";

import { CircleOfWillis } from "@/components/vessels/circle-of-willis";
import { Button } from "@/components/ui/button";
import { DOCTOR } from "@/lib/content/doctor";

export function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-6xl gap-10 overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
      <div className="relative order-2 flex flex-col items-start gap-6 lg:order-1">
        <CircleOfWillis className="pointer-events-none absolute -top-20 -left-20 -z-10 h-100 w-100 opacity-40 sm:-top-24 sm:-left-24 sm:h-120 sm:w-120 sm:opacity-50 lg:-top-28 lg:-left-16 lg:h-135 lg:w-135 lg:opacity-55" />
        <p className="rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent-bright [text-shadow:0_0_10px_var(--canvas)]">
          {DOCTOR.specialization}
        </p>
        <h1 className="font-heading text-[34px] font-semibold leading-[1.08] tracking-[-1px] text-balance text-foreground [text-shadow:0_0_16px_var(--canvas),0_0_32px_var(--canvas)] sm:text-[46px] lg:text-[60px]">
          {DOCTOR.fullName}
        </h1>
        <p className="max-w-75 text-base leading-relaxed text-pretty text-muted-foreground [text-shadow:0_0_12px_var(--canvas),0_0_24px_var(--canvas)] sm:max-w-105 sm:text-[17px] lg:max-w-115 lg:text-lg">
          {DOCTOR.heroTagline}
        </p>

        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="min-h-13 w-full shadow-glow sm:w-auto">
            <Link href="/appointment">Записатися на консультацію</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-h-13 w-full sm:w-auto">
            <Link href="/about">Про лікаря</Link>
          </Button>
        </div>
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
