"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("");
  const { sections } = PORTFOLIO_DATA.navigation;

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestSection = sections[0].id;
      let closestDistance = Infinity;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = id;
          }
        }
      });

      setActiveSection(closestSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeSection === id
                ? "bg-zinc-900 scale-150"
                : "bg-zinc-300 hover:bg-zinc-400 hover:scale-125"
            }`}
            aria-label={`Navigate to ${label}`}
          />
        ))}
      </div>
    </nav>
  );
}
