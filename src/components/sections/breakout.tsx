"use client";

import { ArrowUpRight, TrendingUp, BookOpen, Monitor, Cpu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState } from "react";

export function Breakout() {
  const { title, icon, data } = PORTFOLIO_DATA.breakout;
  const [selectedProject, setSelectedProject] = useState<typeof data[0] | null>(null);
  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const stackOrder = [
    currentTopIndex,
    (currentTopIndex + 1) % data.length,
    (currentTopIndex + 2) % data.length,
    (currentTopIndex + 3) % data.length,
  ];

  const projectIcons = {
    "Prism Lake Platform": TrendingUp,
    "Prism Lake Intelligence": BookOpen,
    "The Portfolio": Monitor,
    "Multi-Modal Quantitative Financial Analysis Tool": Cpu,
  };

  return (
    <section id="breakout" className="mb-24 relative">
      <SectionHeader title={title} icon={icon} />

      {/* 3D Card Stack */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center space-x-8 h-96" style={{ perspective: '1000px' }}>
          {/* Left Arrow */}
          <button
            onClick={() => setCurrentTopIndex((prev) => (prev - 1 + data.length) % data.length)}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 hover:bg-white transition-colors flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-600" />
          </button>

          <motion.div
            className="relative w-80 h-80 cursor-default flex-shrink-0"
          >
            {stackOrder.slice(0, 3).map((index, i) => {
              const project = data[index];
              const IconComponent = projectIcons[project.title as keyof typeof projectIcons];

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 p-6 rounded-2xl border shadow-lg bg-white/90 backdrop-blur-sm text-zinc-900 border-zinc-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  style={{
                    zIndex: 10 - i,
                    transform: `translateY(${i * 20}px) translateX(${i * 10}px) rotate(${i * 3}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                  whileHover={i === 0 ? { y: -15 } : {}}
                  onClick={i === 0 ? () => setSelectedProject(project) : undefined}
                >
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    {IconComponent && <IconComponent className="w-8 h-8 mb-3 text-zinc-600" />}
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={() => setCurrentTopIndex((prev) => (prev + 1) % data.length)}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 hover:bg-white transition-colors flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5 text-zinc-600" />
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex space-x-2 mt-4">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentTopIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentTopIndex === i ? 'bg-zinc-900' : 'bg-zinc-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-md w-full p-6 rounded-2xl border bg-white/90 backdrop-blur-sm text-zinc-900 border-zinc-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-zinc-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const IconComponent = projectIcons[selectedProject.title as keyof typeof projectIcons];
                  return IconComponent ? <IconComponent className="w-6 h-6 text-zinc-600" /> : null;
                })()}
                <h3 className="font-semibold text-lg">{selectedProject.title}</h3>
              </div>

              <p className="text-sm leading-relaxed mb-4 text-zinc-600">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                    {tag}
                  </span>
                ))}
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900"
                >
                  View Project <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}