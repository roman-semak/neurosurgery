import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-[34px] sm:px-6 sm:py-[52px] lg:px-12 lg:py-[76px]">
      <div className="grid items-center gap-5 rounded-panel border border-accent/35 bg-linear-160 from-accent/15 to-white/6 p-6 shadow-glass sm:p-8 lg:grid-cols-[1fr_auto] lg:p-11">
        <div>
          <h2 className="font-heading text-[22px] font-semibold text-balance text-foreground sm:text-[30px] lg:text-[36px]">
            Опишіть ситуацію — я подивлюсь знімки
          </h2>
          <p className="mt-2 max-w-[520px] text-[15px] text-ink-body">
            Консультація очно в Києві або дистанційно за результатами МРТ / КТ /
            ангіографії.
          </p>
        </div>
        <Button asChild size="lg" className="min-h-14 w-full shadow-glow lg:w-auto">
          <Link href="/appointment">Записатися на консультацію</Link>
        </Button>
      </div>
    </section>
  );
}
