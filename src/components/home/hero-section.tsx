import Image from "next/image";
import Link from "next/link";

import { CircleOfWillis } from "@/components/vessels/circle-of-willis";
import { Button } from "@/components/ui/button";
import { DOCTOR } from "@/lib/content/doctor";

export function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-6xl gap-10 overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
      <CircleOfWillis className="pointer-events-none absolute -top-16 -right-24 -z-10 h-105 w-105 opacity-25 blur-[1px] sm:opacity-35" />
      <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
        <p className="rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent-bright">
          {DOCTOR.specialization}
        </p>
        <h1 className="font-heading text-[34px] font-semibold leading-[1.08] tracking-[-1px] text-balance text-foreground sm:text-[46px] lg:text-[60px]">
          {DOCTOR.fullName}
        </h1>
        <p className="max-w-75 text-base leading-relaxed text-pretty text-muted-foreground sm:max-w-105 sm:text-[17px] lg:max-w-115 lg:text-lg">
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
