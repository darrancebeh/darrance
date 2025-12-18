import { PORTFOLIO_DATA } from "@/lib/data";
import { TrendingUp, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { name, role, bio, sub_bio, metrics, socials, portrait } = PORTFOLIO_DATA.hero;
  const { ticker, exchange } = PORTFOLIO_DATA.header;

  return (
    <>
      {/* HEADER / TICKER TAPE */}
      <header className="mb-16 pt-4 flex justify-between items-center opacity-80">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.3)]"></div>
          <span className="text-xs font-mono text-zinc-500 font-medium tracking-widest">
            {ticker} <span className="text-zinc-300 mx-1">::</span> {exchange}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-zinc-400">
            <span className="text-zinc-900">●</span> MARKET OPEN
          </span>
        </div>
      </header>

      {/* HERO CONTENT */}
      <section id="hero" className="mb-24 relative">
        
        {/* Glassmorphic Accent */}
        <div className="absolute -top-20 -right-10 w-80 h-80 bg-gradient-to-br from-white/20 to-cream-100/10 backdrop-blur-3xl rounded-full -z-10 opacity-60" />
        
        {/* The "Identity" Block */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-sans font-semibold tracking-tighter text-zinc-900 mb-4 text-balance">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 font-light tracking-tight flex items-center gap-3 mb-4">
            {role}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a 
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a 
              href={`mailto:${socials.email}`}
              className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{socials.email}</span>
            </a>
          </div>
        </div>

        {/* The "Thesis" (Bio) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="text-lg text-zinc-700 leading-relaxed text-balance mb-4">
              {bio}
            </p>
            <p className="text-sm font-mono text-zinc-500">
              {`// ${sub_bio}`}
            </p>
          </div>
          
          {/* Portrait - Polaroid Style */}
          <div className="flex justify-center md:justify-end md:-mt-32 mt-6 md:mt-0">
            <div className="relative rotate-3 bg-white p-4 pb-8 shadow-xl scale-90 md:scale-100">
              <div className="w-56 h-64 overflow-hidden">
                <Image 
                  src={portrait} 
                  alt={name}
                  width={224}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* The "Performance Matrix" (Stats) */}
        <div className="glass-panel p-6 md:p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
                  {metric.label}
                </span>
                <span className="font-mono text-lg text-zinc-900">
                  {metric.value}
                  {metric.trend === "up" && (
                    <TrendingUp className="inline-block ml-1 w-4 h-4 text-momentum-green" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}