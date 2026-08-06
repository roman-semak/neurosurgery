import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Сторінку не знайдено",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
      <p className="font-heading text-5xl font-semibold text-accent-bright sm:text-6xl">404</p>
      <h1 className="font-heading text-2xl font-semibold text-foreground">
        Сторінку не знайдено
      </h1>
      <p className="text-base text-muted-foreground">
        Можливо, вона була переміщена або більше не існує.
      </p>
      <Button asChild size="lg" className="mt-2 h-11 px-6">
        <Link href="/">На головну</Link>
      </Button>
    </div>
  );
}
