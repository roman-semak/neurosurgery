"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FloatingAppointmentButton() {
  const pathname = usePathname();

  if (pathname === "/appointment") {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-5 z-50 sm:right-6 sm:bottom-6">
      <Button
        asChild
        size="lg"
        className="h-14 gap-2 rounded-full border-2 border-accent-bright/50 px-6 text-base font-semibold shadow-glow ring-4 ring-accent/20 transition-transform hover:scale-105"
      >
        <Link href="/appointment">
          <CalendarIcon className="size-5" aria-hidden="true" />
          Записатися
        </Link>
      </Button>
    </div>
  );
}
