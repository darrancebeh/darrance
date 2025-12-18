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
      <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden">
        
        {/* Decorative background glow inside the card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-zinc-100/50 to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-momentum-green rounded-full shadow-[0_0_10px_rgba(134,167,137,0.4)] animate-pulse"></div>
            <span className="text-xs font-mono text-zinc-900/80 uppercase tracking-widest font-semibold">
              {status}
            </span>
          </div>

          {/* Bio */}
          <p className="text-zinc-600 text-base leading-relaxed max-w-2xl">
            {bio}
          </p>
          
          {/* Actions Grid */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Primary CTA - Cream/Grey */}
            <a 
              href={`mailto:${email}`}
              className="group px-8 py-4 bg-gradient-to-br from-cream-100 to-zinc-100 text-zinc-900 text-sm font-semibold rounded-xl hover:from-zinc-200 hover:to-zinc-300 transition-all hover-lift shadow-lg shadow-zinc-900/5 border border-zinc-200/50 flex items-center justify-center gap-2"
            >
              <span>{cta}</span>
              <span className="text-zinc-400 group-hover:text-zinc-600 transition-colors">→</span>
            </a>
            
            {/* Secondary - Resume Download */}
            <a 
              href="/resume.pdf"
              download
              className="px-6 py-4 glass-card text-zinc-600 text-sm font-medium rounded-xl transition-all hover-lift flex items-center justify-center gap-2 border border-zinc-900/5"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4 border-t border-zinc-900/5">
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
            <span className="text-xs text-zinc-400 font-mono">{email}</span>
          </div>
        </div>
      </div>
    </section>
  );
}