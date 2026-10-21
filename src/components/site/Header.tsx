"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", id: "about", label: "About" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export default function Header() {
  const [current, setCurrent] = useState("hero");

  useEffect(() => {
    const sections = ["hero", ...LINKS.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        const next = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        if (next) setCurrent(next[0]);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className='sticky top-0 z-30 border-b border-[#d6d6d6]/15 bg-[#07080d]/95'>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-2'>
        <a
          href='#hero'
          className='inline-flex min-h-11 items-center text-sm font-semibold tracking-tight sm:text-base'
          aria-current={current === "hero" ? "location" : undefined}
        >
          Danilo Zabala II
        </a>
        <nav aria-label='Primary' className='flex flex-wrap items-center'>
          {LINKS.map((link) => {
            const active = current === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={active ? "location" : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm ${
                  active ? "bg-[#d6d6d6] font-semibold text-[#0b0909]" : "text-[#d6d6d6]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
