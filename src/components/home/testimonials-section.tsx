import { TestimonialCard } from "@/components/shared/testimonial-card";
import { TESTIMONIALS } from "@/lib/content/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-muted/40 py-14 sm:py-20">
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
