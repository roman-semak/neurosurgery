"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Вмикає анімацію тільки коли елемент у в'юпорті.
 * Використання:
 *   const { ref, inView } = useInView<HTMLDivElement>();
 *   <div ref={ref}><Aneurysm animated={inView} /></div>
 */
export function useInView<T extends HTMLElement>(rootMargin = "120px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
