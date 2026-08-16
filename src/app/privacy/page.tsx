import type { Metadata } from "next";

import { CONTACT, SITE_NAME } from "@/lib/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Політика конфіденційності",
  description:
    "Політика обробки персональних даних пацієнтів, включно з медичними даними.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Політика конфіденційності", path: "/privacy" },
        ])}
      />
      <h1 className="font-heading text-[28px] font-semibold text-foreground sm:text-[34px]">
        Політика конфіденційності
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Дата останнього оновлення: [ДД.ММ.РРРР]
      </p>

      <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
        <section aria-labelledby="general-heading">
          <h2 id="general-heading" className="font-heading text-xl font-semibold text-foreground">
            1. Загальні положення
          </h2>
          <p className="mt-3">
            Ця Політика конфіденційності визначає порядок збору, використання
            та захисту персональних даних, включно з даними про здоров&apos;я,
            які пацієнти надають через сайт {SITE_NAME} (&quot;Сайт&quot;).
            Використовуючи Сайт та подаючи заявку на консультацію, ви
            погоджуєтесь з умовами цієї Політики.
          </p>
        </section>

        <section aria-labelledby="data-heading">
          <h2 id="data-heading" className="font-heading text-xl font-semibold text-foreground">
            2. Які дані ми збираємо
          </h2>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-5">
            <li>Ім&apos;я та прізвище;</li>
            <li>Номер телефону;</li>
            <li>
              Опис проблеми зі здоров&apos;ям, який ви вказуєте у формі запису
              (категорія особливих/чутливих даних — даних про здоров&apos;я);
            </li>
            <li>[Інші дані, якщо застосовно].</li>
          </ul>
        </section>

        <section aria-labelledby="purpose-heading">
          <h2 id="purpose-heading" className="font-heading text-xl font-semibold text-foreground">
            3. Мета та підстава обробки
          </h2>
          <p className="mt-3">
            Дані обробляються з метою організації консультації та зв&apos;язку
            з вами щодо запису. Підставою обробки є ваша явна згода, надана
            під час заповнення форми запису на консультацію.
          </p>
        </section>

        <section aria-labelledby="retention-heading">
          <h2 id="retention-heading" className="font-heading text-xl font-semibold text-foreground">
            4. Термін зберігання даних
          </h2>
          <p className="mt-3">
            Персональні дані зберігаються не довше, ніж це необхідно для
            досягнення мети обробки, а саме [строк зберігання, напр. 3
            роки з моменту останнього звернення], після чого видаляються або
            знеособлюються.
          </p>
        </section>

        <section aria-labelledby="rights-heading">
          <h2 id="rights-heading" className="font-heading text-xl font-semibold text-foreground">
            5. Права суб&apos;єкта персональних даних
          </h2>
          <p className="mt-3">Ви маєте право:</p>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-5">
            <li>отримати інформацію про обробку ваших даних;</li>
            <li>вимагати виправлення або видалення своїх даних;</li>
            <li>відкликати згоду на обробку даних у будь-який момент;</li>
            <li>подати скаргу до уповноваженого органу з захисту даних.</li>
          </ul>
        </section>

        <section aria-labelledby="security-heading">
          <h2 id="security-heading" className="font-heading text-xl font-semibold text-foreground">
            6. Захист даних
          </h2>
          <p className="mt-3">
            Ми вживаємо технічних та організаційних заходів для захисту ваших
            даних від несанкціонованого доступу, втрати чи розголошення.
            Дані передаються третім особам лише у випадках, передбачених
            законодавством, або за вашою окремою згодою.
          </p>
        </section>

        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="font-heading text-xl font-semibold text-foreground">
            7. Контакти
          </h2>
          <p className="mt-3">
            З питань обробки персональних даних звертайтесь: {" "}
            <a href={`mailto:${CONTACT.email}`} className="font-medium text-accent-bright hover:underline">
              {CONTACT.email}
            </a>{" "}
            або за телефоном {" "}
            <a href={CONTACT.phoneHref} className="font-medium text-accent-bright hover:underline">
              {CONTACT.phone}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
