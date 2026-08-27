import { projects } from "@/content/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="06"
        title="Projects"
        lede="A selection of my academic and personal projects."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-bone/20 hover:bg-ink-3/60">
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
                style={{ background: "var(--color-accent)" }}
                aria-hidden="true"
              />

              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-accent uppercase">
                  {project.status}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
                  {project.period}
                </span>
              </div>

              <h3 className="mt-7 font-display text-2xl leading-tight font-bold tracking-tight">
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer" className="link-line">
                    {project.title}
                    <span className="ml-1.5 inline-block align-middle text-accent"><svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="inline-block"><path d="M2 8 8 2M8 2H3.2M8 2v4.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg></span>
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-1.5 font-serif text-lg italic text-muted">{project.subtitle}</p>

              <p className="mt-5 text-sm leading-relaxed text-bone/75">{project.description}</p>

              <ul className="mt-5 space-y-2.5">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {project.links?.length ? (
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-line inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-accent uppercase"
                      >
                        {link.label}
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 10 10"
                          fill="none"
                          aria-hidden="true"
                          className="inline-block"
                        >
                          <path
                            d="M2 8 8 2M8 2H3.2M8 2v4.8"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}

              <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-muted uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
