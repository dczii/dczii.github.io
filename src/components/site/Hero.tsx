import { siteTitle } from "@z/app/site";

import StillAstronaut from "./StillAstronaut";

export default function Hero() {
  const [name, role] = siteTitle.split(" | ");

  return (
    <section id='hero' className='stage relative z-10 flex scroll-mt-32 items-end px-5 py-16 md:items-center' aria-labelledby='hero-heading'>
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-[#07080d] via-[#07080d]/90 to-transparent md:hidden' aria-hidden='true' />
      <div className='pointer-events-none absolute inset-y-0 left-0 hidden w-[62%] bg-gradient-to-r from-[#07080d] via-[#07080d]/78 to-transparent md:block' aria-hidden='true' />
      <div className='relative mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-2'>
        <div className='order-2 md:order-1'>
          <h1 id='hero-heading' className='max-w-xl text-4xl font-semibold tracking-tight text-[#d6d6d6] sm:text-6xl lg:text-7xl'>
            <span className='block'>{name}</span>
            {role ? <span className='mt-3 block text-lg font-medium text-[#c8c8c8] sm:text-2xl'>{role}</span> : null}
          </h1>
          <div className='mt-8 flex flex-wrap gap-3'>
            <a href='#projects' className='btn btn-primary'>
              View projects
            </a>
            <a href='#contact' className='btn btn-secondary'>
              Contact
            </a>
          </div>
        </div>
        <div className='order-1 flex justify-center md:order-2 md:justify-end'>
          <StillAstronaut />
          <noscript>
            {/* Raw img so the astronaut is in the no-JS document. next/image needs the client runtime. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/astronaut.webp'
              alt='Astronaut in a white spacesuit'
              width={1120}
              height={1120}
              className='h-auto w-full max-w-[240px] md:max-w-[460px]'
            />
          </noscript>
        </div>
      </div>
    </section>
  );
}
