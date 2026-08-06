import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  text: string;
};

export function TestimonialCard({ name, text }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent>
        <QuoteIcon
          className="mb-3 size-6 text-secondary"
          aria-hidden="true"
        />
        <blockquote className="text-base leading-relaxed text-foreground">
          {text}
        </blockquote>
      </CardContent>
      <CardFooter className="border-t-0 bg-transparent pt-0">
        <p className="text-sm font-medium text-muted-foreground">{name}</p>
      </CardFooter>
    </Card>
  );
}
