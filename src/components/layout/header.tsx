"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS, SITE_NAME } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const primaryNavItems = NAV_ITEMS.filter((item) => item.href !== "/appointment");

  return (
    <header className="site-nav">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex-1 whitespace-nowrap font-heading text-lg font-semibold text-accent-bright"
        >
          {SITE_NAME}
        </Link>

        <nav
          aria-label="Головна навігація"
          className="hidden items-center gap-6 md:flex"
        >
          {primaryNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-accent-bright"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-11 md:hidden"
              aria-label="Відкрити меню"
            >
              <MenuIcon aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{SITE_NAME}</SheetTitle>
            </SheetHeader>
            <nav
              aria-label="Мобільна навігація"
              className="flex flex-col gap-1 px-4"
            >
              {primaryNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted",
                      isActive && "bg-accent/15 text-accent-bright"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
