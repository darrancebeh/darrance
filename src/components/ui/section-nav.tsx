"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("");
  const { sections } = PORTFOLIO_DATA.navigation;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-3">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === id
                ? "bg-momentum-green scale-150"
                : "bg-zinc-300 hover:bg-zinc-400 hover:scale-125"
            }`}
            aria-label={`Navigate to ${label}`}
          />
        ))}
      </div>
    </nav>
  );
}
