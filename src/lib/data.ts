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
      linkedin: "https://linkedin.com/in/darrancebeh",
      email: "darrancebeh@gmail.com"
    },
    role: "US Market Quant Researcher & Trader",
    bio: "Being an active US market trader, I specialize in US Equities & Options, combining systematic modeling with discretionary execution to capture alpha from momentum and catalyst-derived inefficiencies. I analyze the markets daily and publish proprietary research on Prism Lake. Seeking Quantitative Research and Trading roles.",
    sub_bio: "Computer Science Major | Prism Lake Founder | L'Oréal Data Intern",
    metrics: [
      { label: "Education", value: "Computer Science" },
      { label: "In the Market Experience", value: "5 Years" },
      { label: "Track Record (Last 5 Years)", value: "RM600 → 6-Figs", trend: "up" },
      { label: "Strategy", value: "Momentum/Catalyst" }
    ]
  },
  
  // SECTION: EXPERIENCE (The Trade Ledger)
  positions: {
    title: "Trade Ledger (Experience)",
    icon: Activity,
    data: [
      {
        company: "Prism Lake",
        ticker: "P&L",
        role: "Founder & Quant Researcher",
        status: "OPEN",
        entry: "2025",
        exit: "Present",
        progress: 50,
        strategy: "Quantitative & Discretionary Market Research", 
        badges: [
          { text: "Active", icon: "activity", color: "green" }
        ],
        thesis: "Founded Malaysia's pioneering quantitative research and proprietary trading firm, specializing in US Equities & Derivatives, with over $30K USD in notional capital deployed across systematic and discretionary strategies.",
        roi: [
          "Active daily trading involving analyzing price action, refining algos, and managing risk across global markets.",
          "Developed pricing strategies to evaluate sentiment, catalyst and global macro-driven opportunities in US equities and options.",
          "Developed multi-factor momentum models with backtested Sharpe > 1.8.",
          "Built real-time market scanning infrastructure using Python and WebSocket APIs through Interactive Brokers.",
          "Actively publish technical market research and articles on quantitative trading strategies, market analysis, and proprietary insights through Prism Lake Intelligence.",
        ],
        skills: ["Startup", "Python", "Quantitative Research", "Risk Management", "Market Analysis", "Equities & Derivatives"],
        insights: ["Built Prism Lake with the goal to build a localized firm operating with the sophistication of a global hedge fund, and to be at the forefront of quantitative research across global markets. Based in Malaysia."],
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
        thesis: "Selected from 1000+ applicants nationwide (2 positions) to apply systematic analytical thinking to consumer data patterns at the world's leading beauty company by market dominance.",
        roi: [
          "Market Basket Analysis: Developing recommendation algorithms based on pattern recognition in purchase behavior (analogous to factor discovery in quant finance).",
          "ETL & Data Pipeline Management: Ensuring data quality and automation—critical skills for quantitative research infrastructure.",
          "Enterprise Experience: Understanding how large organizations leverage data for decision-making while maintaining active trading operation."
        ],
        skills: ["Data Analysis", "ETL Pipelines", "Predictive Modeling"],
        insights: ["Selected from 1000+ applicants after 5 interview rounds for pioneering data analytics team."],
        link: "https://www.loreal.com/en/our-global-brands-portfolio/"
      },
      {
        company: "Independent Trading Desk",
        ticker: "PROP.DESK",
        role: "Discretionary Trader",
        status: "EVOLVED",
        entry: "2020",
        exit: "Present",
        progress: 100,
        strategy: "Discretionary Momentum Trading",
        badges: [
          { text: "5Y Track Record", icon: "calendar", color: "gray" }
        ],
        thesis: "Started with RM600 seed capital. Traded momentum and volatility market microstructure during major market catalysts (COVID, inflation, rate cycles). Evolved from discretionary analysis to Python-based systematic strategies, leading to Prism Lake.",
        roi: [
          "Scaled RM600 → 6-figures (MYR) through disciplined risk management and catalyst-driven entries.",
          "Automated trade journaling and performance analysis using Python.",
          "Developed Python workflows for market analysis, including a sentiment analysis aggregator across 100+ sources daily.",
          "Maintained Sharpe Ratio > 1.5 across multiple market regimes and volatility cycles."
        ],
        skills: ["US Equity Analysis", "Discretionary Trading", "Sentiment Analysis", "Momentum Trading","Python Automation"],
        insights: ["Successfully funding university tuition fees (RM60k) through trading portfolio since 2023."]
      }
    ]
  },

  // SECTION: PROJECTS (Breakout Setups)
  breakout: {
    title: "Breakouts (Projects)",
    icon: TrendingUp,
    data: [
      {
        title: "Prism Lake",
        description: "Malaysia's pioneering quantitative research and proprietary trading firm, specializing in US Equities & Derivatives.",
        link: "https://prismlake.com",
        tags: ["Python", "Next.js", "Real-time Data", "Systematic Trading"]
      },
      {
        title: "Prism Lake Intelligence",
        description: "Prism Lake's proprietary market research publication platform, delivering in-depth market analysis and trading insights on US markets.",
        link: "https://prismlake.com/research",
        tags: ["Research", "Quantitative Analysis", "Market Insights", "Publications"]
      },
      {
        title: "Portfolio.v4",
        description: "This website. My fourth iteration on my personal portfolio.",
        link: "https://github.com/darrancebeh/darrance",
        tags: ["Next.js", "Tailwind v4", "OKLCH"]
      },
      {
        title: "University Final Year Project",
        description: "Advanced quantitative analysis tool combining multiple data modalities for financial forecasting and risk assessment.",
        tags: ["Python", "Machine Learning", "Quantitative Finance", "Research"]
      }
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
        tools: ["Python", "Pandas", "NumPy", ".ipynb", "Backtrader"]
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
        tools: ["Git", "Docker", "Linux", "Cloud Deployment", "AWS/GCP"]
      }
    ]
  },

  // NEW SECTION: PHILOSOPHY
  thesis: {
    title: "Trading Philosophy",
    icon: BookOpen,
    researchLink: "https://prismlake.com/research",
    blogStats: {
      articlesCount: 12,
      latestUpdate: "December 2024"
    },
    featuredArticle: {
      title: "The Structural Decoupling of Price and Value",
      subtitle: "The structural transition from value-driven markets to an ecosystem dominated by inelastic flows and algorithmic liquidity.",
      excerpt: "In modern markets, price discovery has decoupled from fundamental value. Algorithmic liquidity and inelastic flows now dominate, creating opportunities for systematic traders who understand this structural shift.",
      link: "https://www.prismlake.com/research/the-structural-decoupling-of-price-and-value",
      label: "Genesis Paper",
      readTime: "10-15 min read",
      isNew: true,
      publishedDate: "December 2024"
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
    status: "ACTIVE TRADER & INVESTOR | OPEN TO QUANT / TRADING OPPORTUNITIES",
    bio: "Active trader at Prism Lake, seeking roles in quantitative research, trading, data science, and related fields. Open to summer 2026 and full-time 2027 opportunities.",
    email: "darrancebeh@gmail.com",
    github: "https://github.com/darrancebeh",
    linkedin: "https://linkedin.com/in/darrancebeh",
    cta: "Discuss Opportunities"
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