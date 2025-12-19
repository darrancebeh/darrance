"use client";

import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { ExternalLink, ChevronDown, Activity, Trophy, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const badgeIcons = {
  activity: Activity,
  trophy: Trophy,
  calendar: Calendar,
};

const badgeColors = {
  green: "bg-momentum-green/10 text-momentum-green border-momentum-green/20",
  amber: "bg-accent-warm/10 text-accent-warm border-accent-warm/20",
  gray: "bg-zinc-100 text-zinc-500 border-zinc-200",
};

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
    <section id="positions" className="mb-24 relative">
      <SectionHeader title={title} icon={icon} />
      
      <div className="space-y-6">
        {data.map((position, index) => {
          const { company, ticker, role, status, entry, exit, strategy, location, thesis, roi, link } = position;
          const isExpanded = expandedPositions.has(index);
          const isHighlighted = status === "OPEN" || status === "INCOMING";

          return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderColor: "rgba(113, 128, 150, 0.2)"
                }}
                className={`glass-card p-4 md:p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                  status === "EVOLVED" ? "opacity-60 hover:opacity-100 transition-opacity" : ""
                } ${
                  status === "OPEN" ? "border-l-4 border-l-momentum-green/30 shadow-inner" : ""
                } ${
                  status === "INCOMING" ? "border-dashed border-accent-warm/30" : ""
                }`}
                style={status === "OPEN" ? { backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)', backgroundSize: '15px 15px' } : {}}
                aria-expanded={isExpanded}
                role="region"
              >
              {/* Subtle left accent for active positions */}
              {status === "OPEN" && (
                <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-momentum-green to-transparent" />
              )}

              {/* Header */}
              <div className="mb-4 md:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
                        {company}
                      </h3>
                      <span className="text-xs md:text-sm font-mono text-zinc-400 bg-zinc-50 px-2 py-1 rounded-md">
                        {ticker}
                      </span>
                    </div>
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-600 transition-colors"
                        aria-label={`Visit ${company} website`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <motion.span 
                    className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full self-start ${
                      status === "OPEN" 
                        ? "bg-momentum-green/10 text-momentum-green" 
                        : status === "INCOMING"
                        ? "bg-accent-warm/10 text-accent-warm"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {status}
                  </motion.span>
                </div>

                {/* Badges */}
                {position.badges && position.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {position.badges.map((badge, idx) => {
                      const IconComponent = badgeIcons[badge.icon as keyof typeof badgeIcons];
                      return (
                        <div
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${badgeColors[badge.color as keyof typeof badgeColors]}`}
                        >
                          {IconComponent && <IconComponent className="w-3 h-3" />}
                          <span>{badge.text}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-zinc-500 mt-3">
                  <span className="font-medium text-zinc-900 bg-zinc-50 px-2 py-1 rounded-md">{role}</span>
                  <div className="hidden sm:block">•</div>
                  <span className="font-mono">{entry} - {exit}</span>
                  <div className="hidden sm:block">•</div>
                  <span className="text-xs">{location}</span>
                  <div className="hidden sm:block">•</div>
                  <span className="text-xs">{strategy}</span>
                </div>
              </div>

              {/* Thesis */}
              <p className={`${isHighlighted ? "text-sm md:text-base" : "text-sm md:text-base"} text-zinc-600 leading-relaxed mb-4`}>
                {thesis}
              </p>

              {/* Skills - only when expanded */}
              {isExpanded && position.skills && position.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {position.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Key Insights - only when expanded */}
              {isExpanded && position.insights && position.insights.length > 0 && (
                <motion.div 
                  className="mb-4 p-3 bg-zinc-50 rounded-lg border border-zinc-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <p className="text-sm text-zinc-600 italic leading-relaxed">
                    {position.insights[0]}
                  </p>
                </motion.div>
              )}

              {/* ROI Section */}
              <div className="space-y-2">
                {/* First ROI bullet - always visible */}
                <div className="flex gap-2.5 text-sm md:text-base text-zinc-700 leading-relaxed">
                  <span className="text-momentum-green mt-0.5 flex-shrink-0">→</span>
                  <span className="font-mono">{roi[0]}</span>
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
                        <motion.div 
                          key={idx} 
                          className="flex gap-2.5 text-sm md:text-base text-zinc-700 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                        >
                          <span className="text-momentum-green mt-0.5 flex-shrink-0">→</span>
                          <span className="font-mono">{item}</span>
                        </motion.div>
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
                             flex items-center gap-1 transition-colors p-2 -m-2 rounded-md hover:bg-zinc-100"
                  aria-label={isExpanded ? "Show less details" : "View more details"}
                  aria-expanded={isExpanded}
                >
                  {isExpanded 
                    ? "Show Less" 
                    : "View Details"
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

      {/* View More Experiences Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href={PORTFOLIO_DATA.hero.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors text-sm font-medium"
          aria-label="View more experiences on LinkedIn"
        >
          View More Experiences
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
