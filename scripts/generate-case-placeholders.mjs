// One-off generator for placeholder "before/after" case photos.
// Run with: node scripts/generate-case-placeholders.mjs
// Replace the generated SVGs under public/images/cases/ with real patient
// photos (same filename convention, .jpg/.webp) once the doctor provides them.

import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "cases");
mkdirSync(outDir, { recursive: true });

const PATIENTS = [
  { slug: "patient-a", identifier: "Пацієнт А" },
  { slug: "patient-b", identifier: "Пацієнт Б" },
  { slug: "patient-c", identifier: "Пацієнт В" },
  { slug: "patient-d", identifier: "Пацієнт Г" },
  { slug: "patient-e", identifier: "Пацієнт Д" },
  { slug: "patient-f", identifier: "Пацієнт Е" },
];

const PHOTOS_PER_SIDE = 4;

function buildSvg({ identifier, stageLabel, index, total }) {
  const width = 640;
  const height = 640;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${identifier} — ${stageLabel} ${index}/${total}">
  <defs>
    <pattern id="hatch" width="24" height="24" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <rect width="24" height="24" fill="#0f3352" />
      <line x1="0" y1="0" x2="0" y2="24" stroke="#5dcaa5" stroke-opacity="0.12" stroke-width="6" />
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#hatch)" />
  <rect x="16" y="16" width="${width - 32}" height="${height - 32}" fill="none" stroke="#1db894" stroke-width="3" rx="24" />
  <text x="50%" y="46%" text-anchor="middle" font-family="sans-serif" font-size="34" font-weight="600" fill="#f4f8f6">${identifier}</text>
  <text x="50%" y="54%" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="600" fill="#5dcaa5" letter-spacing="2">${stageLabel.toUpperCase()} · ${index}/${total}</text>
  <text x="50%" y="94%" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#a9c2d6" opacity="0.8">Плейсхолдер — не реальне фото пацієнта</text>
</svg>`;
}

let count = 0;
for (const { slug, identifier } of PATIENTS) {
  for (const [stage, stageLabel] of [
    ["before", "До"],
    ["after", "Після"],
  ]) {
    for (let i = 1; i <= PHOTOS_PER_SIDE; i++) {
      const num = String(i).padStart(2, "0");
      const filename = `${slug}-${stage}-${num}.svg`;
      const svg = buildSvg({
        identifier,
        stageLabel,
        index: i,
        total: PHOTOS_PER_SIDE,
      });
      writeFileSync(path.join(outDir, filename), svg, "utf8");
      count++;
    }
  }
}

console.log(`Generated ${count} placeholder SVGs in ${outDir}`);
