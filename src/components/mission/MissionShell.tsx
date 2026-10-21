"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import SpaceFallback from "./SpaceFallback";
import SpaceGate from "./SpaceGate";

type MissionContextValue = {
  active: string;
  setActive: (id: string) => void;
};

const MissionContext = createContext<MissionContextValue | null>(null);

export function useMission() {
  const value = useContext(MissionContext);
  if (!value) throw new Error("useMission must be used within MissionShell");
  return value;
}

export default function MissionShell({
  children,
  sectionIds,
}: {
  children: ReactNode;
  sectionIds: readonly string[];
}) {
  const idsKey = sectionIds.join("|");
  const [active, setActive] = useState(sectionIds[0] ?? "about");
  const [sceneLive, setSceneLive] = useState(false);
  const handleLive = useCallback(() => setSceneLive(true), []);

  useEffect(() => {
    const ids = idsKey.split("|").filter(Boolean);
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.innerHeight * 0.33;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 64;
      let current = ids[0] ?? "about";
      if (nearBottom) {
        current = ids[ids.length - 1] ?? current;
      } else {
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          if (el.getBoundingClientRect().top <= marker) current = id;
        }
      }
      setActive((prev) => (prev === current ? prev : current));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [idsKey]);

  const value = useMemo(() => ({ active, setActive }), [active]);

  return (
    <MissionContext.Provider value={value}>
      <div className='mission' id='mission'>
        <SpaceFallback hidden={sceneLive} />
        {children}
        <SpaceGate onLive={handleLive} />
      </div>
    </MissionContext.Provider>
  );
}
