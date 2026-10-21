"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Spotlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--sx", `${event.clientX - rect.left}px`);
      node.style.setProperty("--sy", `${event.clientY - rect.top}px`);
    };

    node.addEventListener("pointermove", onMove, { passive: true });
    return () => node.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className='spotlight' ref={ref}>
      {children}
    </div>
  );
}
