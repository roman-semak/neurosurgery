import { TestimonialCard } from "@/components/shared/testimonial-card";
import { TESTIMONIALS } from "@/lib/content/testimonials";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-deep py-14 sm:py-20">
      <div
        className="absolute -top-24 -left-24 -z-10 size-96 rounded-full bg-accent/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Відгуки пацієнтів
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
