export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "[Ім'я Прізвище]";

export const SITE_TITLE = `${SITE_NAME} — нейрохірург`;

export const SITE_DESCRIPTION =
  "[Короткий опис: досвідчений нейрохірург, консультації та лікування захворювань головного і спинного мозку, периферичних нервів. Запис на консультацію онлайн.]";

export const CONTACT = {
  phone: "+380 [XX] XXX XX XX",
  phoneHref: "tel:+380000000000",
  email: "[email@example.com]",
  address:
    "м. Київ, вул. Платона Майбороди, 32 (Інститут нейрохірургії ім. акад. А.П. Ромоданова)",
  // Separate, geocoder-friendly query for the map embed — includes the
  // institute name so Google Maps resolves the exact pin, not just the street.
  mapQuery: "Інститут нейрохірургії ім. акад. А.П. Ромоданова, вул. Платона Майбороди, 32, Київ",
  workingHours: "[Пн–Пт, 09:00–18:00]",
};

export const MESSENGERS = [
  { name: "Viber", href: "https://viber.click/[номер]" },
  { name: "Telegram", href: "https://t.me/[username]" },
  { name: "WhatsApp", href: "https://wa.me/[номер]" },
];

export const SOCIALS = [
  { name: "Facebook", href: "https://facebook.com/[сторінка]" },
  { name: "Instagram", href: "https://instagram.com/[сторінка]" },
];

export const NAV_ITEMS = [
  { href: "/", label: "Головна" },
  { href: "/about", label: "Про лікаря" },
  { href: "/services", label: "Напрямки роботи" },
  { href: "/appointment", label: "Запис на консультацію" },
];
