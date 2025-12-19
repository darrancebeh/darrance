// lib/data.ts
import { Activity, TrendingUp, Unlock, BookOpen, BarChart4, Terminal } from 'lucide-react';

export const PORTFOLIO_DATA = {
  header: {
    ticker: "DBEH",
    exchange: "QUANT.TRADER"
  },
  hero: {
    name: "Darrance Beh.",
    portrait: "/portrait.jpg", // Add your portrait image to /public/portrait.jpg
    socials: {
      github: "https://github.com/darrancebeh",
      linkedin: "https://linkedin.com/in/darrance-beh",
      email: "darrancebeh@gmail.com"
    },
    role: "Quant Trader & CS Student",
    bio: "Active trader combining discretionary analysis with systematic execution. Founder of Prism Lake. I analyze markets daily, build quantitative models, and code my own infrastructure. Interested in systematic trading and quantitative research roles.",
    sub_bio: "Computer Science Major | Active Trading at Prism Lake | Diversifying Analytics Experience at L'Oréal",
    metrics: [
      { label: "Education", value: "Computer Science" },
      { label: "Trading Exp", value: "5 Years" },
      { label: "Track Record", value: "600 → 6-Figs", trend: "up" },
      { label: "Strategy", value: "Momentum/Macro" }
    ]
  },
  
  // SECTION: EXPERIENCE (The Trade Ledger)
  positions: {
    title: "Trade Ledger (Experience)",
    icon: Activity,
    data: [
      {
        company: "Prism Lake",
        ticker: "PRISM",
        role: "Founder & Quant Researcher",
        status: "OPEN",
        entry: "2023",
        exit: "PRESENT",
        progress: 50,
        strategy: "Systematic + Discretionary", 
        badges: [
          { text: "Active", icon: "activity", color: "green" }
        ],
        thesis: "Personal quantitative trading operation focused on generating alpha. Building proprietary models and trading infrastructure. Daily market analysis, strategy backtesting, and systematic execution across momentum and macro strategies. Visit prismlake.com for more.",
        roi: [
          "Developed multi-factor momentum models with backtested Sharpe > 1.8.",
          "Built real-time market scanning infrastructure using Python and WebSocket APIs.",
          "Active daily trading: analyzing price action, refining algos, managing risk across global markets."
        ],
        link: "https://prismlake.com"
      },
      {
        company: "L'Oréal Groupe",
        ticker: "OR.PA",
        role: "Data Intern",
        status: "INCOMING",
        entry: "Jan 2026",
        exit: "Apr 2026",
        progress: 0,
        strategy: "Quantitative Analytics",
        badges: [
          { text: "Top 0.2%", icon: "trophy", color: "amber" }
        ],
        thesis: "Selected from 1000+ applicants (2 positions) to apply systematic analytical thinking to consumer data patterns at the world's leading beauty company. Market Basket Analysis uses similar pattern recognition techniques as financial factor research—identifying correlations, building predictive models, and optimizing recommendations.",
        roi: [
          "Market Basket Analysis: Developing recommendation algorithms based on pattern recognition in purchase behavior (analogous to factor discovery in quant finance).",
          "ETL & Data Pipeline Management: Ensuring data quality and automation—critical skills for any quantitative research infrastructure.",
          "Enterprise Experience: Understanding how large organizations leverage data for decision-making while maintaining active trading operation."
        ]
      },
      {
        company: "Independent Trading",
        ticker: "PROP.DESK",
        role: "Discretionary Trader → Quant",
        status: "EVOLVED",
        entry: "2020",
        exit: "2023",
        progress: 100,
        strategy: "Global Macro / Catalyst",
        badges: [
          { text: "5Y Track Record", icon: "calendar", color: "gray" }
        ],
        thesis: "Started with RM600 seed capital. Traded volatility during major market catalysts (COVID, inflation, rate cycles). Evolved from discretionary execution to Python-based systematic strategies, leading to Prism Lake.",
        roi: [
          "Scaled RM600 → 6-figures (MYR) through disciplined risk management and catalyst-driven entries.",
          "Built 'Catalyst Engine': Python tool for news sentiment analysis across 10K+ sources daily.",
          "Maintained Sharpe Ratio > 1.5 across multiple market regimes and volatility cycles."
        ]
      }
    ]
  },

  // SECTION: PROJECTS (Breakout Setups)
  breakout: {
    title: "Breakout Setups (Research & Tools)",
    icon: TrendingUp,
    data: [
      {
        title: "Prism Lake Platform",
        description: "Quantitative trading research and execution platform. Multi-strategy backtesting, real-time scanning, and systematic trade execution.",
        momentum: "High", 
        link: "https://prismlake.com",
        tags: ["Python", "Next.js", "Real-time Data", "Systematic Trading"]
      },
      {
        title: "Catalyst Engine",
        description: "Real-time news aggregation and sentiment analysis system. Processes 10K+ sources daily to identify market-moving catalysts.",
        momentum: "High", 
        link: "https://github.com/darrancebeh",
        tags: ["Python", "NLP", "WebSocket", "Pandas"]
      },
      {
        title: "QuantBoard",
        description: "Live dashboard for order flow analysis and momentum scoring across crypto and equity markets.",
        momentum: "High", 
        link: "https://github.com/darrancebeh",
        tags: ["Next.js", "Recharts", "Real-time Data"]
      },
      {
        title: "Portfolio.v4",
        description: "This site. A statement on precision design and systematic thinking applied to web architecture.",
        momentum: "Stable",
        link: "https://github.com/darrancebeh/darrance",
        tags: ["Next.js", "Tailwind v4", "OKLCH"]
      }
    ]
  },

  // SECTION: SKILLS (Asset Allocation)
  alpha: {
    title: "Tech Stack Allocation",
    icon: BarChart4,
    // We treat skills as "Holdings" with percentages
    data: [
      { asset: "Python (Pandas/NumPy/SciPy)", weight: "40%", sentiment: "Bullish", type: "Core Quant Stack" },
      { asset: "Market Data APIs (Real-time)", weight: "25%", sentiment: "Bullish", type: "Infrastructure" },
      { asset: "TypeScript / Next.js", weight: "20%", sentiment: "Long", type: "Dashboard/UI" },
      { asset: "SQL / Time-Series DBs", weight: "10%", sentiment: "Long", type: "Data Storage" },
      { asset: "Rust / Low-Latency Systems", weight: "5%", sentiment: "Speculative", type: "R&D" }
    ]
  },

  // SECTION: PORTFOLIO ALLOCATION
  alpha: {
    title: "Capital Allocation",
    icon: BarChart4,
    data: [
      { 
        category: "Discretionary Holdings", 
        weight: "70%", 
        description: "Active position trading in US equities. High-conviction plays based on momentum and technical structure.",
        region: "US"
      },
      { 
        category: "Long-Term Holdings", 
        weight: "20%", 
        description: "Passive core allocation in US index ETFs. Strategic beta exposure for portfolio stability.",
        region: "US ETFs"
      },
      { 
        category: "Speculative Risk Assets", 
        weight: "10%", 
        description: "High-risk, high-reward positions. Volatility plays and event-driven opportunities.",
        region: "US"
      }
    ]
  },

  // SECTION: TECH STACK
  techStack: {
    title: "Tech Stack",
    icon: Terminal,
    categories: [
      {
        name: "Quantitative",
        tools: ["Python", "Pandas", "NumPy", "TA-Lib", "Backtrader"]
      },
      {
        name: "Data & APIs",
        tools: ["WebSockets", "REST APIs", "PostgreSQL", "Redis"]
      },
      {
        name: "Web Development",
        tools: ["TypeScript", "React", "Next.js", "Tailwind CSS"]
      },
      {
        name: "Infrastructure",
        tools: ["Git", "Docker", "Linux", "Cloud Deployment"]
      }
    ]
  },

  // NEW SECTION: PHILOSOPHY
  thesis: {
    title: "Trading Philosophy",
    icon: BookOpen,
    researchLink: "https://prismlake.com/research",
    featuredArticle: {
      title: "The Structural Decoupling of Price and Value",
      subtitle: "The structural transition from value-driven markets to an ecosystem dominated by inelastic flows and algorithmic liquidity.",
      link: "https://www.prismlake.com/research/the-structural-decoupling-of-price-and-value",
      label: "Genesis Paper"
    },
    content: [
      {
        heading: "Hybrid Approach: Discretionary + Systematic",
        body: "Pure discretionary trading lacks consistency. Pure quant misses regime changes. I trade the intersection: systematic models identify opportunities, discretionary judgment sizes positions and manages risk. Daily market analysis keeps me connected to price action while algos handle execution."
      },
      {
        heading: "Code as Competitive Advantage",
        body: "In modern markets, speed and data are alpha. I build my own tools—scrapers, backtesting engines, real-time dashboards—because relying on off-the-shelf solutions means trading the same signals as everyone else. Custom infrastructure = proprietary edge."
      },
      {
        heading: "Risk First, Returns Second",
        body: "Every strategy begins with downside protection. Position sizing, stop-loss discipline, and portfolio-level risk limits are non-negotiable. Sharpe ratio > absolute returns. Surviving drawdowns > chasing outsized wins. This mindset scaled RM600 to 6-figures without blowing up."
      },
      {
        heading: "Continuous Refinement",
        body: "Markets evolve; strategies must too. I analyze every trade, backtest new factors weekly, and adjust models based on changing volatility regimes. What worked in 2020's COVID vol won't work in 2025's rate environment. Adaptation is survival."
      }
    ]
  },

  liquidity: {
    title: "Liquidity & Opportunities",
    icon: Unlock,
    status: "ACTIVE TRADER | OPEN TO QUANT OPPORTUNITIES",
    bio: "Currently focused on systematic trading at Prism Lake while diversifying analytical experience. Interested in quantitative research and trading roles that leverage systematic strategy development, pattern recognition, and market analysis. Open to summer 2026 and full-time 2027 opportunities in quantitative finance.",
    email: "darrancebeh@gmail.com",
    github: "https://github.com/darrancebeh",
    linkedin: "https://linkedin.com/in/darrance-beh",
    cta: "Get in Touch"
  },

  navigation: {
    sections: [
      { id: "hero", label: "Intro" },
      { id: "positions", label: "Experience" },
      { id: "thesis", label: "Philosophy" },
      { id: "breakout", label: "Research" },
      { id: "alpha", label: "Allocation" },
      { id: "tech-stack", label: "Tech" },
      { id: "liquidity", label: "Contact" }
    ]
  }
};