import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function Liquidity() {
  const { title, icon, status, bio, email, cta } = PORTFOLIO_DATA.liquidity;

  return (
    <section className="mb-12">
      <SectionHeader title={title} icon={icon} />
      
      {/* UPDATED: Glass Panel */}
      <div className="glass-panel p-8 rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        
        {/* Decorative background glow inside the card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-zinc-100/50 to-transparent pointer-events-none" />

        <div className="max-w-md relative z-10">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
            <span className="text-xs font-mono text-emerald-700/80 uppercase tracking-widest font-semibold">
              {status}
            </span>
          </div>
          <p className="text-zinc-600 text-sm leading-relaxed">
            {bio}
          </p>
        </div>
        
        <a 
          href={`mailto:${email}`}
          className="relative z-10 whitespace-nowrap px-6 py-3 bg-zinc-900 text-zinc-50 text-sm font-medium rounded-lg hover:bg-zinc-800 transition-all hover:scale-[1.02] shadow-lg shadow-zinc-900/10"
        >
          {cta}
        </a>
      </div>
    </section>
  );
}