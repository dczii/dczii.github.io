"use client";
import Image from "next/image";
import { useScroll, useSpring, motion } from "motion/react";
import { AnimatedMaskLogo, WorkList } from "@z/components";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col max-w-[1440px] mx-auto'>
      <main className='flex flex-col items-center w-screen'>
        <div className='sticky top-0 radial-background z-10 w-full py-10'>
          <AnimatedMaskLogo />
        </div>
        {[1, 2, 3, 4, 5].map((image) => (
          <WorkList key={image} id={image} />
        ))}
      </main>

      <footer className='row-start-3 gap-6 flex flex-wrap items-center justify-center sticky bottom-0 radial-background w-screen h-20'>
        <motion.div className='progress' style={{ scaleX }} />
        <Image aria-hidden src='/react.svg' alt='react' width={50} height={50} />
        <Image aria-hidden src='/graphql.svg' alt='graphql' width={50} height={50} />
        <Image aria-hidden src='/nextjs.svg' alt='nextjs' width={50} height={50} />
        <Image aria-hidden src='/nodejs.svg' alt='nodejs' width={50} height={50} />
        <Image aria-hidden src='/tailwind.svg' alt='tailwind' width={50} height={50} />
        <Image aria-hidden src='/typescript.svg' alt='typescript' width={50} height={50} />
      </footer>
    </div>
  );
}
