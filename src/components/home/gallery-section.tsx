"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { GALLERY_PHOTOS } from "@/lib/content/gallery";

const SCROLL_SPEED_PX_PER_SEC = 40;

const LOOP_PHOTOS = [...GALLERY_PHOTOS, ...GALLERY_PHOTOS];

export function GallerySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const dialogOpenRef = useRef(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Position is tracked in this float accumulator, not read back from
    // track.scrollLeft — the DOM rounds scrollLeft to an integer, which would
    // swallow each frame's sub-pixel increment before it could add up.
    let position = 0;
    let wrapWidth = track.scrollWidth / 2;
    const resizeObserver = new ResizeObserver(() => {
      wrapWidth = track.scrollWidth / 2;
    });
    resizeObserver.observe(track);

    let raf: number;
    let last = performance.now();

    const step = (now: number) => {
      const dt = now - last;
      last = now;

      if (!pausedRef.current && !dialogOpenRef.current) {
        position += (SCROLL_SPEED_PX_PER_SEC * dt) / 1000;
        if (position >= wrapWidth) position -= wrapWidth;
        track.scrollLeft = position;
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    };
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };
  const openPhoto = (index: number) => {
    dialogOpenRef.current = true;
    setOpenIndex(index);
  };
  const closePhoto = () => {
    dialogOpenRef.current = false;
    setOpenIndex(null);
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
        className="mt-10 flex h-64 gap-4 overflow-x-hidden sm:h-72 lg:h-80"
      >
        {LOOP_PHOTOS.map((photo, index) => (
          <button
            key={`${photo.src}-${index}`}
            type="button"
            onClick={() => openPhoto(index % GALLERY_PHOTOS.length)}
            aria-label="Відкрити фото на весь екран"
            style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            className="relative h-full shrink-0 overflow-hidden rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 300px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && closePhoto()}>
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
