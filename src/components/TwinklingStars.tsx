"use client";
import { motion } from "motion/react";

const TwinklingStars = () => {
  const stars = Array(100).fill(null); // Create 100 stars

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black'>
      <div className='relative w-full h-full'>
        {stars.map((_, index) => {
          const x = Math.random() * 100; // Random x position
          const y = Math.random() * 100; // Random y position
          const delay = Math.random() * 5; // Random delay
          const opacity = Math.random() * (0.8 - 0.3) + 0.3; // Random opacity for twinkling

          return (
            <motion.div
              key={index}
              className='absolute'
              style={{
                top: `${y}vh`,
                left: `${x}vw`,
                width: "2px",
                height: "2px",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
              animate={{
                opacity: [opacity, opacity + 0.4, opacity], // Blink effect
              }}
              transition={{
                duration: Math.random() * 2 + 1, // Random duration
                repeat: Infinity,
                repeatType: "reverse",
                delay: delay, // Random delay before starting the animation
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TwinklingStars;
