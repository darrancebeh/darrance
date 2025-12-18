import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function Alpha() {
  const { title, icon, data } = PORTFOLIO_DATA.alpha;

  return (
    <section id="alpha" className="mb-24 relative">
      <SectionHeader title={title} icon={icon} />
      
      <div className="glass-panel p-8 rounded-2xl">
        <div className="space-y-8">
          {data.map((allocation, i) => (
            <div key={i} className="group">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {allocation.category}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 font-mono">
                      {allocation.region}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
                    {allocation.description}
                  </p>
                </div>
                <div className="text-right ml-6 flex-shrink-0">
                  <div className="text-3xl font-bold text-zinc-900 font-mono">
                    {allocation.weight}
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full bg-zinc-900 transition-all duration-1000 ease-out group-hover:bg-zinc-700"
                  style={{ width: allocation.weight }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-8 pt-6 border-t border-zinc-200">
          <p className="text-xs text-zinc-500 text-center font-mono">
            Active allocation as of December 2025 • US Markets Focus
          </p>
        </div>
      </div>
    </section>
  );
}