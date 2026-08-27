import { skills, awards, certifications } from "@/content/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Toolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="07"
        title="Toolkit & recognition"
        lede="What I reach for when a problem lands on my desk, and what it has been worth so far."
      />

      <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <div className="space-y-9">
            {skills.map((group, i) => (
              <Reveal key={group.label} delay={i * 60}>
                <div className="rule pt-5">
                  <h3 className="eyebrow">{group.label}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-line bg-ink-2/50 px-3 py-1.5 text-[0.8125rem] transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <Reveal>
            <h3 className="eyebrow">Honours & awards</h3>
            <ul className="mt-5 space-y-7">
              {awards.map((award) => (
                <li key={award.title} className="border-l border-amber/40 pl-4">
                  <div className="text-sm font-semibold">{award.title}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.12em] text-amber uppercase">
                    {award.issuer} · {award.date}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{award.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="eyebrow mt-12">Certifications</h3>
            <ul className="mt-5 space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="text-sm">
                  <div>{cert.name}</div>
                  <div className="mt-0.5 font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
                    {cert.issuer} · {cert.date}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
