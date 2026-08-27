import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden pt-28">
      <div className="grid-lines absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute top-[-18%] left-1/2 -z-10 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full opacity-[0.14] blur-[130px]"
        style={{
          background:
            "conic-gradient(from 140deg, var(--color-accent), var(--color-violet), var(--color-amber), var(--color-accent))",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-[1400px] flex-col justify-between px-5 pb-10 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] tracking-[0.16em] uppercase">
          <span className="text-bone/85">{profile.headline}</span>
          <span aria-hidden="true" className="text-muted/40">
            /
          </span>
          <span className="text-muted">{profile.location}</span>
        </div>

        <div className="py-14">
          <h1 className="display-xl">
            <span className="block">Darrance</span>
            <span className="block">
              <span className="text-outline">Beh</span> Heng Shek
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <p className="text-lg leading-relaxed text-balance md:col-span-6 md:col-start-6 lg:col-span-5 lg:col-start-7 lg:text-xl">
              {profile.tagline}
            </p>
          </div>
        </div>

        <div>
          <div className="rule flex flex-wrap items-center justify-between gap-4 pt-6">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-muted uppercase transition-colors hover:text-bone"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:text-accent">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  className="transition-transform duration-500 group-hover:translate-y-0.5"
                >
                  <path
                    d="M5 0v10M1 6.5 5 11l4-4.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </span>
              Scroll
            </a>
            <div className="flex items-center gap-5">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="link-line font-mono text-[11px] tracking-[0.18em] uppercase"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="link-line font-mono text-[11px] tracking-[0.18em] uppercase"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
