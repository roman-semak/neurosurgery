"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { GALLERY_PHOTOS } from "@/lib/content/gallery";

const AUTOPLAY_INTERVAL_MS = 4000;

export function GallerySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const timer = window.setInterval(() => {
      if (pausedRef.current || openIndex !== null) return;

      const slides = track.children;
      indexRef.current = (indexRef.current + 1) % slides.length;
      const nextSlide = slides[indexRef.current] as HTMLElement;
      track.scrollTo({ left: nextSlide.offsetLeft, behavior: "smooth" });
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [openIndex]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <h2 className="text-center font-heading text-[24px] font-semibold text-foreground sm:text-[30px]">
        З операційної
      </h2>

      <div
        ref={trackRef}
        // onMouseMove, not onMouseEnter: scrolling the page under a stationary
        // cursor still fires mouseenter and would falsely pause autoplay forever.
        onMouseMove={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
        onFocus={pause}
        onBlur={resume}
        className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {GALLERY_PHOTOS.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label="Відкрити фото на весь екран"
            className="relative aspect-[4/3] w-[80%] shrink-0 snap-center overflow-hidden rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary sm:w-[46%] lg:w-[31%]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 80vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => setOpenIndex(open ? openIndex : null)}
      >
        <DialogContent className="w-[calc(100%-1rem)] max-w-5xl p-2 sm:p-2">
          <DialogTitle className="sr-only">
            {openIndex !== null ? GALLERY_PHOTOS[openIndex].alt : ""}
          </DialogTitle>
          {openIndex !== null && (
            <div className="relative h-[80vh] w-full overflow-hidden rounded-panel">
              <Image
                src={GALLERY_PHOTOS[openIndex].src}
                alt={GALLERY_PHOTOS[openIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
