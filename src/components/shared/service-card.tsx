import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        {Icon ? (
          <div className="mb-1 flex size-10 items-center justify-center rounded-full border border-artery/35 bg-artery/10">
            <Icon strokeWidth={2.4} className="size-5 text-artery-bright" aria-hidden="true" />
          </div>
        ) : null}
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
