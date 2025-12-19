"use client";

import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowUpRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Thesis() {
  const { title, icon, researchLink, featuredArticle } = PORTFOLIO_DATA.thesis;

  return (
    <section id="thesis" className="mb-24 relative">
      {/* Glassmorphic Background Elements */}
      <div className="absolute -top-10 right-[10%] w-48 h-48 bg-white/20 backdrop-blur-2xl border border-zinc-900/5 rounded-2xl rotate-12 -z-10" />
      <div className="absolute bottom-[20%] left-[5%] w-40 h-40 bg-cream-100/30 backdrop-blur-2xl border border-zinc-900/8 rounded-full -z-10" />
      
      <SectionHeader title={title} icon={icon} />
      
      {/* Featured Article - Hero Card */}
      <motion.a
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        href={featuredArticle.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group glass-panel hover-lift p-8 md:p-10 rounded-2xl mb-8 block relative overflow-hidden border-2 border-zinc-900/15 hover:border-zinc-900/30 transition-all hover:shadow-[0_20px_70px_-12px_rgba(0,0,0,0.15)]"
      >
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-zinc-900/5 border border-zinc-900/15">
                <FileText className="w-5 h-5 text-zinc-900" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-900 font-semibold">
                {featuredArticle.label}
              </span>
            </div>
            <ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-sans font-semibold text-zinc-900 mb-4 tracking-tight">
            {featuredArticle.title}
          </h3>
          
          <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
            {featuredArticle.subtitle}
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900">
            <span>Read Full Paper</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </motion.a>
      
      {/* CTA to All Research */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center"
      >
        <a 
          href={researchLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group glass-card px-6 py-4 rounded-xl inline-flex items-center gap-3 hover:bg-white/60 transition-all hover:-translate-y-0.5"
        >
          <div className="flex flex-col items-start">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Research Archive</span>
            <span className="font-medium text-zinc-900">View All Publications</span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}