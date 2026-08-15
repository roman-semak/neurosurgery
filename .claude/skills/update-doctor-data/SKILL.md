---
name: update-doctor-data
description: Use whenever the user provides new or updated data about the doctor or clinic — text, a screenshot, a photo of a document, a CV, an attestation file, etc. Also use when asked to "update doctor info", "add doctor data", "оновити дані про лікаря" or similar. Governs the required order of operations — docs file first, site code second — for this project.
---

# Updating doctor/clinic data

This project keeps `docs/doctor.md` as the single source of truth for all
biographical and clinical data about the site's doctor. The rendered site
(`src/lib/content/doctor.ts`, `src/lib/content/services.ts`, and the
pages/components that import them) must never be edited directly from a raw
source (screenshot, document, message) without first passing through that
file.

## Process

1. **Record in `docs/doctor.md` first.** Add or update the relevant section
   with the new data, in Ukrainian, matching the file's existing structure
   (Особисті дані, Біографія, Освіта та стажування, Досвід роботи, Наукова
   діяльність, Членство в асоціаціях, Хвороби, які лікує відділення, etc.).
   Preserve everything already there — this is an append/update operation,
   not a rewrite.
2. **Flag conflicts, don't silently resolve them.** If the new data
   contradicts something already in `docs/doctor.md` or on the live site
   (e.g. a different start date, a different institution), add a clearly
   marked note (see the "⚠️ Стаж — потребує уточнення" section in
   `docs/doctor.md` for the pattern) instead of guessing which is correct.
   Ask the user to resolve it before touching any `src/` file.
3. **Only then propagate confirmed data into the site.** Update the matching
   exports in `src/lib/content/doctor.ts` / `src/lib/content/services.ts` (add
   a new export if the data doesn't fit an existing one), and update the
   consuming page/component if a new field needs a new section to render.
4. **Never hardcode doctor/clinic copy directly in components or pages.**
   All such copy must live in `src/lib/content/*.ts` and be imported.

## Reference

- `docs/doctor.md` — the staging/source file.
- `src/lib/content/doctor.ts` — personal/biographical data consumed by
  `src/app/about/page.tsx`, homepage sections, `src/lib/seo/physician-schema.ts`.
- `src/lib/content/services.ts` — clinical/service data consumed by
  `src/app/services/page.tsx`.
