"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Spotlight({ children }: { children: ReactNode }) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const host = glow?.parentElement;
    if (!glow || !host) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      glow.style.setProperty("--sx", `${event.clientX - rect.left}px`);
      glow.style.setProperty("--sy", `${event.clientY - rect.top}px`);
    };

    host.addEventListener("pointermove", onMove, { passive: true });
    return () => host.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className='spotlight'>
      <div className='spotlight-glow' ref={glowRef} aria-hidden='true' />
      {children}
    </div>
  );
}
