"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode, useEffect, useState } from "react";

const SpaceCanvas = dynamic(() => import("./SpaceCanvas"), { ssr: false });

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function SpaceGate({ onLive }: { onLive: () => void }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !hasWebGL()) return;

    let idle = 0;
    const start = () => setEnabled(true);
    const schedule = () => {
      idle = window.requestIdleCallback(start, { timeout: 1200 });
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idle) window.cancelIdleCallback(idle);
    };
  }, []);

  if (!enabled) return null;

  return (
    <SceneBoundary>
      <SpaceCanvas onLive={onLive} />
    </SceneBoundary>
  );
}
