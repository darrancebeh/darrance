import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { ExternalLink } from "lucide-react";

export function Positions() {
  const { title, icon, data } = PORTFOLIO_DATA.positions;

  return (
    <section className="mb-24 relative">
      {/* Glassmorphic Background Accent */}
      <div className="absolute top-0 left-[-10%] w-64 h-64 bg-gradient-to-br from-cream-200/40 to-transparent backdrop-blur-3xl rounded-full -z-10" />
      
      <SectionHeader title={title} icon={icon} />
      
      <div className="space-y-8">
        {data.map((job, i) => {
          // Highlight active/incoming positions
          const isHighlighted = job.status === 'OPEN' || job.status === 'INCOMING';
          
          return (
            // Glass Card Container with enhanced styling for highlighted positions
            <div 
              key={i} 
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                isHighlighted 
                  ? 'border-2 border-zinc-900/20 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]' 
                  : 'border border-white/40'
              }`}
            >
            
            {/* Header: Ticker & Status */}
            <div className={`px-6 py-5 flex justify-between items-center border-b ${
              isHighlighted 
                ? 'bg-gradient-to-r from-zinc-900/5 to-transparent border-zinc-900/15' 
                : 'bg-zinc-50/50 border-zinc-100/50'
            }`}>
              <div className="flex items-center gap-3">
                <span className="font-sans font-semibold text-zinc-900 text-lg">{job.company}</span>
                <span className="hidden sm:inline-block px-2.5 py-1 rounded text-[10px] font-mono bg-zinc-200 text-zinc-600">
                  ${job.ticker}
                </span>
                {job.link && (
                  <a 
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <div className="flex items-center gap-2">
                 {/* Status Indicator */}
                <div className={`w-2 h-2 rounded-full ${
                  job.status === 'OPEN' || job.status === 'INCOMING' 
                    ? 'bg-zinc-900 animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.3)]' 
                    : 'bg-zinc-400'
                }`} />
                <span className={`text-[11px] font-mono tracking-wider font-semibold ${
                  job.status === 'OPEN' || job.status === 'INCOMING' 
                    ? 'text-zinc-900' 
                    : 'text-zinc-400'
                }`}>
                  {job.status}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              
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
                  <div className="inline-block px-2 py-1 rounded bg-zinc-900/5 text-zinc-900 text-[10px] font-medium border border-zinc-900/15">
                    {job.strategy}
                  </div>
                </div>
              </div>

              {/* Right Column: Thesis & ROI */}
              <div className="col-span-1 md:col-span-3">
                <div className="mb-8">
                  <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-3 font-semibold">Investment Thesis</div>
                  <p className="text-base text-zinc-700 leading-relaxed text-balance font-light">
                    {job.thesis}
                  </p>
                </div>
                
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-3 font-semibold">Realized Yield (ROI)</div>
                  <ul className="space-y-3">
                    {job.roi.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                          isHighlighted ? 'bg-zinc-900' : 'bg-zinc-600'
                        }`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}