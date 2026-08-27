import { education } from "@/content/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="border-y border-line bg-ink-2/30">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="02"
          title="Education"
          lede="Where I studied, and what I studied there."
          accent="text-violet"
        />

        <div className="mt-14">
          {education.map((school, i) => (
            <Reveal key={school.school} delay={i * 80}>
              <article className="grid gap-6 border-t border-line py-9 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                    {school.period}
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] tracking-[0.12em] text-muted/60 uppercase">
                    {school.location}
                  </div>
                </div>

                <div className="md:col-span-6">
                  <h3 className="display-md">{school.school}</h3>
                  <p className="mt-2 text-sm font-medium text-bone/85">{school.degree}</p>
                  {school.detail ? (
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone/70">
                      {school.detail}
                    </p>
                  ) : null}

                  {school.points?.length ? (
                    <ul className="mt-5 max-w-xl space-y-3">
                      {school.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <div className="md:col-span-3 md:text-right">
                  <div className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                    Grade
                  </div>
                  <div className="mt-1.5 font-display text-xl font-bold tracking-tight text-violet">
                    {school.grade}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
