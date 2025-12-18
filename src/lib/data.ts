// lib/data.ts
import { Activity, TrendingUp, Unlock, Lock, BookOpen, BarChart4 } from 'lucide-react';

export const PORTFOLIO_DATA = {
  header: {
    ticker: "DBHS",
    exchange: "LANC.UNI" // Lancaster University
  },
  hero: {
    name: "Darrance Beh",
    role: "CS Major & Systematic Quant",
    bio: "I don't just write code; I manage risk and hunt for asymmetry. Discretionary instincts turned systematic execution.",
    sub_bio: "Specializing in growth architectures, momentum-based UI, and catalyst-driven backend systems.",
    metrics: [
      { label: "Vintage", value: "2004" }, // Birth year
      { label: "Market Exp", value: "5 Years" },
      { label: "Cumulative R", value: "600 → 6-Figs", trend: "up" }, // The Flex
      { label: "Focus", value: "Growth / Momentum" }
    ]
  },
  
  // SECTION: EXPERIENCE (The Trade Ledger)
  positions: {
    title: "Trade Ledger (Experience)",
    icon: Activity,
    data: [
      {
        company: "Freelance / Self-Employed",
        ticker: "PVT.EQ", // Private Equity
        role: "Full Stack Engineer",
        status: "OPEN", // Currently working here
        entry: "2023",
        exit: "PRESENT",
        strategy: "Momentum", 
        thesis: "Building high-velocity web apps for clients. Capitalizing on the Next.js ecosystem to deliver rapid MVP deployments.",
        roi: [ // Achievements
          "Developed custom e-commerce solutions with 99.9% uptime.",
          "Reduced client server costs by 40% via serverless architecture.",
          "Implemented complex state management for real-time dashboards."
        ]
      },
      {
        company: "Personal Trading Desk",
        ticker: "PROP.DESK",
        role: "Discretionary > Quant",
        status: "CLOSED", // Or "PIVOTED"
        entry: "2020",
        exit: "2025",
        strategy: "Global Macro / Catalyst",
        thesis: "Started with RM600 capital. Leveraged volatility during market catalyst events. Transitioned from manual execution to Python-based backtesting.",
        roi: [
          "Scaled initial capital to 6-figures (MYR) in 5 years.",
          "Developed 'Catalyst', a Python script to scrape news for sentiment analysis.",
          "Mastered risk management: maintained a Sharpe Ratio > 1.5."
        ]
      }
    ]
  },

  // SECTION: PROJECTS (Breakout Setups)
  breakout: {
    title: "Breakout Setups (Projects)",
    icon: TrendingUp,
    data: [
      {
        title: "QuantBoard",
        description: "A dashboard visualizing real-time order flow and momentum indicators for crypto assets.",
        momentum: "High", 
        link: "#",
        tags: ["Next.js", "Recharts", "WebSocket"]
      },
      {
        title: "Portfolio.v4",
        description: "This website. A study in minimalist aesthetics and high-performance rendering.",
        momentum: "Stable",
        link: "#",
        tags: ["Tailwind v4", "React Server Components"]
      }
    ]
  },

  // SECTION: SKILLS (Asset Allocation)
  alpha: {
    title: "Portfolio Allocation (Tech Stack)",
    icon: BarChart4,
    // We treat skills as "Holdings" with percentages
    data: [
      { asset: "TypeScript / Next.js", weight: "45%", sentiment: "Bullish", type: "Core Holding" },
      { asset: "Python (Pandas/NumPy)", weight: "30%", sentiment: "Bullish", type: "Data Analysis" },
      { asset: "Tailwind CSS", weight: "15%", sentiment: "Long", type: "Styling" },
      { asset: "Rust / Solidity", weight: "10%", sentiment: "Speculative", type: "R&D" }
    ]
  },

  // NEW SECTION: PHILOSOPHY
  thesis: {
    title: "Market Thesis",
    icon: BookOpen,
    content: [
      {
        heading: "The Quant Edge",
        body: "Markets are inefficient; code shouldn't be. My background in trading taught me that latency kills alpha. I apply the same rigor to web performance—optimizing LCP, minimizing bundles, and ensuring execution is instant."
      },
      {
        heading: "Risk Management",
        body: "In trading, you protect the downside. In engineering, this means robust type safety (TypeScript), comprehensive testing, and error boundaries. I don't ship 'naked calls' (untested code) to production."
      }
    ]
  },

  liquidity: {
    title: "Liquidity",
    icon: Lock,
    status: "OPEN FOR FILL",
    bio: "Currently looking for high-growth engineering teams. I bring the discipline of a trader and the creativity of a builder.",
    email: "your.email@example.com",
    cta: "Initiate Position" // Fun twist on "Contact Me"
  }
};