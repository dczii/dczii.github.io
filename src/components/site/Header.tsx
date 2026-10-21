const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  return (
    <header className='sticky top-0 z-30 border-b border-[#d6d6d6]/15 bg-[#07080d]/95'>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-2'>
        <a href='#hero' className='inline-flex min-h-11 items-center text-sm font-semibold tracking-tight sm:text-base'>
          Danilo Zabala II
        </a>
        <nav aria-label='Primary' className='flex flex-wrap items-center'>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className='inline-flex min-h-11 items-center rounded-full px-3 text-sm text-[#d6d6d6]'>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
