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
          className="rounded-[18px] border border-white/[0.14] bg-white/[0.07] p-4 backdrop-blur-glass"
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-heading text-[24px] leading-none font-bold text-ink-heading sm:text-[30px] lg:text-[36px]">
            {stat.value}
          </dd>
          <dd className="mt-1.5 text-[13px] text-ink-muted">
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
