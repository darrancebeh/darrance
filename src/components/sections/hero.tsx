import { PORTFOLIO_DATA } from "@/lib/data";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export function Hero() {
  const { name, role, bio, sub_bio, metrics } = PORTFOLIO_DATA.hero;
  const { ticker, exchange } = PORTFOLIO_DATA.header;

  return (
    <>
      {/* HEADER / TICKER TAPE */}
      <header className="mb-16 pt-4 flex justify-between items-center opacity-80">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-momentum-green animate-pulse shadow-[0_0_8px_var(--color-momentum-green)]"></div>
          <span className="text-xs font-mono text-zinc-500 font-medium tracking-widest">
            {ticker} <span className="text-zinc-300 mx-1">::</span> {exchange}
          </span>
        </div>
        <span className="text-xs font-mono text-zinc-400">
           <span className="text-momentum-green">●</span> MARKET OPEN
        </span>
      </header>

      {/* HERO CONTENT */}
      <section className="mb-24 relative">
        
        {/* The "Identity" Block */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-sans font-semibold tracking-tighter text-zinc-900 mb-4 text-balance">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 font-light tracking-tight flex items-center gap-3">
            {role}
          </p>
        </div>

        {/* The "Thesis" (Bio) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="text-lg text-zinc-600 leading-relaxed text-balance mb-4">
              {bio}
            </p>
            <p className="text-sm font-mono text-zinc-400">
              // {sub_bio}
            </p>
          </div>
        </div>

        {/* The "Performance Matrix" (Stats) */}
        <div className="glass-panel p-6 md:p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            
            {/* Metric 1: Inception */}
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
                {metrics[0].label}
              </span>
              <span className="font-mono text-lg text-zinc-700">
                {metrics[0].value}
              </span>
            </div>

            {/* Metric 2: Experience */}
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
                {metrics[1].label}
              </span>
              <span className="font-mono text-lg text-zinc-700">
                {metrics[1].value}
              </span>
            </div>

            {/* Metric 3: THE FLEX (Highlighted) */}
            <div className="flex flex-col relative">
               <div className="absolute -left-3 top-1 w-0.5 h-8 bg-momentum-green/50 hidden md:block"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600/80 mb-1 flex items-center gap-1">
                {metrics[2].label} <TrendingUp className="w-3 h-3" />
              </span>
              <span className="font-sans font-bold text-xl text-zinc-900 tracking-tight">
                {metrics[2].value}
              </span>
            </div>

             {/* Metric 4: Strategy */}
             <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
                {metrics[3].label}
              </span>
              <span className="font-mono text-sm text-zinc-600 mt-1 leading-tight">
                {metrics[3].value}
              </span>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}