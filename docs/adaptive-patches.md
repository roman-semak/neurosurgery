# Патчі адаптивності: макет → код

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
