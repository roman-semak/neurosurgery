# Перенесення дизайну в код — повний документ

Проєкт: сайт нейрохірурга І. І. Скороходи (Next.js + Tailwind v4 + shadcn).
Джерело істини — макет `Скорохода - мобільний сайт.dc.html` / `SiteBody.dc.html`.
Звірено з `src/` станом на 16.08.2026.

Документ складається з чотирьох частин:

1. **План** — що і в якому порядку робити.
2. **Адаптивність** — diff-патчі по восьми файлах.
3. **Анімації** — сім готових компонентів, патч токенів, три diff-патчі.
4. **Довідка** — брейкпоінти, шкала, правила кольору.

---

# Частина 1. План

Джерело істини — `Скорохода - мобільний сайт.dc.html` (перемикач Телефон / Планшет / Десктоп)
і `SiteBody.dc.html`, де лежить уся розкладка.

Порядок нижче — від найбільшої розбіжності до найдрібнішої. Після кожного кроку
макет і код збігаються ще на одну секцію.

---

## Крок 0. Що вже збігається

Не чіпати: токени в `globals.css`, `ui/*` (shadcn під палітру вже підігнаний),
`footer`, `header`, `testimonials-section`, `about-teaser-section`, `location-map`,
`json-ld`, SEO-файли. Вони або відповідають макету, або макет їх не описує.

---

## Крок 1. Порядок секцій головної

Головна розбіжність структури. У макеті між «Чим допомагаю» і відгуками стоїть
велика секція «Як це відбувається» — вона зараз живе тільки на `/services`.

`app/page.tsx`:

```diff
 import { HeroSection } from "@/components/home/hero-section";
 import { HowWeHelpSection } from "@/components/home/how-we-help-section";
 import { TrustSection } from "@/components/home/trust-section";
+import { HowItWorksSection } from "@/components/home/how-it-works-section";
 import { AboutTeaserSection } from "@/components/home/about-teaser-section";
 import { TestimonialsSection } from "@/components/home/testimonials-section";
+import { FinalCtaSection } from "@/components/home/final-cta-section";

 export default function HomePage() {
   return (
     <>
       <HeroSection />
-      <HowWeHelpSection />
       <TrustSection />
+      <HowWeHelpSection />
+      <HowItWorksSection />
       <AboutTeaserSection />
       <TestimonialsSection />
+      <FinalCtaSection />
     </>
   );
 }
```

Порядок у макеті: hero → статистика → чим допомагаю → як це відбувається →
про лікаря → відгуки → фінальний CTA → футер.

---

## Крок 2. Дві нові секції

### `components/home/how-it-works-section.tsx`

Секція на підкладці `bg-elevated` з рамками зверху і знизу. Три частини поспіль,
усі три компоненти вже існують:

```tsx
export function HowItWorksSection() {
  return (
    <section className="border-y border-white/8 bg-elevated py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        <p className="font-heading text-xs font-semibold uppercase tracking-[2px] text-accent">
          Як це відбувається
        </p>
        <h2 className="mt-2.5 font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:text-[30px] lg:text-[36px]">
          Шлях пацієнта
        </h2>
        <p className="mt-2 max-w-[560px] text-[15px] text-pretty text-ink-body">
          П&apos;ять кроків від першої розмови до відновлення. На кожному ви
          знатимете, що відбувається і чому.
        </p>

        <div className="mt-6">
          <PatientPath steps={PATIENT_JOURNEY} />
        </div>

        <h2 className="mt-[34px] font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:mt-[52px] sm:text-[30px] lg:mt-[76px] lg:text-[36px]">
          Що саме відбувається з судиною
        </h2>
        <p className="mt-2 text-sm text-ink-muted">Просте пояснення чотирьох станів.</p>
        <div className="mt-[18px] grid gap-3.5 sm:grid-cols-2">
          {VASCULAR_CONDITIONS.map((c) => (
            <ConditionCard key={c.slug} {...c} />
          ))}
        </div>

        <h2 className="mt-[34px] font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:mt-[52px] sm:text-[30px] lg:mt-[76px] lg:text-[36px]">
          Методи лікування
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Два підходи. Який саме — вирішуємо після діагностики, разом із вами.
        </p>
        <div className="mt-4">
          <MethodSwitch methods={TREATMENT_METHODS} />
        </div>
      </div>
    </section>
  );
}
```

### `components/home/final-cta-section.tsx`

```tsx
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
```

---

## Крок 3. Адаптивність

Усе в `handoff/adaptive-patches.md` — вісім файлів, diff-фрагменти.
Ключове: hero (H1 34/46/60 + CTA-кнопки), форма запису у дві колонки на `lg`,
`trust-stats` (білі цифри), заголовки вирівняні ліворуч.

---

## Крок 4. Анімації

Усе в `handoff/animations/` — сім компонентів на заміну, патч `globals.css`,
хук `useInView`, три diff-патчі. Ставити після кроку 3: `method-switch`
і `patient-path` патчаться там і там, зручніше одним заходом.

