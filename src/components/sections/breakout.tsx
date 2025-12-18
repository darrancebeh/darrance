import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function Breakout() {
  const { title, icon, data } = PORTFOLIO_DATA.breakout;

  return (
    <section className="mb-24 relative">
      {/* Glass Accent */}
      <div className="absolute top-[30%] right-[-5%] w-56 h-56 bg-gradient-to-bl from-white/15 to-cream-100/10 backdrop-blur-3xl rounded-full -z-10" />
      
      <SectionHeader title={title} icon={icon} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((project, i) => (
          <a 
            key={i} 
            href={project.link}
            // UPDATED: Using the new glass-card utility
            className="group glass-card p-6 rounded-xl relative overflow-hidden"
          >
            {/* Subtle Gradient overlay on hover for that "Liquid" feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-2 h-2 rounded-full ${project.momentum === 'High' ? 'bg-momentum-green shadow-[0_0_12px_var(--color-momentum-green)]' : 'bg-zinc-300'}`}></div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              
              <h3 className="font-medium text-zinc-900 mb-2 text-lg tracking-tight">{project.title}</h3>
              <p className="text-sm text-zinc-500 mb-6 h-10 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-zinc-500 bg-white/50 px-2 py-1 rounded-md border border-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}