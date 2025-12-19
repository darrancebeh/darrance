"use client";

import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";

export function TechStack() {
  const { title, icon, categories } = PORTFOLIO_DATA.techStack;

  return (
    <section id="tech-stack" className="mb-24 relative">
      <SectionHeader title={title} icon={icon} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 rounded-xl"
          >
            <h3 className="text-sm font-semibold text-zinc-900 mb-4 tracking-wide">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.tools.map((tool, j) => (
                <span
                  key={j}
                  className="text-xs px-3 py-1.5 rounded-full bg-zinc-50 text-zinc-600 
                             border border-zinc-200 hover:border-momentum-green/30 
                             hover:bg-momentum-green/5 transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