---

## Крок 5. Дрібні звірки

| Що | Макет | Перевірити в коді |
|---|---|---|
| Скляна панель | `bg-white/8` + `border-white/15` + `blur(20px)` + `shadow-glass` | клас `.glass` — збігається |
| Радіуси | картка 24 · панель 26 · контрол 16 · дрібне 14/18/20 | `rounded-card` / `rounded-panel` / `rounded-lg` |
| Мінімальна висота | CTA 52 · вторинна 48 · решта 44 | `size="lg"` дає 36 — потрібен `min-h-[52px]` |
| Іконки напрямків | лінійні SVG, stroke 2.4, колір артерії | зараз у `service-card` іконок немає — додати |
| Кольори | червоний/синій тільки в судинах, teal — інтерфейс | `trust-stats` порушує (цифри `accent-bright`) |
| Текст | `text-wrap: pretty` на абзацах, `balance` на H1 | у макеті скрізь, у коді вибірково |
| Футер | 3 колонки з `md:` | збігається |

---

## Чого макет не описує, а в коді є

`/privacy`, `not-found`, `floating-appointment-button`, `location-map`,
API-роут запису, email-шаблони, `sitemap` / `robots` / OG-зображення.
Це поза макетом — лишати як є.

## Чого в коді немає і макет не описує

Мобільне меню-`sheet` уже реалізоване, макет його не показував — лишити ваш варіант.

---

## Порядок перевірки

Після кожного кроку відкривайте макет у режимі, що відповідає ширині вікна
(Телефон 402 · Планшет 1024 · Десктоп 1440) і звіряйте секцію поруч із браузером.
Найшвидше ловляться розбіжності в: розмірі H1, відступах між секціями,
кількості колонок і кольорі цифр статистики.

---

# Частина 2. Адаптивність

Звірено з `src/` станом на 16.08.2026. Брейкпоінти макета:
**phone < 640 · tablet 640–1023 (`sm:`) · desktop ≥ 1024 (`lg:`)**

Шкала, яку тримає макет:

| | phone | tablet | desktop |
|---|---|---|---|
| H1 (головна) | 34px | 46px | 60px |
| H1 (внутрішні) | 30px | 42px | 52px |
| H2 | 24px | 30px | 36px |
| контейнер | 100% | 900px | 1180px |
| бокові поля | 20px | 32px | 48px |
| відступ секції | 34px | 52px | 76px |

---

## 1. `components/home/hero-section.tsx`

Бракує третього кроку в H1 і CTA-кнопок (у макеті вони в hero).

```diff
-        <h1 className="font-heading text-[28px] font-semibold leading-tight tracking-[-0.5px] text-foreground sm:text-[34px]">
+        <h1 className="font-heading text-[34px] font-semibold leading-[1.08] tracking-[-1px] text-balance text-foreground sm:text-[46px] lg:text-[60px]">
           {DOCTOR.fullName}
         </h1>
-        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
+        <p className="max-w-[300px] text-base leading-relaxed text-pretty text-muted-foreground sm:max-w-[420px] sm:text-[17px] lg:max-w-[460px] lg:text-lg">
           {DOCTOR.heroTagline}
         </p>
+
+        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
+          <Button asChild size="lg" className="min-h-[52px] w-full shadow-glow sm:w-auto">
+            <Link href="/appointment">Записатися на консультацію</Link>
+          </Button>
+          <Button asChild variant="outline" size="lg" className="min-h-[52px] w-full sm:w-auto">
+            <Link href="/about">Про лікаря</Link>
+          </Button>
+        </div>
```

Контейнер секції: `py-14 sm:py-20 lg:py-28` — збігається, лишити.

---

## 2. `components/home/how-we-help-section.tsx`

Заголовки в макеті вирівняні ліворуч, не по центру; H2 має третій крок.

```diff
-      <div className="mx-auto max-w-2xl text-center">
-        <h2 className="font-heading text-[24px] font-semibold text-foreground sm:text-[30px]">
+      <div className="max-w-2xl">
+        <h2 className="font-heading text-[24px] font-semibold tracking-[-0.4px] text-foreground sm:text-[30px] lg:text-[36px]">
           Чим допомагаю
         </h2>
-        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
+        <p className="mt-3 text-sm text-ink-muted sm:text-base">
           Основні напрямки роботи — детальніше на сторінці «Напрямки роботи».
         </p>
       </div>
 
-      <div className="mt-10 grid gap-5 sm:grid-cols-2">
+      <div className="mt-[18px] grid gap-3 sm:mt-8 sm:grid-cols-2">
```

Секція: `py-14 sm:py-20` → `py-[34px] sm:py-[52px] lg:py-[76px]`.

---

## 3. `components/shared/trust-stats.tsx`

У макеті цифри білі (акцент лишається за кнопками), лейбл — звичайним регістром, є третій крок розміру.

