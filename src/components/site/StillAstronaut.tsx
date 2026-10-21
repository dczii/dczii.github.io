"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { hasWebGL } from "../space/webgl";

export default function StillAstronaut() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setShow(motion.matches || !hasWebGL());
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  if (!show) return null;

  return (
    <Image
      src='/astronaut.webp'
      alt='Astronaut in a white spacesuit'
      width={1120}
      height={1120}
      className='h-auto w-full max-w-[240px] md:max-w-[460px]'
    />
  );
}
