"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const Model1 = dynamic(() => import("./Model1"), { ssr: false });

const Scene1 = () => {
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 768px)");
    const sync = () => {
      setReduced(motion.matches);
      setDpr(Math.min(window.devicePixelRatio || 1, narrow.matches ? 1.25 : 1.5));
      setReady(true);
    };
    sync();
    const onVisibility = () => setHidden(document.hidden);
    onVisibility();
    motion.addEventListener("change", sync);
    narrow.addEventListener("change", sync);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      motion.removeEventListener("change", sync);
      narrow.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  if (!ready) {
    return <div className='h-[80vh] w-full' />;
  }

  if (reduced) {
    return (
      <div className='flex h-[80vh] w-full flex-col items-center justify-center gap-4'>
        <Image
          src='/astronaut.webp'
          alt='Astronaut in a white spacesuit'
          width={600}
          height={600}
          className='h-auto max-h-[60vh] w-auto max-w-full'
        />
        <p className='max-w-md text-center text-sm text-[#c8c8c8]'>
          Reduced motion is on, so the interactive model is not running.
        </p>
      </div>
    );
  }

  return (
    <div className='h-[80vh] w-full' aria-hidden='true'>
      <Canvas
        frameloop={hidden ? "never" : "always"}
        dpr={[1, dpr]}
        style={{ height: "80vh", width: "100%" }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model1 />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene1;
