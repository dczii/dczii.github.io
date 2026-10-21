"use client";

import { Canvas } from "@react-three/fiber";
import { Component, useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import JourneyScene from "./JourneyScene";
import { createScrollState, measureScroll, type ScrollState } from "./scroll";

type BoundaryProps = {
  children: ReactNode;
  onError: () => void;
};

type BoundaryState = {
  failed: boolean;
};

class CanvasBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { failed: false };

  static getDerivedStateFromError(): BoundaryState {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

export default function SpaceCanvas({ onLive }: { onLive?: () => void }) {
  const scroll = useRef<ScrollState>(createScrollState());
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const [dpr, setDpr] = useState(1);
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);
  const onReady = useCallback(() => setVisible(true), []);
  const onError = useCallback(() => setFailed(true), []);

  useEffect(() => {
    if (visible) onLive?.();
  }, [onLive, visible]);

  useEffect(() => {
    const state = scroll.current;
    const measure = () => measureScroll(state);
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    const fontsReady = document.fonts?.ready.then(measure);
    const reveal = window.setTimeout(() => setVisible(true), 4000);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      window.clearTimeout(reveal);
      void fontsReady;
    };
  }, []);

  useEffect(() => {
    const onChange = () => setHidden(document.hidden);
    onChange();
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const apply = () => {
      const nextCompact = media.matches;
      setCompact(nextCompact);
      setDpr(Math.min(window.devicePixelRatio || 1, nextCompact ? 1.25 : 1.5));
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  if (failed) return null;

  return (
    <CanvasBoundary onError={onError}>
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-0 z-0'
        style={{ opacity: visible ? 1 : 0, transition: "opacity 480ms linear" }}
      >
        <Canvas
          frameloop={hidden ? "never" : "always"}
          dpr={[1, dpr]}
          camera={{ position: [0.1, 0.15, 6.1], fov: 46, near: 0.1, far: 180 }}
          gl={{
            antialias: false,
            alpha: false,
            powerPreference: "high-performance",
            stencil: false,
          }}
        >
          <JourneyScene compact={compact} scroll={scroll} onReady={onReady} />
        </Canvas>
      </div>
    </CanvasBoundary>
  );
}
