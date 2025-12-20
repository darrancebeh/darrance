"use client";

import { Heart, Coffee, BookOpen, Gamepad2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function Bio() {
  const interests = [
    { icon: BookOpen, label: "3x3 Cube PR: 12.931s; 2x2 Cube PR: 5.863s", color: "text-zinc-600" },
    { icon: Coffee, label: "Steeps His Own Cold Brews", color: "text-zinc-600" },
    { icon: Gamepad2, label: "Loves Strategy Games & Chess", color: "text-zinc-600" },
    { icon: Heart, label: "Loves Hiking & Nature", color: "text-zinc-600" },
    { icon: ExternalLink, label: "Steam Profile", color: "text-zinc-600" },
  ];

  return (
    <section id="bio" className="mb-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl"
        style={{
          backgroundImage: 'url(/portrait3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px',
        }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-zinc-900/40 md:bg-zinc-900/50 backdrop-blur-sm md:backdrop-blur-md" />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-panel p-4 md:p-12 rounded-2xl w-full md:max-w-2xl !bg-cream-100"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4"
            >
              Beyond the Markets
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl md:text-base text-zinc-800 leading-relaxed mb-4 text-left md:text-justify"
            >
            I have a distinct inability to do things &apos;casually.&apos; <br/> <br/>

            It started at 15 during the COVID lockdowns. While everyone else was hopping on the Dalgona coffee trend, I found myself trading digital commodities (skins) on the Steam Community Market, completely unaware at the time that I was essentially arbitrage trading. I started my trading journey with just RM600 (which I had to beg my parents to lend me), all in the mission for more allowance money. Five years later, that measly RM600 has compounded into fully paid-for tuition and a comfortable lifestyle for present me.

            <br/><br/>
            Since young, I&apos;ve started viewing the word through the lens of game theory and behavioral economics. I was, and am, obsessed with analyzing and predicting human behavior and irrationality, whether it&apos;s in the financial markets, competitive gaming, or social dynamics.
            
            <br/><br/>
            This obsession explains why I treat hobbies like competitive sports. I didn&apos;t just play video games, I actually grinded to become a top-nation esports player in a game called Brawlhalla and osu!mania. I didn&apos;t just play VALORANT, I built the VALORANT Malaysia Discord until the official VALORANT Asia server absorbed us. I didn&apos;t just chat on Discord, I founded &apos;The Coffee Shop&apos; and &apos;unintentionally&apos; grew it into the region’s fastest-growing server, breaking growth records just to see if I could.
            <br/><br/>

            Even my downtime is associated with competition. I used to be really into Chess (1500 FIDE), I was a KL state-level debater (I love adversarial thinking), a competitive programmer (I type and think fast), and a speedcuber (fast hands). When I’m not literally obsessing over the markets, I’m usually trying to bench press 1.5x my bodyweight (100kg @ 67kg) without passing out. I also love having deep, late-night talks and mock debates about existentialism because if we aren&apos;t challenging our priors, are we even learning?
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl md:text-base text-zinc-800 leading-relaxed mb-4 text-left md:text-justify"
            >
            </motion.p>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-zinc-200 hover:bg-white transition-colors shadow-sm"
                >
                  <interest.icon className={`w-4 h-4 ${interest.color}`} />
                  {interest.label === "Steam Profile" ? (
                    <a
                      href="https://steamcommunity.com/id/darrancebeh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-zinc-900 hover:text-zinc-700 transition-colors"
                    >
                      {interest.label}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-zinc-900">{interest.label}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}