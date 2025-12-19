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
  
  // Typewriter effect state
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [cycleComplete, setCycleComplete] = useState(false);

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

  // Typewriter animation
  useEffect(() => {
    const fullText = name;
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseAfterTyping = 3000;
    const pauseAfterDeleting = 1000;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < fullText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === fullText.length) {
      // Pause after typing, then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Finished deleting, pause then switch mode
      timeout = setTimeout(() => {
        setIsDeleting(false);
        if (!cycleComplete) {
          setIsHighlighted(true);
          setCycleComplete(true);
        } else {
          setIsHighlighted(false);
          setCycleComplete(false);
        }
      }, pauseAfterDeleting);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isHighlighted, cycleComplete, name]);

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
          <h1 
            className="text-5xl md:text-7xl font-sans font-semibold tracking-tighter mb-4 text-balance"
          >
            {name}
          </h1>
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
            className="flex justify-center md:justify-end md:-mt-32 md:translate-x-4"
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
              <p 
                className="text-center text-zinc-600 text-xs font-medium tracking-wide leading-none mb-[-0.25rem]"
                style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
              >
                16 December 2025 | My 21st
              </p>
            </div>
          </motion.div>
        </div>

        {/* The "Performance Matrix" - Scattered Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative"
        >
          {/* Mobile: Grid Layout */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {metrics.map((metric, idx) => {
              const delays = [0, 0.15, 0.3, 0.45];
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.7, delay: 1.3 + delays[idx], ease: "easeOut" }}
                  className="relative bg-white p-4 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-default border-t border-l border-white/50"
                  title={metric.tooltip}
                >
                  {/* Corner stamp effect */}
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-zinc-900/5 group-hover:border-zinc-900/20 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-zinc-900/5 group-hover:border-zinc-900/20 transition-colors duration-300" />
                  
                  <div className="relative flex flex-col items-center gap-2 min-h-[80px] justify-center">
                    <div className="flex items-baseline gap-1 justify-center flex-wrap">
                      <span className="font-mono text-sm font-bold text-zinc-900 tracking-tighter text-center leading-tight break-words max-w-full px-2">
                        {metric.value}
                      </span>
                      {metric.trend === "up" && (
                        <TrendingUp className="w-3 h-3 text-zinc-900 opacity-30 flex-shrink-0" />
                      )}
                    </div>
                    <div className="w-8 h-px bg-zinc-900/10" />
                    <span className="text-[8px] font-mono uppercase tracking-[0.15em] text-zinc-500 text-center leading-tight px-1">
                      {metric.label}
                    </span>
                  </div>

                  {/* Index marker */}
                  <div className="absolute top-1.5 left-1.5 text-[7px] font-mono text-zinc-900/5">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop: Scattered Overlap Layout */}
          <div className="hidden md:block relative min-h-[180px]">
            {metrics.map((metric, idx) => {
              const rotations = ['-rotate-2', 'rotate-3', '-rotate-3', 'rotate-2'];
              const positions = [
                'left-[2%] top-8',
                'left-[20%] top-0',
                'left-[42%] top-10',
                'left-[62%] top-4'
              ];
              const delays = [0, 0.15, 0.3, 0.45];
              const zIndexes = ['z-10', 'z-20', 'z-30', 'z-40'];
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -2 : 3 }}
                  transition={{ duration: 0.7, delay: 1.3 + delays[idx], ease: "easeOut" }}
                  className={`absolute bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-default border-t border-l border-white/50 ${rotations[idx]} ${positions[idx]} ${zIndexes[idx]} hover:!z-50`}
                  whileHover={{ 
                    y: -10, 
                    rotate: 0,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  title={metric.tooltip}
                >
                  {/* Corner stamp effect */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-zinc-900/5 group-hover:border-zinc-900/20 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-zinc-900/5 group-hover:border-zinc-900/20 transition-colors duration-300" />
                  
                  {/* Subtle grain texture */}
                  <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)] pointer-events-none" />
                  
                  <div className="relative flex flex-col items-center gap-2.5 min-w-[150px]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono text-3xl font-bold text-zinc-900 tracking-tight">
                        {metric.value}
                      </span>
                      {metric.trend === "up" && (
                        <TrendingUp className="w-4 h-4 text-zinc-900 opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                      )}
                    </div>
                    <div className="w-10 h-px bg-zinc-900/10 group-hover:w-full group-hover:bg-zinc-900/30 transition-all duration-500" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 text-center leading-tight">
                      {metric.label}
                    </span>
                  </div>

                  {/* Index marker */}
                  <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-900/5 group-hover:text-zinc-900/20 transition-colors duration-300">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </section>
    </>
  );
}