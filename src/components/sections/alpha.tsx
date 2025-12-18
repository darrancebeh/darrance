import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function Alpha() {
  const { title, icon, data } = PORTFOLIO_DATA.alpha;

  return (
    <section className="mb-24 relative">
      {/* Decorative Glass Card */}
      <div className="absolute top-[10%] left-[-8%] w-52 h-36 bg-cream-100/25 backdrop-blur-2xl border border-zinc-900/5 rounded-xl -rotate-6 -z-10" />
      
      <SectionHeader title={title} icon={icon} />
      
      <div className="glass-panel p-6 rounded-xl">
        <div className="space-y-6">
          {data.map((item, i) => (
            <div key={i} className="group">
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-zinc-800 text-sm">{item.asset}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-500 font-mono border border-zinc-200">
                    {item.type}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-zinc-500">{item.weight} Exposure</div>
                </div>
              </div>
              
              {/* Progress Bar "Weighting" */}
              <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110 ${
                    item.sentiment === 'Bullish' ? 'bg-momentum-green' : 
                    item.sentiment === 'Speculative' ? 'bg-catalyst-blue' : 'bg-zinc-400'
                  }`}
                  style={{ width: item.weight }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}