"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

const SpaceCanvas = dynamic(() => import("./SpaceCanvas"), { ssr: false });

export default function SpaceBackdrop() {
  const [enabled, setEnabled] = useState(false);
  const [live, setLive] = useState(false);
  const onLive = useCallback(() => setLive(true), []);

  useEffect(() => {
    if (live) document.documentElement.dataset.sky = "webgl";
    else delete document.documentElement.dataset.sky;
    return () => {
      delete document.documentElement.dataset.sky;
    };
  }, [live]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer = 0;
    let started = false;

    const start = () => {
      if (started || motion.matches) return;
      started = true;
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
      window.removeEventListener("wheel", start);
      window.removeEventListener("scroll", onScroll);
      setEnabled(true);
    };

    const onScroll = () => {
      if (window.scrollY > 24) start();
    };

    const sync = () => {
      if (motion.matches) {
        document.documentElement.dataset.motion = "reduce";
        started = false;
        window.clearTimeout(timer);
        setEnabled(false);
        setLive(false);
        return;
      }
      delete document.documentElement.dataset.motion;
    };

    sync();
    if (!motion.matches) {
      window.addEventListener("pointerdown", start, { passive: true });
      window.addEventListener("keydown", start);
      window.addEventListener("wheel", start, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      // Stay quiet during the initial load window, then bring the scene in on its own.
      timer = window.setTimeout(start, 8000);
    }

    motion.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
      window.removeEventListener("wheel", start);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className='sky' aria-hidden='true' />
      {enabled ? <SpaceCanvas onLive={onLive} /> : null}
    </>
  );
}