```diff
-        <div
-          key={stat.label}
-          className="rounded-card border border-white/15 bg-white/5 p-4 text-center backdrop-blur-glass sm:text-left"
-        >
+        <div
+          key={stat.label}
+          className="rounded-[18px] border border-white/[0.14] bg-white/[0.07] p-4 backdrop-blur-glass"
+        >
           <dt className="sr-only">{stat.label}</dt>
-          <dd className="font-heading text-3xl font-semibold text-accent-bright sm:text-4xl">
+          <dd className="font-heading text-[24px] leading-none font-bold text-ink-heading sm:text-[30px] lg:text-[36px]">
             {stat.value}
           </dd>
-          <dd className="mt-1 text-[11.5px] uppercase tracking-[1.6px] text-ink-muted">
+          <dd className="mt-1.5 text-[13px] text-ink-muted">
             {stat.label}
           </dd>
         </div>
```

---

## 4. `app/appointment/page.tsx`

Головна розбіжність: у макеті на `lg` сторінка двоколонкова — ліворуч заголовок, пояснення й контакти, праворуч скляна панель форми. Зараз усе в одну колонку `max-w-3xl` по центру.

```diff
-    <div className="relative mx-auto max-w-3xl overflow-hidden px-4 py-14 sm:px-6 sm:py-20">
+    <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
       <JsonLd … />
       <div
         className="absolute -top-16 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
         aria-hidden="true"
       />
-      <div className="mx-auto max-w-xl text-center">
-        <h1 className="font-heading text-[28px] font-semibold text-foreground sm:text-[34px]">
-          Запис на консультацію
-        </h1>
-        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
-          …
-        </p>
-      </div>
-
-      <div className="mt-10 rounded-panel border border-white/20 bg-white/10 p-6 shadow-glass backdrop-blur-glass sm:p-8">
-        <AppointmentForm />
-      </div>
+      <div className="grid items-start gap-[26px] lg:grid-cols-2">
+        <div>
+          <h1 className="font-heading text-[30px] font-semibold tracking-[-0.8px] text-foreground sm:text-[42px] lg:text-[52px]">
+            Запис на консультацію
+          </h1>
+          <p className="mt-4 max-w-[460px] text-[15px] text-pretty text-muted-foreground">
+            …
+          </p>
+          <div className="mt-5 flex flex-col gap-2.5 text-sm text-ink-muted">
+            <div>{CONTACT.address}</div>
+            <a href={CONTACT.phoneHref} className="text-accent-bright hover:underline">
+              {CONTACT.phone}
+            </a>
+          </div>
+        </div>
+
+        <div className="rounded-panel border border-white/20 bg-white/10 p-6 shadow-glass backdrop-blur-glass sm:p-8">
+          <AppointmentForm />
+        </div>
+      </div>
```

Секцію «Як нас знайти» лишити під сіткою на всю ширину.

---

## 5. `app/services/page.tsx`

Три однакові правки по всій сторінці:

- контейнер: `py-14 sm:py-20` → `py-14 sm:py-20 lg:py-28`
- кожен `h2` з `text-[24px] … sm:text-[30px]` → додати `lg:text-[36px]` і `tracking-[-0.4px]`
- шапка сторінки: прибрати `mx-auto max-w-2xl text-center`, лишити `max-w-2xl`; `h1` → `text-[30px] sm:text-[42px] lg:text-[52px] tracking-[-0.8px]`

Списки `PROCEDURES` і `TREATED_CONDITIONS` (короткі рядки) на десктопі краще в три колонки:

```diff
-        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
+        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
```

Картки `CONDITIONS` і `VASCULAR_CONDITIONS` лишаються `sm:grid-cols-2` — у макеті так само.

---

## 6. `components/shared/patient-path.tsx`

Уже правильно: `sm:grid-cols-2 lg:grid-cols-5` + горизонтальна лінія на `lg`. Одна дрібниця — у макеті на `lg` картки тягнуться на однакову висоту:

```diff
-    <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
+    <ol className="relative grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
```

і на самій картці — `h-full`.

---

## 7. `components/shared/method-switch.tsx`

У макеті на `lg` панель методу двоколонкова: ілюстрація ліворуч (~45%), текст праворуч.

```diff
-<div className="rounded-card border border-white/15 bg-white/8 …">
+<div className="grid overflow-hidden rounded-card border border-white/15 bg-white/8 lg:grid-cols-[0.9fr_1.1fr] …">
```

Сам перемикач: `max-w-[420px]`, щоб на десктопі не розтягувався на всю ширину.

---

## 8. `components/layout/footer.tsx`

`md:grid-cols-3` збігається з макетом. Змін не треба.

---

# Частина 3. Анімації

Що вже є в коді: `@keyframes vpulse` / `vdash`, токени `--animate-vpulse` / `--animate-vflow`,
`prefers-reduced-motion` fallback, пульсація в `CircleOfWillis`.

Чого бракує проти макета — рівно чотири речі:

1. **Кровотік у герой-візуалі.** `CircleOfWillis` пульсує, але не має траси потоку —
   світлої іскри, що біжить від внутрішньої сонної артерії до базилярної.
   → `circle-of-willis.tsx` (заміна файлу)
