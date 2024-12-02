import { motion, type MotionValue } from "framer-motion";
import Image from "next/image";
import { MagneticFramer } from "@z/components";

type FooterProps = {
  scaleX: MotionValue<number>;
};

export default function Footer({ scaleX }: FooterProps) {
  const images = [
    { src: "/react.svg", alt: "react" },
    { src: "/graphql.svg", alt: "graphql" },
    { src: "/nextjs.png", alt: "nextjs" },
    { src: "/nodejs.svg", alt: "nodejs" },
    { src: "/tailwind.svg", alt: "tailwind" },
    { src: "/typescript.svg", alt: "typescript" },
  ];

  return (
    <footer className='row-start-3 gap-6 flex flex-wrap items-center justify-center sticky bottom-0 radial-background w-screen h-20'>
      <motion.div className='progress' style={{ scaleX }} />

      {images.map(({ src, alt }, index) => (
        <MagneticFramer key={index}>
          <Image aria-hidden src={src} alt={alt} width={50} height={50} />
        </MagneticFramer>
      ))}
    </footer>
  );
}
