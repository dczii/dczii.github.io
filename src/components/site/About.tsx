import { siteDescription } from "@z/app/site";

export default function About() {
  return (
    <section id='about' className='stage relative z-10 flex scroll-mt-32 items-center px-5 py-16' aria-labelledby='about-heading'>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='max-w-3xl rounded-3xl border border-[#d6d6d6]/15 bg-[#0b0909]/85 px-6 py-8 sm:px-10 sm:py-12'>
          <h2 id='about-heading' className='text-3xl font-semibold tracking-tight sm:text-4xl'>
            About
          </h2>
          <p className='mt-6 text-base leading-7 text-[#d6d6d6] sm:text-lg sm:leading-8'>{siteDescription}</p>
        </div>
      </div>
    </section>
  );
}
