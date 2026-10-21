"use client";

import type { CSSProperties, FocusEvent } from "react";

import { DEFAULT_ACCENT, sceneAccent } from "./sceneAccent";

type ProjectCardProps = {
  name: string;
  href: string;
  accent: string;
};

function rememberAccent(accent: string) {
  sceneAccent.current = accent;
}

function releaseAccent(accent: string) {
  if (sceneAccent.current === accent) sceneAccent.current = DEFAULT_ACCENT;
}

export default function ProjectCard({ name, href, accent }: ProjectCardProps) {
  return (
    <article
      className='project-card'
      style={{ "--card-accent": accent } as CSSProperties}
      onMouseEnter={() => rememberAccent(accent)}
      onMouseLeave={() => releaseAccent(accent)}
      onFocus={() => rememberAccent(accent)}
      onBlur={(event: FocusEvent<HTMLElement>) => {
        const next = event.relatedTarget;
        if (next instanceof Node && event.currentTarget.contains(next)) return;
        releaseAccent(accent);
      }}
    >
      <div className='thumb-slot' data-slot='thumbnail'>
        <span>Thumbnail</span>
        <span className='todo'>TODO</span>
      </div>
      <div className='project-copy'>
        <h3>
          <a href={href}>
            <span>{name}</span>
            <span className='go'>GitHub</span>
          </a>
        </h3>
        <p className='slot slot-line' data-slot='description'>
          <span>Description</span>
          <span className='todo'>TODO</span>
        </p>
        <p className='slot slot-line' data-slot='tags'>
          <span>Tags</span>
          <span className='todo'>TODO</span>
        </p>
        <p className='slot slot-line' data-slot='live'>
          <span>Live link</span>
          <span className='todo'>TODO</span>
        </p>
      </div>
    </article>
  );
}
