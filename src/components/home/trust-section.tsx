import { TrustStats } from "@/components/shared/trust-stats";
import { TRUST_STATS } from "@/lib/content/doctor";

export function TrustSection() {
  return (
    <section className="border-y border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <TrustStats stats={TRUST_STATS} />
      </div>
    </section>
  );
}
