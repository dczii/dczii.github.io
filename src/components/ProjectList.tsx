"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  { name: "90s-tv", href: "https://github.com/dczii/90s-tv" },
  { name: "TickrX", href: "https://github.com/dczii/TickrX" },
  { name: "BookBot", href: "https://github.com/dczii/BookBot" },
  { name: "quoteai", href: "https://github.com/dczii/quoteai" },
  { name: "qota", href: "https://github.com/dczii/qota" },
  { name: "URecruitment", href: "https://github.com/dczii/URecruitment" },
] as const;

const ProjectList = () => {
  const ref = useRef(null);

  return (
    <section className='item w-[90vw] md:w-[80vw] lg:w-[40vw]'>
      <motion.div
        ref={ref}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "linear" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className='text-[#d6d6d6]'>
          <h2>Projects</h2>
          <ul>
            {PROJECTS.map((project) => (
              <li key={project.name}>
                <a href={project.href} className='underline underline-offset-4'>
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectList;
