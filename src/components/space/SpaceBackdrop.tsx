"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { hasWebGL } from "./webgl";

const SpaceCanvas = dynamic(() => import("./SpaceCanvas"), { ssr: false });

export default function SpaceBackdrop() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let idleId: number | undefined;
    let timer: number | undefined;

    const clearSchedule = () => {
      if (idleId != null) window.cancelIdleCallback(idleId);
      if (timer != null) window.clearTimeout(timer);
      idleId = undefined;
      timer = undefined;
    };

    const sync = () => {
      if (motion.matches || !hasWebGL()) {
        if (motion.matches) document.documentElement.dataset.motion = "reduce";
        clearSchedule();
        setEnabled(false);
        return;
      }

      delete document.documentElement.dataset.motion;
      if (idleId != null || timer != null) return;

      const start = () => {
        idleId = undefined;
        timer = undefined;
        setEnabled(true);
      };

      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(start, { timeout: 700 });
      } else {
        timer = window.setTimeout(start, 300);
      }
    };

    sync();
    motion.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      clearSchedule();
    };
  }, []);

  return (
    <>
      <div className='sky' aria-hidden='true' />
      {enabled ? <SpaceCanvas /> : null}
    </>
  );
}
