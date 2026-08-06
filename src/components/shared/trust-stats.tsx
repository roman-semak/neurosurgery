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
        <div key={stat.label} className="text-center sm:text-left">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
            {stat.value}
          </dd>
          <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
