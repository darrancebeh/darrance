import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { Github, Linkedin, Download } from "lucide-react";

export function Liquidity() {
  const { title, icon, status, bio, email, github, linkedin, cta } = PORTFOLIO_DATA.liquidity;

  return (
    <section id="liquidity" className="mb-12 relative">
      {/* Glass Background Accents */}
      <div className="absolute -top-20 left-[15%] w-72 h-72 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-[10%] w-40 h-40 bg-cream-200/30 backdrop-blur-2xl border border-zinc-900/5 rounded-2xl rotate-12 -z-10" />
      
      <SectionHeader title={title} icon={icon} />
      
      {/* UPDATED: Glass Panel */}
      <div className="glass-panel p-8 rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        
        {/* Decorative background glow inside the card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-zinc-100/50 to-transparent pointer-events-none" />

        <div className="max-w-md relative z-10">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
            <div className="w-2 h-2 bg-zinc-900 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]"></div>
            <span className="text-xs font-mono text-zinc-900/80 uppercase tracking-widest font-semibold">
              {status}
            </span>
          </div>
          <p className="text-zinc-600 text-sm leading-relaxed mb-4">
            {bio}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 relative z-10">
          <a 
            href={`mailto:${email}`}
            className="whitespace-nowrap px-6 py-3 bg-zinc-900 dark:bg-neon-600 text-zinc-50 dark:text-charcoal-950 text-sm font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-neon-500 transition-all hover:scale-[1.02] shadow-lg shadow-zinc-900/10"
          >
            {cta}
          </a>
          
          <a 
            href="/resume.pdf"
            download
            className="whitespace-nowrap hover-lift px-6 py-3 glass-card text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-lg transition-all flex items-center gap-2 justify-center"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}