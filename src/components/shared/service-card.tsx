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
        <div className="flex flex-row items-center gap-3">
          {Icon ? (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-artery/35 bg-artery/10">
              <Icon strokeWidth={2.4} className="size-5 text-artery-bright" aria-hidden="true" />
            </div>
          ) : null}
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
