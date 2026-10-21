import { githubUrl } from "@z/app/site";

export default function Footer() {
  return (
    <footer className='relative z-10 border-t border-[#d6d6d6]/15 px-5 py-8'>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-[#c8c8c8]'>
        <p>Danilo Zabala II</p>
        <a href={githubUrl} target='_blank' rel='noreferrer' className='inline-flex min-h-11 items-center underline underline-offset-4'>
          GitHub
          <span className='sr-only'> (opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
