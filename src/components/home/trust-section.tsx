import { TrustStats } from "@/components/shared/trust-stats";
import { TRUST_STATS } from "@/lib/content/doctor";

export function TrustSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-deep">
      <div
        className="absolute -bottom-24 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <TrustStats stats={TRUST_STATS} />
      </div>
    </section>
  );
}
