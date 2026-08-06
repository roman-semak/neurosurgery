import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ABOUT_TEASER, DOCTOR } from "@/lib/content/doctor";

export function AboutTeaserSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl">
          <Image
            src="/images/portrait-placeholder.svg"
            alt={DOCTOR.portraitAlt}
            fill
            sizes="(min-width: 1024px) 320px, 60vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Про лікаря
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {ABOUT_TEASER}
          </p>
          <Button asChild variant="outline" className="mt-6 h-11 px-5">
            <Link href="/about">
              Дізнатися більше
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
