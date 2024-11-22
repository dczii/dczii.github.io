// components/AnimatedMaskLogo.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedMaskLogo: React.FC = () => {
  return (
    <div className='h-[150px] w-[500px] relative mx-auto'>
      <div>
        <Image src='/logo.svg' fill alt='logo' className='z-10' />
      </div>
      <motion.div
        className='svg-container h-[150px] w-[500px] relative z-50'
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"], // Animates from left to right
        }}
        transition={{
          duration: 80, // Adjust the duration for speed
          ease: "linear",
          repeat: Infinity, // Infinite loop
        }}
      />
    </div>
  );
};

export default AnimatedMaskLogo;
