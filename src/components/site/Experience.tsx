import WorkList from "@z/components/WorkList";
import { WORK_DATA } from "@z/data/work";

export default function Experience() {
  return (
    <section id='experience' className='relative z-10 scroll-mt-32 px-5 py-16 sm:py-24' aria-labelledby='experience-heading'>
      <div className='mx-auto max-w-6xl'>
        <h2 id='experience-heading' className='heading-shadow text-3xl font-semibold tracking-tight sm:text-4xl'>
          Experience
        </h2>
        <ol className='relative mt-10 ml-3 space-y-6 border-l border-[#d6d6d6]/30'>
          {WORK_DATA.map((job) => (
            <WorkList key={`${job.year}-${job.company}`} {...job} />
          ))}
        </ol>
      </div>
    </section>
  );
}
