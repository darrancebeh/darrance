import { statement, workedWith, workedWithLabel } from "@/content/profile";
import Reveal from "./Reveal";

function Mark({ logo }: { logo: (typeof workedWith)[number] }) {
  const inner = logo.src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.src}
      alt={`${logo.name} logo`}
      style={{ height: logo.height ?? 26 }}
      className={`w-auto opacity-55 transition-opacity duration-300 group-hover/mark:opacity-100 ${
        logo.mono === false ? "" : "brightness-0 invert"
      }`}
    />
  ) : (
    <span
      className="font-display text-2xl leading-none font-bold tracking-tight opacity-70 transition-opacity duration-300 group-hover/mark:opacity-100 sm:text-[1.75rem]"
      style={{ color: logo.color ?? "var(--color-bone)" }}
    >
      {logo.name}
    </span>
  );

  return logo.href ? (
    <a
      href={logo.href}
      target="_blank"
      rel="noreferrer"
      className="group/mark inline-flex items-center"
      aria-label={logo.name}
    >
      {inner}
    </a>
  ) : (
    <span className="group/mark inline-flex items-center">{inner}</span>
  );
}

export default function Statement() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2/40">
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[30rem] w-[30rem] rounded-full opacity-[0.10] blur-[130px]"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl space-y-6">
          {statement.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 90}>
              <p
                className={
                  i === 0
                    ? "text-[1.2rem] leading-[1.45] font-medium tracking-[-0.015em] text-balance sm:text-[1.5rem] lg:text-[1.7rem]"
                    : "text-[1.05rem] leading-[1.55] text-bone/65 sm:text-[1.2rem] lg:text-[1.3rem]"
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        {workedWith.length ? (
          <Reveal delay={220}>
            <div className="rule mt-16 pt-8">
              <p className="eyebrow">{workedWithLabel}</p>
              <ul className="mt-7 flex flex-wrap items-center gap-x-12 gap-y-7 sm:gap-x-16">
                {workedWith.map((logo) => (
                  <li key={logo.name} className="flex items-center">
                    <Mark logo={logo} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