2. **Анатомічні схеми статичні.** Аневризма, АВМ, стеноз, інсульт — без пульсуючого
   glow-шару. → чотири файли в `vessels/`
3. **Методи лікування без ілюстрацій.** У макеті на кожен метод — своя анімована схема:
   катетер, що просувається судиною, і кліпса на шийці аневризми.
   → `endovascular-access.tsx`, `microsurgical-clip.tsx` + патч `method-switch.tsx`
4. **Лінія шляху пацієнта — акцентна пунктирна.** У макеті це судина: градієнт
   артерія→вена, що м'яко пульсує. → патч `patient-path.tsx`

Порядок: спершу `globals.css`, далі `vessels/`, далі два патчі.

## Продуктивність

- `feGaussianBlur` — найдорожче, що тут є. Правило: **не більше двох glow-SVG
  у в'юпорті одночасно**. Герой + одна картка — межа.
- Анімуються тільки `opacity` і `stroke-dashoffset` — обидві на композиторі,
  без reflow.
- Кожен анімований вузол несе `data-pulse` або `data-flow`; медіа-запит
  `prefers-reduced-motion` глушить їх усі одним правилом (уже в `globals.css`).
- Схеми в картках, що лежать нижче згину, варто вмикати за `IntersectionObserver` —
  готовий хук `use-in-view.ts` у цій же папці.

## Патч токенів

```css
/* globals.css — додати до існуючого @theme inline */

  --animate-vflow-slow: vdash 8s linear infinite;
  --animate-vflow-fast: vdash 5s linear infinite;
  --animate-vpulse-slow: vpulse 5.2s ease-in-out infinite;

/* --- додати до @layer components --- */

@layer components {
  /* судинна лінія-конектор: артерія → вена */
  .vessel-line {
    @apply rounded-full bg-linear-to-b from-artery via-artery-bright to-vein;
  }
  .vessel-line-x {
    @apply rounded-full bg-linear-to-r from-artery via-artery-bright to-vein;
  }
  /* вузол на лінії шляху пацієнта */
  .vessel-node {
    @apply size-[15px] rounded-full border-[3px] border-artery-bright bg-elevated;
    box-shadow: 0 0 12px rgb(230 57 70 / 0.6);
  }
}

/* --- keyframes: додати поруч з наявними vpulse / vdash --- */

@keyframes vdash-long {
  to {
    stroke-dashoffset: -640;
  }
}
```

## Хук `src/lib/use-in-view.ts`

```ts
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Вмикає анімацію тільки коли елемент у в'юпорті.
 * Використання:
 *   const { ref, inView } = useInView<HTMLDivElement>();
 *   <div ref={ref}><Aneurysm animated={inView} /></div>
 */
export function useInView<T extends HTMLElement>(rootMargin = "120px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
```

## Компоненти судин (заміна файлів)


### `src/components/vessels/circle-of-willis.tsx`

