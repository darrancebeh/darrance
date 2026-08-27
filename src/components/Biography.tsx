import { bio } from "@/content/profile";
import Reveal from "./Reveal";

const ArrowOut = () => (
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
);

export default function Biography() {
  return (
    <section id="beyond" className="relative overflow-hidden border-y border-line bg-ink-2/30">
      <div
        className="pointer-events-none absolute top-1/3 -left-40 h-[32rem] w-[32rem] rounded-full opacity-[0.09] blur-[130px]"
        style={{ background: "var(--color-amber)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="eyebrow">08 — Beyond the résumé</p>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="display-lg mt-7 max-w-4xl text-balance">
            I have a distinct inability to do things{" "}
            <span className="font-serif text-amber italic">casually.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7 md:col-start-2">
            <div className="space-y-6">
              {bio.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 70}>
                  <p
                    className={
                      i === 0
                        ? "text-[1.0625rem] leading-relaxed text-bone/85 sm:text-lg"
                        : "text-base leading-relaxed text-muted sm:text-[1.0625rem]"
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <Reveal>
              <h3 className="eyebrow">Personal bests</h3>
              <dl className="mt-5 space-y-4">
                {bio.trivia.map((item) => (
                  <div key={item.label}>
                    <dt className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 font-display text-xl font-bold tracking-tight text-amber">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={110}>
              <h3 className="eyebrow mt-12">Off the clock</h3>
              <ul className="mt-5 space-y-3">
                {bio.loves.map((love) => (
                  <li key={love} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                    <span>{love}</span>
                  </li>
                ))}
              </ul>

              {bio.links.length ? (
                <ul className="mt-8 space-y-2">
                  {bio.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-line inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:text-amber"
                      >
                        {link.label}
                        <ArrowOut />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
