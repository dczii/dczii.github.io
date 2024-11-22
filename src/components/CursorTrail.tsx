"use client";
import React, { useRef, useEffect } from "react";

// Particle class definition
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  opacity: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 6 + 2;
    this.speedX = (Math.random() - 0.5) * 1;
    this.speedY = (Math.random() - 0.5) * 1;
    this.life = 100;
    this.opacity = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 2;
    this.opacity = this.life / 100;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.globalAlpha = this.opacity;
    context.fillStyle = "#00ff00"; // Green color
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Update canvas size on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create particles at mouse position
    const createParticles = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) {
        particlesRef.current.push(new Particle(x, y));
      }
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      createParticles(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        if (particle.life <= 0) {
          particlesRef.current.splice(i, 1);
        } else {
          particle.update();
          particle.draw(context);
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup event listeners and animation frame on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CursorTrail;
