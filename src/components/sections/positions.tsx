"use client";

import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { ExternalLink, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Positions() {
  const { title, icon, data } = PORTFOLIO_DATA.positions;
  const [expandedPositions, setExpandedPositions] = useState<Set<number>>(new Set([0]));

  const togglePosition = (index: number) => {
    setExpandedPositions(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="mb-24 relative">
      <SectionHeader title={title} icon={icon} />
      
      <div className="space-y-6">
        {data.map((position, index) => {
          const { company, ticker, role, status, entry, exit, strategy, thesis, roi, link } = position;
          const isExpanded = expandedPositions.has(index);
          const isHighlighted = status === "OPEN" || status === "INCOMING";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-6 md:p-8 rounded-2xl ${
                status === "EVOLVED" ? "opacity-60 hover:opacity-100 transition-opacity" : ""
              }`}
            >
              {/* Subtle left accent for active positions */}
              {status === "OPEN" && (
                <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-momentum-green to-transparent" />
              )}

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold text-zinc-900">
                      {company}
                    </h3>
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-momentum-green transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full ${
                    status === "OPEN" 
                      ? "bg-momentum-green/10 text-momentum-green" 
                      : status === "INCOMING"
                      ? "bg-accent-warm/10 text-accent-warm"
                      : "bg-zinc-100 text-zinc-500"
                  }`}>
                    {status}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <span className="font-medium">{role}</span>
                  <span>•</span>
                  <span className="font-mono">{entry} - {exit}</span>
                  <span>•</span>
                  <span className="text-xs">{strategy}</span>
                </div>
              </div>

              {/* Thesis */}
              <p className={`${isHighlighted ? "text-base" : "text-sm"} text-zinc-600 leading-relaxed mb-4`}>
                {thesis}
              </p>

              {/* ROI Section */}
              <div className="space-y-2">
                {/* First ROI bullet - always visible */}
                <div className="flex gap-2.5 text-sm text-zinc-700">
                  <span className="text-momentum-green mt-0.5">→</span>
                  <span>{roi[0]}</span>
                </div>
                
                {/* Remaining bullets - expandable */}
                <AnimatePresence>
                  {isExpanded && roi.length > 1 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 overflow-hidden"
                    >
                      {roi.slice(1).map((item, idx) => (
                        <div key={idx} className="flex gap-2.5 text-sm text-zinc-700">
                          <span className="text-momentum-green mt-0.5">→</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Toggle button */}
              {roi.length > 1 && (
                <button
                  onClick={() => togglePosition(index)}
                  className="mt-4 text-xs font-medium text-zinc-400 hover:text-zinc-700 
                             flex items-center gap-1 transition-colors"
                >
                  {isExpanded 
                    ? "Show less" 
                    : `+${roi.length - 1} more`
                  }
                  <ChevronDown className={`w-3 h-3 transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`} />
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
