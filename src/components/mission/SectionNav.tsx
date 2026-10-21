"use client";

import { useMission } from "./MissionShell";

type SectionNavProps = {
  className: string;
  label: string;
  sections: readonly { id: string; label: string }[];
};

export default function SectionNav({ className, label, sections }: SectionNavProps) {
  const { active, setActive } = useMission();

  return (
    <nav className={className} aria-label={label}>
      <ul>
        {sections.map((section) => {
          const current = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? "true" : undefined}
                onClick={() => setActive(section.id)}
              >
                <span className='nav-mark' aria-hidden='true'>
                  {current ? (
                    <span className='orbit'>
                      <span className='orbit-spin'>
                        <span className='orbit-dot' />
                      </span>
                    </span>
                  ) : (
                    <span className='nav-tick' />
                  )}
                </span>
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
