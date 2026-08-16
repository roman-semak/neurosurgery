type PatientStep = {
  step: string;
  title: string;
  description: string;
};

type PatientPathProps = {
  steps: PatientStep[];
};

export function PatientPath({ steps }: PatientPathProps) {
  return (
    <ol className="relative grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-4 left-4 -z-10 hidden h-1 w-[calc(100%-2rem)] lg:block"
        preserveAspectRatio="none"
        viewBox="0 0 100 1"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          stroke="var(--accent)"
          strokeWidth={1}
          strokeLinecap="round"
          strokeDasharray="3 3"
          opacity={0.5}
          data-flow=""
          className="animate-vflow"
        />
      </svg>

      {steps.map((item) => (
        <li
          key={item.step}
          className="flex h-full flex-col gap-2 rounded-card border border-white/15 bg-white/5 p-4"
        >
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-primary-foreground"
          >
            {item.step}
          </span>
          <span className="font-medium text-foreground">{item.title}</span>
          <span className="text-sm text-muted-foreground">{item.description}</span>
        </li>
      ))}
    </ol>
  );
}
