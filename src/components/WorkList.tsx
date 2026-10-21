import parse from "html-react-parser";

import type { WorkDataType } from "@z/data/work";

const WorkList = ({ year, company, title, jobDescription }: WorkDataType) => {
  return (
    <li className='relative pl-8'>
      <span
        className='absolute left-0 top-6 h-3 w-3 -translate-x-1/2 rounded-full border border-[#d6d6d6] bg-[#07080d]'
        aria-hidden='true'
      />
      <article className='rounded-2xl border border-[#d6d6d6]/15 bg-[#0b0909]/85 p-5 sm:p-6'>
        <h3 className='text-xl font-semibold text-[#d6d6d6]'>{title}</h3>
        <p className='mt-1 text-base text-[#d6d6d6]'>{company}</p>
        <p className='mt-1 text-sm text-[#c8c8c8]'>{year}</p>
        <ul className='mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#d6d6d6] sm:text-base'>
          {parse(jobDescription)}
        </ul>
      </article>
    </li>
  );
};

export default WorkList;
