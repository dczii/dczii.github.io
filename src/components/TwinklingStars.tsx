"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  baseOpacity: number;
  duration: number;
  delay: number;
};

const STAR_COUNT = 100;

function createStars(): Star[] {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random(),
    y: Math.random(),
    baseOpacity: Math.random() * (0.8 - 0.3) + 0.3,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 5,
  }));
}

const TwinklingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const stars = createStars();
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#000000";
      context.fillRect(0, 0, width, height);

      for (const star of stars) {
        const elapsed = time / 1000 - star.delay;
        let wave = 0;
        if (elapsed > 0) {
          const cycle = star.duration * 2;
          const progress = (elapsed % cycle) / star.duration;
          wave = progress <= 1 ? progress : 2 - progress;
        }
        const opacity = Math.min(1, star.baseOpacity + wave * 0.4);
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.beginPath();
        context.arc(star.x * width, star.y * height, 1, 0, Math.PI * 2);
        context.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className='fixed top-0 left-0 w-full h-full bg-black -z-[1]'
    />
  );
};

export default TwinklingStars;
