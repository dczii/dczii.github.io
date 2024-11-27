"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import { WorkDataType } from "@z/app/page";

const WorkList = ({ year, company, title, jobDescription }: WorkDataType) => {
  const ref = useRef(null);

  return (
    <section className='item w-[90vw] md:[80vw] lg:w-[40vw]'>
      <motion.div
        ref={ref}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: false, amount: 0.5 }} // Re-trigger animation when it enters/exits view
        transition={{ duration: 0.8, ease: "linear" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className='text-[#d6d6d6]'>
          <h2>{year}</h2>
          <h3>{title}</h3>
          <div className='text-xl'>{company}</div>
          <ul>{parse(jobDescription)}</ul>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkList;
