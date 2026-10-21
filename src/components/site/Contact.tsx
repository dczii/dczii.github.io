import { githubUrl } from "@z/app/site";

export default function Contact() {
  return (
    <section id='contact' className='stage relative z-10 flex scroll-mt-32 items-center px-5 py-16' aria-labelledby='contact-heading'>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='max-w-2xl rounded-3xl border border-[#d6d6d6]/15 bg-[#0b0909]/85 px-6 py-8 sm:px-10 sm:py-12'>
          <h2 id='contact-heading' className='text-3xl font-semibold tracking-tight sm:text-4xl'>
            Contact
          </h2>
          <p className='mt-4 text-sm leading-6 text-[#c8c8c8] sm:text-base'>
            GitHub is the only contact link published here for now.
          </p>
          <ul className='mt-8 divide-y divide-[#d6d6d6]/15 border-y border-[#d6d6d6]/15'>
            <li className='flex items-center justify-between gap-4 py-4'>
              <a href={githubUrl} target='_blank' rel='noreferrer' className='font-semibold text-[#d6d6d6] underline underline-offset-4'>
                GitHub
                <span className='sr-only'> (opens in a new tab)</span>
              </a>
            </li>
            <li className='flex items-center justify-between gap-4 py-4'>
              <span>LinkedIn</span>
              {/* TODO: add LinkedIn profile URL */}
              <span className='todo-slot'>
                TODO
                <span className='sr-only'>, not added yet</span>
              </span>
            </li>
            <li className='flex items-center justify-between gap-4 py-4'>
              <span>Email</span>
              {/* TODO: add email address */}
              <span className='todo-slot'>
                TODO
                <span className='sr-only'>, not added yet</span>
              </span>
            </li>
            <li className='flex items-center justify-between gap-4 py-4'>
              <span>Resume</span>
              {/* TODO: add resume link */}
              <span className='todo-slot'>
                TODO
                <span className='sr-only'>, not added yet</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
