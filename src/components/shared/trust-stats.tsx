type TrustStat = {
  value: string;
  label: string;
};

type TrustStatsProps = {
  stats: TrustStat[];
};

export function TrustStats({ stats }: TrustStatsProps) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-card border border-white/15 bg-white/5 p-4 text-center backdrop-blur-glass sm:text-left"
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-heading text-3xl font-semibold text-accent-bright sm:text-4xl">
            {stat.value}
          </dd>
          <dd className="mt-1 text-[11.5px] uppercase tracking-[1.6px] text-ink-muted">
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
