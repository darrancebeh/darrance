"use client";

import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Quotes() {
  const [revealed, setRevealed] = useState(false);

  const quotes = [
    {
      text: "The market is just a psychological battlefield of human irrationality, disguised as a math problem.",
      anecdote: "We look at charts and see clean lines, exact decimals, and statistical probabilities. But underneath the data, every price movement is simply the aggregate result of millions of algorithms, irrational decisions, fears, and biases colliding in real-time.",
      author: "Darrance Beh Heng Shek"
    }
  ];

  return (
    <section id="quotes" className="mb-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Quote Display */}
        <motion.div
          className="glass-panel p-8 md:p-12 rounded-2xl cursor-pointer"
          onClick={() => setRevealed(!revealed)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Quote className="w-8 h-8 text-zinc-400 mx-auto mb-6" />
          <motion.blockquote
            className="text-xl md:text-2xl font-serif text-zinc-900 leading-relaxed mb-6"
            initial={{ opacity: 1 }}
            animate={{ opacity: revealed ? 0.7 : 1 }}
            transition={{ duration: 0.3 }}
          >
            &quot;{quotes[0].text}&quot;
          </motion.blockquote>
          <motion.cite
            className="text-sm font-medium text-zinc-500"
            initial={{ opacity: 1 }}
            animate={{ opacity: revealed ? 0.7 : 1 }}
            transition={{ duration: 0.3 }}
          >
            — {quotes[0].author}
          </motion.cite>

          {/* Reveal Hint */}
          <motion.p
            className="text-xs text-zinc-400 mt-4"
            animate={{ opacity: revealed ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Click to reveal the story behind this quote
          </motion.p>
        </motion.div>

        {/* Anecdote Reveal */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 glass-panel p-6 rounded-2xl"
            >
              <p className="text-zinc-600 leading-relaxed">
                {quotes[0].anecdote}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
