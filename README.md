# Персональний сайт нейрохірурга

Сайт-візитка для практикуючого нейрохірурга: інформація про лікаря, напрямки
роботи та форма запису на консультацію. Побудовано на Next.js (App Router).

## Технічний стек

- [Next.js](https://nextjs.org) 16 (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) (Radix, стиль Nova)
- [react-hook-form](https://react-hook-form.com) + [zod](https://zod.dev) — валідація форми
- [Resend](https://resend.com) — надсилання заявок на email

## Початок роботи

```bash
npm install
cp .env.example .env.local
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

Форма запису на консультацію (`/appointment` та вбудований блок на головній)
працює одразу «з коробки»: без `RESEND_API_KEY` бекенд лише логує заявку в
консоль сервера і повертає успіх, тож форму можна повністю протестувати
локально без жодних зовнішніх налаштувань.

## Змінні середовища

Скопіюйте `.env.example` у `.env.local` і заповніть за потреби:

| Змінна                 | Опис                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `RESEND_API_KEY`        | Ключ Resend API. Без нього заявки лише логуються в консоль (див. вище).             |
| `RESEND_FROM_EMAIL`     | Адреса відправника. Для продакшну домен має бути верифікований у Resend.            |
| `DOCTOR_EMAIL_TO`       | Email лікаря, куди приходять заявки на консультацію.                                |
| `NEXT_PUBLIC_SITE_URL`  | Публічна URL-адреса сайту — використовується в метаданих, OG-зображеннях, sitemap.  |

Ключ Resend можна отримати на [resend.com/api-keys](https://resend.com/api-keys).
Адреса `onboarding@resend.dev` підходить лише для тестування — для продакшну
потрібно верифікувати власний домен у Resend.

## Структура проєкту

```
src/
├── app/                     # маршрути App Router
│   ├── layout.tsx           # шрифти, Header/Footer, метадані, JSON-LD
│   ├── page.tsx             # головна сторінка
│   ├── about/                # про лікаря
│   ├── services/             # напрямки роботи
│   ├── appointment/          # запис на консультацію
│   ├── privacy/               # політика конфіденційності
│   └── api/appointment/       # API-маршрут надсилання заявки
├── components/
│   ├── ui/                  # примітиви shadcn/ui
│   ├── layout/               # Header, Footer
│   ├── home/                 # секції головної сторінки
│   ├── appointment/           # форма запису (AppointmentForm)
│   ├── shared/                # ServiceCard, TestimonialCard, TrustStats, CTASection
│   └── seo/                   # рендер JSON-LD
└── lib/
    ├── content/               # ⭐ ВЕСЬ текстовий контент сайту — тут редагувати плейсхолдери
    ├── validations/            # zod-схема форми (спільна для клієнта і сервера)
    ├── email/                  # інтеграція з Resend
    └── seo/                    # побудова schema.org/Physician
```

## Редагування контенту

Весь текстовий контент сайту винесено у файли `src/lib/content/*.ts`:

- `site.ts` — назва сайту, контакти, адреса, месенджери, соцмережі, навігація;
- `doctor.ts` — ім'я, титули, біографія, освіта, досвід, публікації;
- `services.ts` — напрямки роботи, процедури, шлях пацієнта;
- `testimonials.ts` — відгуки пацієнтів.

Плейсхолдери позначені `[У КВАДРАТНИХ ДУЖКАХ]` — знайдіть і замініть їх на
реальний контент. Зображення-заглушки лежать у `public/images/` — замініть
файли на реальні фото зі збереженням імен файлів (або оновіть шляхи в
компонентах, де вони використовуються).

## Скрипти

```bash
npm run dev     # локальна розробка
npm run build   # продакшн-збірка
npm run start   # запуск продакшн-збірки локально
npm run lint    # перевірка ESLint
```

## Деплой на Vercel

1. Запуште репозиторій на GitHub.
2. Імпортуйте проєкт у [Vercel](https://vercel.com/new).
3. У Project Settings → Environment Variables додайте `RESEND_API_KEY`,
   `RESEND_FROM_EMAIL`, `DOCTOR_EMAIL_TO`, `NEXT_PUBLIC_SITE_URL` (з
   продакшн-доменом).
4. Задеплойте. Якщо використовуєте власний домен для листів — верифікуйте
   його у [Resend Domains](https://resend.com/domains).