```tsx
"use client";

import { useId, type SVGProps } from "react";

import { cn } from "@/lib/utils";

type CircleOfWillisProps = SVGProps<SVGSVGElement> & {
  /** false — глушить пульсацію і кровотік (для екранів нижче згину) */
  animated?: boolean;
  /** показати трасу кровотоку від сонної до базилярної артерії */
  flow?: boolean;
};

export function CircleOfWillis({
  animated = true,
  flow = true,
  className,
  ...props
}: CircleOfWillisProps) {
  const id = useId();
  const glowA = `${id}-glowA`;
  const glowV = `${id}-glowV`;
  const artg = `${id}-artg`;
  const veins = `${id}-veins`;
  const art = `${id}-art`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 420"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <defs>
        <filter id={glowA} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
          </feMerge>
        </filter>
        <linearGradient id={artg} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#e63946" />
        </linearGradient>
        <filter id={glowV} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <g id={veins} fill="none" stroke="#1d9bf0" strokeWidth={5} strokeLinecap="round">
          <path d="M28,88 C110,22 250,22 332,88" />
          <path d="M40,150 C96,120 130,150 150,200" />
          <path d="M320,150 C264,120 230,150 210,200" />
          <path d="M60,300 C110,300 140,320 168,360" />
          <path d="M300,300 C250,300 220,320 192,360" />
        </g>
        <g id={art} fill="none" stroke={`url(#${artg})`} strokeWidth={7} strokeLinecap="round">
          <path d="M170,120 C167,84 159,52 149,24" />
          <path d="M190,120 C193,84 201,52 211,24" />
          <path d="M170,120 L190,120" strokeWidth={6} />
          <path d="M170,120 C156,132 141,139 126,146" />
          <path d="M190,120 C204,132 219,139 234,146" />
          <path d="M126,146 C111,169 106,197 115,224" />
          <path d="M234,146 C249,169 254,197 245,224" />
          <path d="M126,146 C99,152 72,161 44,170" />
          <path d="M234,146 C261,152 288,161 316,170" />
          <path d="M74,159 C66,140 56,126 42,114" strokeWidth={5} />
          <path d="M286,159 C294,140 304,126 318,114" strokeWidth={5} />
          <path d="M62,164 C52,178 46,192 42,208" strokeWidth={5} />
          <path d="M298,164 C308,178 314,192 318,208" strokeWidth={5} />
          <path d="M115,224 C123,237 135,244 150,247" strokeWidth={5.5} />
          <path d="M245,224 C237,237 225,244 210,247" strokeWidth={5.5} />
          <path d="M180,258 C170,250 161,247 150,247 C131,247 114,256 98,269" />
          <path d="M180,258 C190,250 199,247 210,247 C229,247 246,256 262,269" />
          <path d="M180,258 L180,322" strokeWidth={8} />
          <path d="M180,322 C176,348 166,374 153,400" />
          <path d="M180,322 C184,348 194,374 207,400" />
        </g>
      </defs>

      {/* вени: розмитий шар + чіткий */}
      <use
        href={`#${veins}`}
        filter={`url(#${glowV})`}
        opacity={0.45}
        data-pulse=""
        className={animated ? "animate-vpulse-slow" : undefined}
      />
      <use href={`#${veins}`} opacity={0.5} />

      {/* артерії: розмитий шар + чіткий */}
      <use
        href={`#${art}`}
        filter={`url(#${glowA})`}
        opacity={0.75}
        data-pulse=""
        className={animated ? "animate-vpulse" : undefined}
      />
      <use href={`#${art}`} />

      {/* кровотік: іскра йде базилярною → внутрішньою сонною → до передньої мозкової */}
      {flow ? (
        <path
          d="M180,400 L180,322 L180,258 C170,250 161,247 150,247 C135,246 123,237 115,224 C106,197 111,169 126,146 C141,139 156,132 170,120 L190,120"
          fill="none"
          stroke="#ffd7d7"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeDasharray="26 300"
          opacity={0.9}
          data-flow=""
          className={animated ? "animate-vflow" : undefined}
        />
      ) : null}
    </svg>
  );
}
```


### `src/components/vessels/aneurysm.tsx`

```tsx
"use client";

import { useId, type SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

export function Aneurysm({ animated = true, ...props }: VesselProps) {
  const id = useId();
  const glowA = `${id}-glowA`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 110" aria-hidden="true" {...props}>
      <defs>
        <filter id={glowA} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
          </feMerge>
        </filter>
      </defs>

      {/* світний підшар судини — пульсує */}
      <path
        d="M10,72 C70,72 96,66 120,60"
        fill="none"
        stroke="#e63946"
        strokeWidth={12}
        strokeLinecap="round"
        opacity={0.35}
        filter={`url(#${glowA})`}
        data-pulse=""
        className={animated ? "animate-vpulse-slow" : undefined}
      />

      <path
        d="M10,72 C70,72 96,66 120,60 C150,53 168,40 200,40 C240,40 280,52 310,44"
        fill="none"
        stroke="#e63946"
        strokeWidth={11}
        strokeLinecap="round"
      />

      {/* мішечок аневризми: ореол дихає — це і є акцент кадру */}
      <circle
        cx={175}
        cy={26}
        r={21}
        fill="#ff6b6b"
        opacity={0.28}
        data-pulse=""
        className={animated ? "animate-vpulse" : undefined}
      />
      <path d="M158,44 C158,16 196,14 194,42" fill="#ff6b6b" stroke="#ff6b6b" strokeWidth={4} />

      {/* пунктирне кільце-виноска повільно обертається */}
      <circle
        cx={176}
        cy={26}
        r={26}
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={1.5}
        strokeDasharray="4 6"
        opacity={0.7}
        data-flow=""
        className={animated ? "animate-vflow-slow" : undefined}
      />
    </svg>
  );
}
```


### `src/components/vessels/avm.tsx`

```tsx
"use client";

