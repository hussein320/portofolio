"use client";
import { useEffect, useRef } from "react";

// Soft glow that follows the pointer and lights up the hero grid beneath it.
export default function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section) return;

    let frame = 0;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = section.getBoundingClientRect();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--y", `${e.clientY - rect.top}px`);
        el.style.opacity = "1";
      });
    };
    const leave = () => {
      el.style.opacity = "0";
    };

    section.addEventListener("pointermove", move);
    section.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700">
      <div className="spotlight-glow absolute inset-0" />
      <div className="spotlight-grid absolute inset-0" />
    </div>
  );
}
