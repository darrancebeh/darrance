import { professional, ventures, leadership, profile } from "@/content/profile";
import Nav from "@/components/Nav";
import Spotlight from "@/components/Spotlight";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import About from "@/components/About";
import SectionHeading from "@/components/SectionHeading";
import ExperienceList from "@/components/ExperienceList";
import Projects from "@/components/Projects";
import Toolkit from "@/components/Toolkit";
import Biography from "@/components/Biography";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.site,
  email: `mailto:${profile.email}`,
  jobTitle: "Strategy & Operations Consultant, Commercial Analytics",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kuala Lumpur",
    addressCountry: "MY",
  },
  sameAs: [profile.linkedin],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Sunway University" },
    { "@type": "CollegeOrUniversity", name: "Lancaster University" },
    { "@type": "CollegeOrUniversity", name: "Multimedia University" },
  ],
  worksFor: { "@type": "Organization", name: "Citi" },
};

export default function Home() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Spotlight />
      <Nav />
      <Hero />
      <Statement />
      <About />
      <Education />

      <section id="work" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="03"
          title="Professional"
          lede="My professional experiences throughout my career."
        />
        <ExperienceList items={professional} />
      </section>

      <section id="leadership" className="border-y border-line bg-ink-2/30">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
          <SectionHeading
            index="04"
            title="Student Leadership"
            lede="Executive and committee roles across university societies and student organizations."
            accent="text-violet"
          />
          <ExperienceList items={leadership} />
        </div>
      </section>

      <section id="ventures" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="05"
          title="Ventures"
          lede="Organizations I started and ran, where I owned the strategy, the team and the outcome — with nobody above me to escalate to."
          accent="text-amber"
        />
        <ExperienceList items={ventures} />
      </section>
      
      <Projects />

      <Toolkit />
      <Biography />
      <Contact />
    </main>
  );
}
