# Handoff: сайт нейрохірурга І. І. Скороходи

Джерело істини для верстки — Design Component `Скорохода - мобільний сайт.dc.html` у цьому проєкті.
Тут — усе, що потрібно перенести в Next.js + Tailwind.

## 1. Стек і структура

```
app/
  layout.tsx            — шрифти (Manrope / Commissioner), <SiteNav/>, <SiteFooter/>
  page.tsx              — головна
  about/page.tsx        — про лікаря
  services/page.tsx     — напрямки роботи
  appointment/page.tsx  — форма запису
components/
  SiteNav.tsx           — sticky glass, z-10
  SiteFooter.tsx
  Hero.tsx              — містить <CircleOfWillis/>
  AreaCard.tsx          — картка «Чим допомагаю»
  StatGrid.tsx
  PatientPath.tsx       — 5 кроків із судинною прогрес-лінією
  ConditionCard.tsx     — ілюстрація + «що це / чим небезпечно / як лікуємо»
  MethodSwitch.tsx      — ендоваскулярний / мікрохірургічний
  ReviewCard.tsx
  AppointmentForm.tsx   — стани idle / loading / success / error
  vessels/              — SVG як React-компоненти (див. п.4)
```

Mobile-first: базові стилі — мобільні, десктоп через `md:` / `lg:`.

## 2. Токени

`tailwind.config.ts` і `globals.css` у цій же папці — копіювати як є.
Правило кольору: червоний/синій **тільки** всередині судинних SVG. Інтерфейс
(кнопки, лінки, активні стани) — teal `accent`.

Типографіка:
- заголовки — Manrope 600, `tracking-[-0.5px]`, розміри 34 / 30 / 24 / 22 / 18px
- основний текст — Commissioner 400, 15px, `text-wrap: pretty`
- підписи/лейбли — 11.5px, `uppercase`, `tracking-[1.6px]`, `text-ink-muted`

## 3. Компонентні правила

- **Скляна панель**: клас `.glass`. Не вкладати glass у glass — друга панель
  всередині першої має бути суцільною `bg-bg-deep/60`.
- **Хедер**: `z-10`, менший за шар статус-бара iOS. Бренд `whitespace-nowrap`,
  меню — 3 пункти + акцентна кнопка «Запис».
- **Кнопки**: мінімальна висота 52px (CTA) / 48px (вторинні) / 44px (усе інше).
- **Іконки**: лінійні SVG, stroke 2.4, `stroke-linecap="round"`, колір артерії.
- **Контраст**: основний текст `#c5d8e8` на `#0a2540` = 8.4:1 (AA+).
  `#7a9cb5` використовувати лише для підписів ≥ 12px.

## 4. Судинні візуалізації

SVG-файли лежать у `assets/`. Переносити як React-компоненти
(`import CircleOfWillis from '@/components/vessels/CircleOfWillis'`), а не через `<img>` —
щоб працювали filter-glow і анімації.

| Файл | Де використовується |
|---|---|
| `circle-of-willis.svg` | герой головної |
| `aneurysm.svg` | картка «Аневризма», /services |
| `avm.svg` | картка «АВМ», /services |
| `stenosis.svg` | картка «Стеноз і оклюзія», /services |
| `stroke.svg` | картка «Інсульт», /services |

Анімації: два шари одного `<g>` — розмитий (`filter`) з `animate-vpulse` і чіткий
зверху. Потік крові — `stroke-dasharray` + `animate-vflow`. Обидва шари мають
атрибути `data-pulse` / `data-flow`, які глушить `prefers-reduced-motion`.

Продуктивність: не більше одного великого glow-SVG у в'юпорті одночасно;
`feGaussianBlur` дорогий на слабких Android — фонові судинні шари віддавати
статичним PNG/WebP, анімувати лише герой.

## 5. Форма запису

Поля: ім'я та прізвище (required), телефон (required, tel), опис проблеми (textarea),
чекбокс згоди (required). Стани: idle → loading → success / error.
Success: «Заявку прийнято» + кнопка «Надіслати ще одну».
Валідація — на клієнті, надсилання — server action.

## 6. Що ще потрібно від замовника

- реальна біографія, титули, роки освіти й стажувань
- 3 реальні відгуки пацієнтів
- телефон, месенджери, точна адреса кабінету
- портретне фото лікаря (бажано на темному фоні)