import { useId, type SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

export function Avm({ animated = true, ...props }: VesselProps) {
  const id = useId();
  const glow = `${id}-glow`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 110" aria-hidden="true" {...props}>
      <defs>
        <filter id={glow} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* приносна артерія і відвідна вена */}
      <path d="M6,40 C50,40 80,52 110,58" fill="none" stroke="#e63946" strokeWidth={11} strokeLinecap="round" />
      <path d="M314,74 C270,74 240,64 212,58" fill="none" stroke="#1d9bf0" strokeWidth={11} strokeLinecap="round" />

      {/* клубок: світний підшар пульсує — показує надлишковий скид */}
      <g
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        opacity={0.5}
        filter={`url(#${glow})`}
        data-pulse=""
        className={animated ? "animate-vpulse" : undefined}
      >
        <path d="M112,58 C130,30 160,30 172,52 C182,70 206,72 212,58" stroke="#ff6b6b" />
        <path d="M112,58 C126,84 152,90 168,74 C184,58 204,66 212,58" stroke="#4dabf7" />
      </g>

      <g fill="none" strokeWidth={4.5} strokeLinecap="round">
        <path d="M112,58 C130,30 160,30 172,52 C182,70 206,72 212,58" stroke="#ff6b6b" />
        <path d="M112,58 C126,84 152,90 168,74 C184,58 204,66 212,58" stroke="#4dabf7" />
        <path d="M124,50 C144,44 150,72 168,64" stroke="#ff6b6b" />
        <path d="M134,76 C154,80 156,44 180,50" stroke="#4dabf7" />
        <path d="M150,36 C170,44 176,84 196,76" stroke="#ff6b6b" />
      </g>

      {/* потік: артерія → клубок → вена, без капілярів */}
      <path
        d="M6,40 C50,40 80,52 110,58 C130,30 160,30 172,52 C182,70 206,72 212,58 C240,64 270,74 314,74"
        fill="none"
        stroke="#ffe3e3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="18 300"
        opacity={0.85}
        data-flow=""
        className={animated ? "animate-vflow-fast" : undefined}
      />
    </svg>
  );
}
```


### `src/components/vessels/stenosis.tsx`

```tsx
"use client";

