"use client";

import { PORTFOLIO_DATA } from "@/lib/data";
import { TrendingUp, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const { name, role, bio, sub_bio, metrics, socials, portrait } = PORTFOLIO_DATA.hero;
  const { ticker, exchange } = PORTFOLIO_DATA.header;
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

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
            <span className="text-zinc-900">●</span> {currentTime || "--:--"}
          </span>
        </div>
      </header>

      {/* HERO CONTENT */}
      <section id="hero" className="mb-24 relative">
        
        {/* Glassmorphic Accent - Animated */}
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-10 w-80 h-80 bg-gradient-to-br from-white/20 to-cream-100/10 backdrop-blur-3xl rounded-full -z-10 opacity-60" 
        />
        
        {/* The "Identity" Block */}
        <div className="mb-10">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl text-zinc-400 mb-2"
            style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
          >
            The Portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-sans font-semibold tracking-tighter text-zinc-900 mb-4 text-balance"
          >
            {name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-500 font-light tracking-tight flex items-center gap-3 mb-4"
          >
            {role}
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4"
          >
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
          </motion.div>
        </div>

        {/* The "Thesis" (Bio) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-2"
          >
            <p className="text-lg text-zinc-700 leading-relaxed text-balance mb-4">
              {bio}
            </p>
            <p className="text-sm font-mono text-zinc-500">
              {`// ${sub_bio}`}
            </p>
          </motion.div>
          
          {/* Portrait - Polaroid Style */}
          <motion.div 
            initial={{ opacity: 0, x: 30, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex justify-center md:justify-end md:-mt-32"
          >
            <div className="relative rotate-3 bg-white p-4 pb-8 shadow-xl">
              <div className="w-56 h-64 overflow-hidden">
                <Image 
                  src={portrait} 
                  alt={name}
                  width={192}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <p 
                className="text-center mt-2 text-zinc-800 text-lg font-semibold tracking-wide"
                style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
              >
                Darrance
              </p>
            </div>
          </motion.div>
        </div>

        {/* The "Performance Matrix" (Stats) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="glass-panel p-6 md:p-8 rounded-2xl"
        >
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
        </motion.div>

      </section>
    </>
  );
}