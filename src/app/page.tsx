import MissionShell from "@z/components/mission/MissionShell";
import ProjectCard from "@z/components/mission/ProjectCard";
import SectionNav from "@z/components/mission/SectionNav";
import SocialLinks from "@z/components/mission/SocialLinks";
import Spotlight from "@z/components/mission/Spotlight";
import {
  PROJECTS,
  SECTIONS,
  WORK_DATA,
  contactLine,
  siteName,
  sitePitch,
  siteRole,
} from "@z/content/profile";

import { siteDescription } from "./site";

export default function HomePage() {
  return (
    <MissionShell sectionIds={SECTIONS.map((section) => section.id)}>
      <a className='skip-link' href='#content'>
        Skip to content
      </a>
      <div className='mobile-header'>
        <SectionNav sections={SECTIONS} className='mobile-nav' label='Sections' />
      </div>
      <div className='layout'>
        <header className='identity'>
          <div className='brand'>
            <h1>{siteName}</h1>
            <p className='role'>{siteRole}</p>
            <p className='pitch'>{sitePitch}</p>
          </div>
          <SectionNav sections={SECTIONS} className='desktop-nav' label='Sections' />
          <SocialLinks />
        </header>
        <div className='stage'>
          <Spotlight>
            <main id='content' tabIndex={-1}>
              <section id='about' aria-labelledby='about-heading'>
                <h2 id='about-heading'>
                  <span className='idx'>01</span>
                  About
                </h2>
                <p className='bio'>{siteDescription}</p>
              </section>
              <section id='experience' aria-labelledby='experience-heading'>
                <h2 id='experience-heading'>
                  <span className='idx'>02</span>
                  Experience
                </h2>
                <ol className='timeline'>
                  {WORK_DATA.map((job) => (
                    <li key={`${job.company}-${job.year}`} className='job'>
                      <article>
                        <p className='when'>{job.year}</p>
                        <h3>{job.title}</h3>
                        <p className='company'>{job.company}</p>
                        <ul className='summary'>
                          {job.summary.map((line, index) => (
                            <li key={`${job.company}-${job.year}-${index}`}>{line}</li>
                          ))}
                        </ul>
                        <p className='tech-slot' data-slot='tech-tags'>
                          <span>Tech tags</span>
                          <span className='todo'>TODO</span>
                        </p>
                      </article>
                    </li>
                  ))}
                </ol>
              </section>
              <section id='projects' aria-labelledby='projects-heading'>
                <h2 id='projects-heading'>
                  <span className='idx'>03</span>
                  Projects
                </h2>
                <div className='project-list'>
                  {PROJECTS.map((project) => (
                    <ProjectCard
                      key={project.name}
                      name={project.name}
                      href={project.href}
                      accent={project.accent}
                    />
                  ))}
                </div>
              </section>
            </main>
            <footer id='contact' aria-labelledby='contact-heading'>
              <h2 id='contact-heading'>
                <span className='idx'>04</span>
                Contact
              </h2>
              <p className='closer'>{contactLine}</p>
              <SocialLinks />
            </footer>
          </Spotlight>
        </div>
      </div>
    </MissionShell>
  );
}
