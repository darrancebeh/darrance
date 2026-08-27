"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#work", label: "Work" },
  { href: "#leadership", label: "Leadership" },
  { href: "#projects", label: "Projects" },
  { href: "#ventures", label: "Ventures" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#beyond", label: "Beyond" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const height = document.body.scrollHeight - window.innerHeight;
        setScrolled(y > 80);
        setProgress(height > 0 ? Math.min(1, y / height) : 0);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="font-mono text-xs tracking-[0.2em] uppercase transition-colors hover:text-accent"
          >
            Darrance<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-line font-mono text-[11px] tracking-[0.16em] text-muted uppercase transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-[11px] tracking-[0.16em] text-accent uppercase transition-colors hover:bg-accent hover:text-ink"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-5 bg-bone transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-bone transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        <div
          className="h-px origin-left bg-accent transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          {[...links, { href: "#contact", label: "Contact" }].map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="display-md py-1.5 transition-colors hover:text-accent"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
