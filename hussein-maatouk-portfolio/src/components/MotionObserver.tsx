"use client";
import { useEffect } from "react";

// Marks [data-reveal] elements with [data-revealed="scroll"] the first time they scroll into view.
// The animations themselves live in globals.css.
export default function MotionObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "scroll");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    // Anything already on screen is marked "instant" so it stays put instead of flashing out and back in.
    for (const el of Array.from(document.querySelectorAll("[data-reveal]"))) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) el.setAttribute("data-revealed", "instant");
      else observer.observe(el);
    }
    document.documentElement.classList.add("motion-ready");

    return () => observer.disconnect();
  }, []);

  return null;
}
