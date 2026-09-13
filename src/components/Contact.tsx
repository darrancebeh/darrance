import { profile } from "@/content/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line">
      <div
        className="absolute bottom-[-30%] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-[0.12] blur-[120px]"
        style={{
          background:
            "conic-gradient(from 220deg, var(--color-violet), var(--color-accent), var(--color-amber), var(--color-violet))",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="eyebrow">09 — Contact</p>
          <h2 className="display-lg mt-6 max-w-4xl text-balance">
            Sound like the right fit for a problem you&apos;re solving?
            <span className="font-serif italic text-accent"> let&rsquo;s talk.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-bone px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-accent"
            >
              {profile.email}
              <svg width="16" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1"><path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-colors hover:border-bone/40"
            >
              LinkedIn
              <span className="text-accent"><svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="inline-block"><path d="M2 8 8 2M8 2H3.2M8 2v4.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg></span>
            </a>
          </div>
        </Reveal>

        <div className="rule mt-20 flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
            {profile.name} · {profile.location}
          </p>
          <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
            Built with Next.js · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