import type { SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

export function Stenosis({ animated = true, ...props }: VesselProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 110" aria-hidden="true" {...props}>
      {/* стінки судини */}
      <path
        d="M8,40 L124,40 C150,40 150,52 170,52 C190,52 190,40 216,40 L312,40"
        fill="none"
        stroke="#e63946"
        strokeWidth={3.5}
      />
      <path
        d="M8,74 L124,74 C150,74 150,62 170,62 C190,62 190,74 216,74 L312,74"
        fill="none"
        stroke="#e63946"
        strokeWidth={3.5}
      />

      {/* просвіт */}
      <path d="M8,57 L312,57" fill="none" stroke="#ff6b6b" strokeWidth={26} opacity={0.28} />

      {/* бляшка перекриває просвіт */}
      <path
        d="M126,44 C148,44 150,54 168,54 C188,54 190,44 214,44 L214,70 C190,70 188,60 168,60 C150,60 148,70 126,70 Z"
        fill="#0a2540"
        opacity={0.55}
      />

      {/* кровотік: до звуження — товстий, після — тонкий і рідший */}
      <path
        d="M8,57 L126,57"
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray="20 60"
        opacity={0.75}
        data-flow=""
        className={animated ? "animate-vflow-fast" : undefined}
      />
      <path
        d="M214,57 L312,57"
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="8 90"
        opacity={0.5}
        data-flow=""
        className={animated ? "animate-vflow-slow" : undefined}
      />

      {/* маркер місця звуження */}
      <path d="M170,18 L170,34" stroke="#5dcaa5" strokeWidth={2.5} strokeLinecap="round" />
      <path
        d="M164,30 L170,36 L176,30"
        fill="none"
        stroke="#5dcaa5"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```


### `src/components/vessels/stroke.tsx`

```tsx
"use client";

import type { SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

export function Stroke({ animated = true, ...props }: VesselProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 110" aria-hidden="true" {...props}>
      {/* судина до тромба — з кровотоком */}
      <path d="M6,55 C60,55 100,50 140,50" fill="none" stroke="#e63946" strokeWidth={11} strokeLinecap="round" />
      <path
        d="M6,55 C60,55 100,50 136,50"
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="16 70"
        opacity={0.8}
        data-flow=""
        className={animated ? "animate-vflow-fast" : undefined}
      />

      {/* знекровлені гілки за тромбом — приглушені, без потоку */}
      <path d="M140,50 C180,50 206,32 250,26" fill="none" stroke="#e63946" strokeWidth={8} strokeLinecap="round" opacity={0.22} />
      <path d="M140,50 C180,50 206,70 250,84" fill="none" stroke="#e63946" strokeWidth={8} strokeLinecap="round" opacity={0.22} />

      {/* тромб */}
      <ellipse
        cx={140}
        cy={50}
        rx={13}
        ry={11}
        fill="#7a9cb5"
        data-pulse=""
        className={animated ? "animate-vpulse-slow" : undefined}
      />

      <circle cx={250} cy={26} r={4} fill="#7a9cb5" opacity={0.5} />
      <circle cx={250} cy={84} r={4} fill="#7a9cb5" opacity={0.5} />
    </svg>
  );
}
```


### `src/components/vessels/endovascular-access.tsx`

```tsx
"use client";

import type { SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Ендоваскулярний доступ: катетер просувається судиною до цілі. */
export function EndovascularAccess({ animated = true, ...props }: VesselProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" aria-hidden="true" {...props}>
      {/* просвіт судини */}
      <path
        d="M6,96 C70,96 110,80 150,60 C186,42 230,34 314,34"
        fill="none"
        stroke="#e63946"
        strokeWidth={24}
        strokeLinecap="round"
        opacity={0.25}
      />
      {/* стінки */}
      <path d="M6,96 C70,96 110,80 150,60 C186,42 230,34 314,34" fill="none" stroke="#e63946" strokeWidth={2.5} strokeLinecap="round" opacity={0.9} />
      <path d="M6,108 C70,108 112,92 152,72 C188,54 230,46 314,46" fill="none" stroke="#e63946" strokeWidth={2.5} strokeLinecap="round" opacity={0.9} />

      {/* катетер: dashoffset тягне кінчик уперед */}
      <path
        d="M10,102 C74,102 112,86 152,66 C190,48 236,40 268,40"
        fill="none"
        stroke="#5dcaa5"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray="300 40"
        data-flow=""
        className={animated ? "animate-vflow-fast" : undefined}
      />
      {/* кінчик і встановлена спіраль */}
      <circle cx={268} cy={40} r={6} fill="#5dcaa5" data-pulse="" className={animated ? "animate-vpulse" : undefined} />
      <path
        d="M282,24 C296,20 302,32 292,38 C284,43 288,26 278,30"
        fill="none"
        stroke="#ffd7d7"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}
```


### `src/components/vessels/microsurgical-clip.tsx`

```tsx
"use client";

import type { SVGProps } from "react";

type VesselProps = SVGProps<SVGSVGElement> & { animated?: boolean };

/** Мікрохірургія: кліпса перекриває шийку аневризми. */
export function MicrosurgicalClip({ animated = true, ...props }: VesselProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" aria-hidden="true" {...props}>
      <path
        d="M6,80 C80,80 120,74 160,66"
        fill="none"
        stroke="#e63946"
        strokeWidth={22}
        strokeLinecap="round"
        opacity={0.2}
        data-pulse=""
        className={animated ? "animate-vpulse-slow" : undefined}
      />
      <path
        d="M6,80 C80,80 120,74 160,66 C210,56 260,60 314,54"
        fill="none"
        stroke="#e63946"
        strokeWidth={12}
        strokeLinecap="round"
      />

      {/* виключений мішечок — блідне, бо вимкнений із кровотоку */}
      <path d="M146,60 C146,26 190,26 186,58" fill="#ff6b6b" opacity={0.45} stroke="#ff6b6b" strokeWidth={3} />

      {/* бранші кліпси */}
      <g stroke="#c5d8e8" strokeWidth={5} strokeLinecap="round">
        <path d="M140,58 L192,52" />
        <path d="M140,68 L192,62" />
        <path d="M192,52 L214,44" />
        <path d="M192,62 L214,70" />
      </g>

      <circle
        cx={166}
        cy={40}
        r={20}
        fill="none"
        stroke="#5dcaa5"
        strokeWidth={1.5}
        strokeDasharray="4 6"
        opacity={0.7}
        data-flow=""
        className={animated ? "animate-vflow-slow" : undefined}
      />
    </svg>
  );
}
```


## Патчі компонентів

### `components/shared/method-switch.tsx`

Зараз ліва колонка — самі кнопки-таби, ілюстрації немає. У макеті кнопки стоять
над панеллю, а ліва колонка панелі — анімована схема методу.

```diff
+import { EndovascularAccess } from "@/components/vessels/endovascular-access";
+import { MicrosurgicalClip } from "@/components/vessels/microsurgical-clip";
+
 export function MethodSwitch({ methods }: MethodSwitchProps) {
   const [active, setActive] = useState<TreatmentMethod["method"]>(
     methods[0]?.method ?? "endovascular"
   );
   const current = methods.find((item) => item.method === active) ?? methods[0];
 
   return (
-    <div className="glass grid overflow-hidden gap-5 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
-      <div
-        role="tablist"
-        aria-label="Метод лікування"
-        className="flex max-w-105 gap-2 rounded-lg bg-deep/60 p-1"
-      >
+    <div>
+      <div
+        role="tablist"
+        aria-label="Метод лікування"
+        className="mb-3.5 flex max-w-105 gap-2 rounded-lg border border-white/12 bg-white/6 p-1"
+      >
         {methods.map((item) => ( … без змін … ))}
       </div>
 
-      {current ? (
-        <div>
+      {current ? (
+        <div className="glass grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
+          <div className="flex items-center bg-deep px-0 py-2">
+            {active === "endovascular" ? (
+              <EndovascularAccess className="h-auto w-full" />
+            ) : (
+              <MicrosurgicalClip className="h-auto w-full" />
+            )}
+          </div>
+
+          <div className="p-5 sm:p-6">
             <p className="text-base text-ink-body">{current.description}</p>
             <ul className="mt-4 flex flex-col gap-2">
               … без змін …
             </ul>
+          </div>
         </div>
       ) : null}
     </div>
   );
 }
```

Перемикання методу міняє SVG — анімація стартує заново, це навмисно: користувач
бачить, як катетер заходить у судину після кліку.

### `components/shared/patient-path.tsx`

Лінія зараз акцентна пунктирна. У макеті це судина: суцільний градієнт
артерія → вена з м'якою пульсацією, і вузол-«отвір» на кожному кроці.

```diff
     <ol className="relative grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
-      <svg
-        aria-hidden="true"
-        className="pointer-events-none absolute top-4 right-4 left-4 -z-10 hidden h-1 w-[calc(100%-2rem)] lg:block"
-        preserveAspectRatio="none"
-        viewBox="0 0 100 1"
-      >
-        <line … strokeDasharray="3 3" data-flow="" className="animate-vflow" />
-      </svg>
+      {/* судинний конектор — горизонтальний на lg */}
+      <span
+        aria-hidden="true"
+        data-pulse=""
+        className="vessel-line-x animate-vpulse pointer-events-none absolute top-4 right-4 left-4 -z-10 hidden h-[3px] lg:block"
+      />
+      {/* вертикальний варіант для phone/tablet */}
+      <span
+        aria-hidden="true"
+        data-pulse=""
+        className="vessel-line animate-vpulse pointer-events-none absolute top-2 bottom-2 left-[13px] -z-10 w-[3px] sm:hidden"
+      />
 
       {steps.map((item) => (
         <li
           key={item.step}
-          className="flex h-full flex-col gap-2 rounded-card border border-white/15 bg-white/5 p-4"
+          className="relative flex h-full flex-col gap-2 rounded-[20px] border border-white/15 bg-white/8 p-4 backdrop-blur-glass"
         >
+          <span aria-hidden="true" className="vessel-node absolute -left-[30px] top-[18px] sm:hidden" />
           <span
             aria-hidden="true"
-            className="flex size-8 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-primary-foreground"
+            className="font-heading text-[11px] font-bold tracking-[1px] text-accent-bright"
           >
             {item.step}
           </span>
```

На phone список стає вертикальним: конектор ліворуч, вузли навпроти карток
(`pl-[34px]` на самому `<ol>`). На sm і вище — сітка з горизонтальною лінією,
вузли ховаються.

### `components/shared/condition-card.tsx`

Картка має отримати `animated`, щоб схема не крутилась поза екраном.

```diff
+"use client";
+
+import { useInView } from "@/lib/use-in-view";
+
 export function ConditionCard({ slug, title, … }: ConditionCardProps) {
+  const { ref, inView } = useInView<HTMLDivElement>();
   const Illustration = ILLUSTRATIONS[slug];
 
   return (
-    <div className="glass overflow-hidden">
+    <div ref={ref} className="glass overflow-hidden">
       <div className="bg-deep py-1.5">
-        <Illustration className="h-26 w-full" />
+        <Illustration animated={inView} className="h-26 w-full" />
       </div>
```

Те саме — для герой-візуала: `<CircleOfWillis animated flow />` лишається завжди
ввімкненим (він над згином), а всі схеми нижче йдуть через `useInView`.

---

# Частина 4. Довідка

## Брейкпоінти

**phone < 640 · tablet 640–1023 (`sm:`) · desktop ≥ 1024 (`lg:`)**

| | phone | tablet | desktop |
|---|---|---|---|
| H1 головна | 34px | 46px | 60px |
| H1 внутрішні | 30px | 42px | 52px |
| H2 | 24px | 30px | 36px |
| контейнер | 100% | 900px | 1180px |
| бокові поля | 20px | 32px | 48px |
| відступ секції | 34px | 52px | 76px |
| статистика | 2 кол. | 4 кол. | 4 кол. |
| напрямки | 1 | 2 | 2 |
| стани судин | 1 | 2 | 2 |
| відгуки | 1 | 3 | 3 |
| шлях пацієнта | вертикально | 2 кол. | 5 кол. горизонтально |
| методи | 1 кол. | 2 кол. | 2 кол. |
| форма запису | 1 кол. | 2 кол. | 2 кол. |
| футер | 1 кол. | 3 кол. | 3 кол. |

## Кольори

Червоний і синій — **тільки** всередині судинних SVG. Інтерфейс (кнопки, лінки,
активні стани, акценти) — teal `--accent: #1db894`. Заголовки `#ffffff`,
основний текст `#c5d8e8`, приглушений `#7a9cb5` (лише ≥ 12px).

## Скло

`.glass` = `bg-white/8` + `border-white/15` + `backdrop-blur-glass` + `shadow-glass`
+ `rounded-card`. Не вкладати glass у glass — внутрішня панель має бути
суцільною `bg-deep/60`.

## Розміри дотику

CTA 52px · вторинна кнопка 48px · решта інтерактивного не менше 44px.

## Анімації

Тільки `opacity` і `stroke-dashoffset`. Кожен анімований вузол несе
`data-pulse` або `data-flow` — `prefers-reduced-motion` глушить їх одним правилом.
Не більше двох glow-SVG у в'юпорті одночасно.

## Що поза макетом

`/privacy`, `not-found`, `floating-appointment-button`, `location-map`,
API-роут запису, email-шаблони, SEO-файли, мобільне меню-`sheet` — лишати як є.

## Чого чекає макет від замовника

Реальна біографія й титули, три відгуки пацієнтів, телефон і месенджери,
портретне фото на темному фоні.
