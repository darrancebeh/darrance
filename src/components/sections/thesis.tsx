import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function Thesis() {
  const { title, icon, content } = PORTFOLIO_DATA.thesis;

  return (
    <section className="mb-24">
      <SectionHeader title={title} icon={icon} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.map((item, i) => (
          <div key={i} className="glass-card p-6 rounded-xl border-l-2 border-l-zinc-300 hover:border-l-momentum-green transition-colors duration-300">
            <h3 className="font-sans font-medium text-lg text-zinc-900 mb-3">
              {item.heading}
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}