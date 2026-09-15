import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { ENDOVASCULAR_PATH } from "@/components/shared/endovascular-text";
import { EndovascularAccess } from "@/components/vessels/endovascular-access";
import { cn } from "@/lib/utils";

type EndovascularCalloutProps = {
  className?: string;
};

// Prominent entry point to the endovascular procedure page — the client wants
// it reachable from every main page, not only through inline text links.
export function EndovascularCallout({ className }: EndovascularCalloutProps) {
  return (
    <Link
      href={ENDOVASCULAR_PATH}
      className={cn(
        "group glass grid items-center overflow-hidden transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary sm:grid-cols-[minmax(0,220px)_1fr]",
        className
      )}
    >
      <div className="flex items-center bg-deep py-2" aria-hidden="true">
        <EndovascularAccess className="h-auto w-full" />
      </div>
      <div className="p-5 sm:p-6">
        <p className="font-heading text-xs font-semibold uppercase tracking-[2px] text-accent">
          Важливо знати
        </p>
        <p className="mt-2 font-heading text-[20px] font-semibold text-foreground sm:text-[24px]">
          Ендоваскулярна хірургія
        </p>
        <p className="mt-2 text-[15px] text-pretty text-ink-body">
          Лікування судин мозку зсередини — без розкриття черепа, через прокол
          артерії на зап&apos;ясті чи стегні. Як проходить операція і що
          відчуває пацієнт.
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-bright">
          Докладніше про метод
          <ArrowRightIcon
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
