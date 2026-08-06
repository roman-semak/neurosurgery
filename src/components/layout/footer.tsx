import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { CONTACT, MESSENGERS, NAV_ITEMS, SITE_NAME, SOCIALS } from "@/lib/content/site";
import { DOCTOR } from "@/lib/content/doctor";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-accent-bright">
            {SITE_NAME}
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {DOCTOR.heroTagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Контакти</h2>
          <address className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground not-italic">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 hover:text-foreground"
            >
              <PhoneIcon className="size-4 shrink-0" aria-hidden="true" />
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-foreground"
            >
              <MailIcon className="size-4 shrink-0" aria-hidden="true" />
              {CONTACT.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPinIcon className="size-4 shrink-0" aria-hidden="true" />
              {CONTACT.address}
            </span>
          </address>

          <div className="mt-4 flex flex-wrap gap-3">
            {MESSENGERS.map((messenger) => (
              <a
                key={messenger.name}
                href={messenger.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={messenger.name}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-accent-bright hover:text-accent-bright"
              >
                {messenger.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Навігація</h2>
          <nav aria-label="Навігація у футері" className="mt-3 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Політика конфіденційності
            </Link>
          </nav>

          <div className="mt-4 flex flex-wrap gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-accent-bright hover:text-accent-bright"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
        © {year} {SITE_NAME}. Усі права захищено.
      </div>
    </footer>
  );
}
