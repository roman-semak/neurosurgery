type LocationMapProps = {
  query: string;
  title: string;
};

export function LocationMap({ query, title }: LocationMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/15">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-video w-full"
      />
    </div>
  );
}
