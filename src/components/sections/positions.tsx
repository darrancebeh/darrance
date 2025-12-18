import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function Positions() {
  const { title, icon, data } = PORTFOLIO_DATA.positions;

  return (
    <section className="mb-24 relative">
      <SectionHeader title={title} icon={icon} />
      
      <div className="space-y-6">
        {data.map((job, i) => (
          // Glass Card Container
          <div key={i} className="glass-card rounded-xl overflow-hidden border border-white/40">
            
            {/* Header: Ticker & Status */}
            <div className="bg-zinc-50/50 px-6 py-4 flex justify-between items-center border-b border-zinc-100/50">
              <div className="flex items-center gap-3">
                <span className="font-sans font-semibold text-zinc-900">{job.company}</span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-200 text-zinc-600">
                  ${job.ticker}
                </span>
              </div>
              <div className="flex items-center gap-2">
                 {/* Status Indicator */}
                <div className={`w-1.5 h-1.5 rounded-full ${job.status === 'OPEN' ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'}`} />
                <span className={`text-[10px] font-mono tracking-wider ${job.status === 'OPEN' ? 'text-emerald-600' : 'text-zinc-400'}`}>
                  {job.status}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Left Column: Metadata */}
              <div className="col-span-1 space-y-4">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Position</div>
                  <div className="font-medium text-sm text-zinc-800">{job.role}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Entry / Exit</div>
                  <div className="font-mono text-xs text-zinc-600">{job.entry} — {job.exit}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Strategy</div>
                  <div className="inline-block px-2 py-1 rounded bg-momentum-green/10 text-emerald-800 text-[10px] font-medium border border-momentum-green/20">
                    {job.strategy}
                  </div>
                </div>
              </div>

              {/* Right Column: Thesis & ROI */}
              <div className="col-span-1 md:col-span-3">
                <div className="mb-6">
                  <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Investment Thesis</div>
                  <p className="text-sm text-zinc-600 leading-relaxed text-balance">
                    {job.thesis}
                  </p>
                </div>
                
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Realized Yield (ROI)</div>
                  <ul className="space-y-2">
                    {job.roi.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-catalyst-blue shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}