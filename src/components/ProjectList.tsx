import Image from "next/image";

import { PROJECTS, type Project } from "@z/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className='h-full'>
      <a
        href={project.href}
        target='_blank'
        rel='noreferrer'
        className='flex h-full flex-col gap-4 rounded-2xl border border-[#d6d6d6]/20 bg-[#12141c] p-6'
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt ?? ""}
            width={1200}
            height={675}
            className='aspect-video w-full rounded-xl object-cover'
          />
        ) : null}
        <h3 className='text-xl font-semibold text-[#d6d6d6]'>
          {project.name}
          <span className='sr-only'> (opens in a new tab)</span>
        </h3>
        {project.description ? <p className='text-sm leading-6 text-[#c8c8c8]'>{project.description}</p> : null}
        {project.tags && project.tags.length > 0 ? (
          <ul className='mt-auto flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <li key={tag} className='rounded-full border border-[#d6d6d6]/25 px-2.5 py-1 text-xs text-[#d6d6d6]'>
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </a>
    </article>
  );
}

export default function ProjectList() {
  return (
    <section id='projects' className='stage relative z-10 flex scroll-mt-32 items-center px-5 py-16' aria-labelledby='projects-heading'>
      <div className='mx-auto w-full max-w-6xl'>
        <h2 id='projects-heading' className='heading-shadow text-3xl font-semibold tracking-tight sm:text-4xl'>
          Projects
        </h2>
        <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {PROJECTS.map((project) => (
            <li key={project.name}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
