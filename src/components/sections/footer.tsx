import { Github, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-32 mb-8">
      <div className="glass-panel p-8 rounded-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
          
          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
            <span className="font-mono">Built with</span>
            <span className="text-zinc-700 font-medium">Next.js 15</span>
            <span>•</span>
            <span className="text-zinc-700 font-medium">Tailwind v4</span>
            <span>•</span>
            <span className="text-zinc-700 font-medium">OKLCH</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/darrancebeh/darrance"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">Source</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs">
            © {currentYear} Darrance Beh
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-4 pt-4 border-t border-zinc-200 text-center">
          <span className="text-xs font-mono text-zinc-400">
            Last updated: December 2025
          </span>
        </div>
      </div>
    </footer>
  );
}
