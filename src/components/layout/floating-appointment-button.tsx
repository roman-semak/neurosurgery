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
        className="h-12 rounded-full px-5 text-base shadow-lg"
      >
        <Link href="/appointment">
          <CalendarIcon aria-hidden="true" />
          Записатися
        </Link>
      </Button>
    </div>
  );
}
