import { profile, facts, languages } from "@/content/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="01" title="Who I am" />

      <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <div className="space-y-5">
            {profile.intro.map((paragraph, i) => (
              <Reveal key={i} delay={60 + i * 60}>
                <p className="text-base leading-relaxed text-muted sm:text-[1.0625rem]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <Reveal>
            <h3 className="eyebrow">Things worth knowing</h3>
            <ul className="mt-5 space-y-4">
              {facts.map((fact) => (
                <li key={fact} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="text-muted">{fact}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="eyebrow mt-12">Languages</h3>
            <ul className="mt-5 space-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-baseline justify-between gap-4 text-sm">
                  <span>{lang.name}</span>
                  <span className="h-px flex-1 translate-y-[-3px] bg-line" />
                  <span className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
