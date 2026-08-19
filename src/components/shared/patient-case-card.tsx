import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { CasePhoto, PatientCase } from "@/lib/content/patient-cases";

function PhotoGrid({ photos }: { photos: CasePhoto[] }) {
  return (
    <div className={cn("grid gap-2", photos.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="relative aspect-square overflow-hidden rounded-lg border border-white/10"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={photos.length > 1 ? "(min-width: 640px) 20vw, 40vw" : "(min-width: 640px) 40vw, 80vw"}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function PatientCaseCard({ patientCase }: { patientCase: PatientCase }) {
  return (
    <Dialog>
      <DialogTrigger className="block h-full w-full rounded-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
        <Card className="h-full cursor-pointer transition hover:-translate-y-0.5">
          <CardHeader>
            <CardTitle className="text-lg">{patientCase.identifier}</CardTitle>
            <CardDescription>{patientCase.ageSex}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-foreground">
              {patientCase.diagnosis}
            </p>
            <p className="mt-3 text-sm text-secondary">
              {patientCase.resultSummary}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {patientCase.identifier} · {patientCase.ageSex}
          </DialogTitle>
          <DialogDescription>{patientCase.diagnosis}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-sm font-medium tracking-wide text-muted-foreground uppercase">
              До
            </h3>
            <div className="mt-3">
              <PhotoGrid photos={patientCase.beforePhotos} />
            </div>
          </div>
          <div>
            <h3 className="font-heading text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Після
            </h3>
            <div className="mt-3">
              <PhotoGrid photos={patientCase.afterPhotos} />
            </div>
          </div>
        </div>
        <p className="text-sm text-secondary">{patientCase.resultSummary}</p>
      </DialogContent>
    </Dialog>
  );
}
