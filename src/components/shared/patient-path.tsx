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
    <ol className="relative grid items-stretch gap-5 pl-8.5 sm:grid-cols-2 sm:pl-0 lg:grid-cols-5">
      <span
        aria-hidden="true"
        data-pulse=""
        className="vessel-line-x animate-vpulse pointer-events-none absolute top-4 right-4 left-4 -z-10 hidden h-0.75 lg:block"
      />
      <span
        aria-hidden="true"
        data-pulse=""
        className="vessel-line animate-vpulse pointer-events-none absolute top-2 bottom-2 left-3.25 -z-10 w-0.75 sm:hidden"
      />

      {steps.map((item) => (
        <li
          key={item.step}
          className="relative flex h-full flex-col gap-2 rounded-[20px] border border-white/15 bg-white/8 p-4 backdrop-blur-glass"
        >
          <span aria-hidden="true" className="vessel-node absolute -left-7.5 top-4.5 sm:hidden" />
          <span
            aria-hidden="true"
            className="font-heading text-[11px] font-bold tracking-[1px] text-accent-bright"
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
