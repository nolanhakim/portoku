"use client";
import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.05) {
  const ref = useRef<any>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    // Avoid running on server
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setHasRevealed(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, hasRevealed };
}
