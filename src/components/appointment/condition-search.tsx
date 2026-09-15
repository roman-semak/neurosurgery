"use client";

import { useId, useMemo, useState } from "react";
import { CheckIcon, SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { TREATED_CONDITION_GROUPS } from "@/lib/content/services";

const MIN_QUERY_LENGTH = 2;
const MAX_RESULTS = 6;

// Lowercase and fold the characters patients type inconsistently:
// apostrophe variants and dash variants ("Мойа – Мойа", "Мойа-Мойа").
function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[ʼ’`']/g, "'")
    .replace(/[–—-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const SEARCH_INDEX = TREATED_CONDITION_GROUPS.flatMap((group) =>
  group.items.map((item) => ({
    item,
    group: group.title,
    haystack: normalize(`${item} ${group.title}`),
  }))
);

export function ConditionSearch() {
  const inputId = useId();
  const [query, setQuery] = useState("");
  const normalizedQuery = normalize(query);
  const isActive = normalizedQuery.length >= MIN_QUERY_LENGTH;

  const results = useMemo(() => {
    if (!isActive) return [];
    const words = normalizedQuery.split(" ");
    return SEARCH_INDEX.filter((entry) =>
      words.every((word) => entry.haystack.includes(word))
    );
  }, [isActive, normalizedQuery]);

  return (
    <div className="rounded-panel border border-black/8 bg-white/70 p-5 backdrop-blur-glass sm:p-6">
      <label
        htmlFor={inputId}
        className="font-heading text-[18px] font-semibold text-foreground"
      >
        Чи лікує відділення вашу хворобу?
      </label>
      <p className="mt-1 text-sm text-ink-muted">
        Почніть вводити назву діагнозу — ми покажемо, чи є він серед станів, які
        ми лікуємо.
      </p>
      <div className="relative mt-3">
        <SearchIcon
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-muted"
          aria-hidden="true"
        />
        <Input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Наприклад: аневризма, стеноз, мальформація"
          autoComplete="off"
          className="h-11 pl-9 text-base"
        />
      </div>

      <div aria-live="polite" className="empty:hidden">
        {isActive && results.length > 0 ? (
          <div className="mt-4">
            <p className="flex items-center gap-2 text-sm font-medium text-success">
              <CheckIcon className="size-4 shrink-0" aria-hidden="true" />
              Так, відділення лікує{" "}
              {results.length === 1 ? "цей стан" : `такі стани (${results.length})`}
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {results.slice(0, MAX_RESULTS).map((entry) => (
                <li
                  key={entry.item}
                  className="rounded-[14px] border border-black/8 bg-white/60 px-4 py-2.5"
                >
                  <span className="block text-[15px] leading-snug text-foreground">
                    {entry.item}
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-muted">
                    {entry.group}
                  </span>
                </li>
              ))}
            </ul>
            {results.length > MAX_RESULTS ? (
              <p className="mt-2 text-xs text-ink-muted">
                І ще {results.length - MAX_RESULTS} — уточніть запит, щоб
                знайти свій діагноз.
              </p>
            ) : null}
          </div>
        ) : null}

        {isActive && results.length === 0 ? (
          <p className="mt-4 text-sm text-pretty text-ink-body">
            Не знайшли свій діагноз? Опишіть проблему у формі — лікар підкаже,
            чи можемо допомогти.
          </p>
        ) : null}
      </div>
    </div>
  );
}
