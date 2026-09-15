import Link from "next/link";

export const ENDOVASCULAR_PATH = "/services/endovascular";

// Matches any inflection: ендоваскулярна, ендоваскулярного, ендоваскулярним…
const ENDOVASCULAR_WORD = /(ендоваскулярн[\p{L}ʼ'’-]*)/iu;

type EndovascularTextProps = {
  text: string;
};

// Renders plain text, turning every "ендоваскулярн…" word into a highlighted
// link to the endovascular procedure page. Don't use inside buttons or other
// links — nested interactive elements are invalid HTML.
export function EndovascularText({ text }: EndovascularTextProps) {
  const parts = text.split(ENDOVASCULAR_WORD);
  if (parts.length === 1) return text;

  // split() with a capture group puts the matches at odd indexes.
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <Link
        key={index}
        href={ENDOVASCULAR_PATH}
        className="font-semibold text-accent-bright underline decoration-accent-bright/40 underline-offset-2 transition-colors hover:decoration-current"
      >
        {part}
      </Link>
    ) : (
      part
    )
  );
}
