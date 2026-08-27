import type { CSSProperties } from "react";
import type { Experience } from "@/content/profile";
import Reveal from "./Reveal";

const FALLBACK = "var(--color-accent)";

export default function ExperienceList({
  items,
  compact = false,
}: {
  items: Experience[];
  compact?: boolean;
}) {
  return (
    <div className="mt-14">
      {items.map((item, i) => {
        const brand = item.color ?? FALLBACK;
        const ink = item.colorInk ?? item.color ?? FALLBACK;
        const style = {
          "--brand": brand,
          "--brand-ink": ink,
        } as CSSProperties;

        return (
          <Reveal key={`${item.org}-${item.role}`} delay={i * 60}>
            <article
              style={style}
              className="group grid gap-6 border-t border-l-2 border-l-transparent border-line py-9 transition-colors duration-500 group-hover:border-l-[var(--brand)] hover:border-l-[var(--brand)] hover:bg-ink-2/40 md:grid-cols-12 md:gap-10 md:pl-6"
            >
              <div className="md:col-span-3">
                <div className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  {item.period}
                </div>
                <div className="mt-1.5 font-mono text-[10px] tracking-[0.12em] text-muted/60 uppercase">
                  {item.location}
                </div>
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="display-md">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-line transition-colors hover:text-[var(--brand-ink)]"
                      >
                        {item.org}
                        <span className="ml-2 inline-block align-middle text-[var(--brand-ink)]">
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
                        </span>
                      </a>
                    ) : (
                      item.org
                    )}
                  </h3>
                </div>
                <p className="mt-2 text-sm font-medium text-[var(--brand-ink)]">{item.role}</p>

                {item.blurb ? (
                  <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-bone/80">
                    {item.blurb}
                  </p>
                ) : null}

                {item.points.length ? (
                  <ul className="mt-5 max-w-2xl space-y-3">
                    {(compact ? item.points.slice(0, 2) : item.points).map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-ink)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.links?.length ? (
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-line inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-[var(--brand-ink)] uppercase"
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

                {item.tags?.length ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.1em] text-muted uppercase transition-colors group-hover:border-[var(--brand)]/40"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
