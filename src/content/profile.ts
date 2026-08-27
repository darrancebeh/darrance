export const profile = {
  name: "Darrance Beh Heng Shek",
  shortName: "Darrance Beh",
  pronouns: "He/Him",
  location: "Kuala Lumpur, Malaysia",
  email: "darrancebeh@gmail.com",
  phone: "(+60) 12 381 1216",
  linkedin: "https://www.linkedin.com/in/darrancebeh/",
  site: "https://darrancebeh.com",
  headline: "Incoming Strategy & Operations @ PwC SEAC",
  tagline:
    "Data without strategic narrative produces paralysis; intuition without quantitative precision produces unhedged risk. I bridge the gap between technical data science and commercial decision-making, turning data into clear, actionable strategies for leadership.",
  intro: [
    "I'm a Computer Science graduate from Lancaster-Sunway University, majoring in Artificial Intelligence, and I constantly find myself in the intersection of data and strategy.",
    "At L'Oréal Malaysia-Singapore, I worked in the data team and later in Consumer Market Intelligence, reporting directly to the Chief Financial Officer. I engineered an end-to-end ELT pipeline mapping the consumer lifecycle across the MY-SG cluster, and took a consumer market intelligence pipeline — Nielsen and O+O tracker data into PowerBI semantic models — through to production launch. Regional brand and commercial leadership used it to track share gaps and competitor movement.",
    "At Citi, I sat in Data Science and Model Management within Independent Compliance Risk Management — writing the Python behind model monitoring and the documentation that makes a model defensible under review, while mapping the team's operational workflows and automating the manual, high-friction steps out of them.",
    "After I graduate, I will join PwC South East Asia Consulting as an Associate in Strategy & Operations, within the Financial Services practice.",
  ],
} as const;

export const statement = {
  paragraphs: [
    "I have always found that the most consequential decisions live in the tension between rigorous data and human conviction.",
    "It isn't enough to run the analysis and hand off a deck. The real challenge is uncovering where the economic reality of a problem truly lies, pressure-testing the assumptions, and structuring an argument that withstands scrutiny — whether from cross-functional stakeholders or from the boardroom.",
    "I specialize in taking messy, complex systems — market data, operational bottlenecks, strategic trade-offs — and distilling them into clear, actionable mandates that leadership can confidently back.",
  ],
} as const;

export type Logo = {
  name: string;
  /** Path to a logo file in /public/logos (SVG preferred). Omit and the name
   *  renders as a typographic wordmark instead. */
  src?: string;
  /** Rendered height in pixels. Tune per logo — wordmarks and monograms
   *  rarely look balanced at the same height. */
  height?: number;
  /** Set false to keep the logo's own colors instead of forcing it white. */
  mono?: boolean;
  /** Colour of the fallback wordmark. */
  color?: string;
  href?: string;
};

export const workedWithLabel = "Worked with";

export const workedWith: Logo[] = [
  {
    name: "PwC",
    src: "/logos/pwc.png",
    height: 45,
    color: "#F2691E",
    href: "https://www.pwc.com/",
  },
  {
    name: "Citi",
    src: "/logos/citi.svg",
    height: 31,
    color: "#3DA5E0",
    href: "https://www.citigroup.com/",
  },
  {
    name: "L'Oréal",
    src: "/logos/loreal.png",
    height: 22,
    color: "#D4B25F",
    href: "https://www.loreal.com/",
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  location: string;
  kind: "professional" | "venture" | "leadership";
  blurb?: string;
  points: string[];
  tags?: string[];
  href?: string;
  /** Optional labelled links, rendered as a row above the tags. */
  links?: { label: string; href: string }[];
  /** Brand color — used for the hover bar on the left of the entry. */
  color?: string;
  /** Legible variant of `color` for small text and bullets on a dark background.
   *  Defaults to `color`; set it only when the brand color is too dark to read. */
  colorInk?: string;
};

export const professional: Experience[] = [
  {
    org: "PwC South East Asia Consulting",
    role: "Associate, Strategy & Operations — Financial Services",
    period: "Incoming",
    location: "Kuala Lumpur, Malaysia",
    kind: "professional",
    blurb:
      "",
    points: [
    ],
    tags: ["Strategy", "Operations", "Financial Services", "Advisory"],
    color: "#D04A02",
    colorInk: "#F2691E",
  },
  {
    org: "Citi",
    role: "Data Science & Model Management Intern",
    period: "Jul 2026 — Sep 2026",
    location: "Kuala Lumpur, Malaysia",
    kind: "professional",
    blurb:
      "Citi Independent Compliance Risk Management, Kuala Lumpur Citi Service Center.",
    points: [
      "Responsible for individual workstreams end-to-end — from understanding the business context, to designing the solution, to implementing it and handing it off to the team.",
      "Contributed to the model management workstream directly — writing the Python that prepared, reconciled and quality-checked the data behind model monitoring, and producing the recurring outputs the governance cycle runs on.",
      "Mapped the operational workflows the team ran on — how work moved between people, which steps were still being done by hand, and where the friction sat.",
      "Built automation systems for rigid, manual, high-friction steps, taking repeat effort out of recurring processes, leading to time savings and reduced operational risk.",
      "Specifics of the work sit under confidentiality. The above describes scope rather than deliverables.",
    ],
    tags: [
      "Model Management",
      "Data Science",
      "Process Automation",
      "Governance",
      "Python",
    ],
    color: "#056DAE",
    colorInk: "#3DA5E0",
  },
  {
    org: "L'Oréal Malaysia–Singapore",
    role: "Data Science & Analytics Intern → Consumer Market Intelligence Intern",
    period: "Jan 2026 — Jun 2026",
    location: "Kuala Lumpur, Malaysia",
    kind: "professional",
    blurb:
      "Reported directly to the Chief Financial Officer. Rotation from Data Science to Consumer Market Intelligence as part of internship extension offer.",
    points: [
      "Owned an internal Consumer Market Intelligence ETL pipeline through to production launch, integrating Nielsen and O+O market tracker datasets into PowerBI semantic models — giving regional leaders a live read on share gaps, competitor movement, and where brand positioning needed to change.",
      "Engineered an end-to-end ELT pipeline mapping the full consumer lifecycle across the MY-SG cluster, turning millions of transaction touchpoints into the behavioral metrics — basket spend, channel migration, brand-product penetration — that redirected marketing spend and acquisition strategy.",
      "Drove the resolution of ambiguous commercial problems by formulating and testing data-driven hypotheses, deploying statistical analyses and quantitative models that bridge L'Oréal's vast data ecosystem with commercial strategy to inform leadership with high-conviction, time-sensitive insights.",
      "Owned and optimized stakeholder-facing PowerBI workspaces, tracking workspace adoption metrics to systematically decommission and optimize underutilized reports, and present high-level performance insights to leadership.",
    ],
    tags: [
      "Commercial Analytics",
      "Market Intelligence",
      "BigQuery",
      "GCP",
      "PowerBI",
      "SQL",
    ],
    color: "#D4B25F",
  },
];

export const leadership: Experience[] = [
  {
    org: "Sunway Business Investment Society",
    role: "Vice President & Director of Research",
    period: "Dec 2024 — Jun 2026",
    location: "Sunway University",
    kind: "leadership",
    blurb:
      "Co-led a 50-person committee to the university's Most Outstanding Club Award for non-sport clubs. Fun fact: I was the only committee member from the Tech faculty, yet directed the Research team.",
    points: [
      "Founded and directed a team of 16 analysts to form the proprietary research arm of the Sunway Business Investment Society, spearheading market coverage across Global Macro, US & Bursa Malaysia Equities, Options, and Market Microstructure.",
      "Owned strategic direction alongside the President: what the club would be known for, which initiatives got resourced, and which got deprioritized.",
      "Sourced and cultivated strong collaboration ties with external organizations and parties to host and organize high-quality, student-centric events, ensuring mutual satisfaction for both parties.",
      "Ran a standalone equity research workshop at the annual flagship event, and emceed, moderated and spoke at several others.",
    ],
    tags: ["Team Leadership", "Stakeholder Management", "Public Speaking", "Strategy"],
    color: "#C8102E",
    colorInk: "#EF4B63",
  },
  {
    org: "Sunway Blockchain Club",
    role: "Head of Events → Business Development → President",
    period: "Jul 2024 — Nov 2025",
    location: "Sunway University",
    kind: "leadership",
    blurb:
      "Awarded the Uprising Club Award during my tenure as Head of Events. The conditional presidency converted to a full offer for 2025-2026, which I turned down to focus on other ventures.",
    points: [
      "Facilitated club operations in the absence of a sitting President, and set the FY2026 roadmap for brand presence and outreach.",
      "Represented the club at university and global industry events, pitching our mission and events to potential partners and sponsors.",
      "Built the relationships — startups, industry professionals, academic stakeholders — that turned into collaborations, sponsorships and workshops.",
      "Directed subcommittees through end-to-end event delivery.",
    ],
    tags: ["Business Development", "Partnerships", "Operations"],
    color: "#C8102E",
    colorInk: "#EF4B63",
  },
  {
    org: "Google Developer Groups on Campus",
    role: "Director of Public Relations",
    period: "Oct 2024 — Aug 2025",
    location: "Sunway University",
    kind: "leadership",
    points: [
      "Directed the PR team across every public-facing initiative — emceeing, sponsorship sourcing, and collaboration proposals.",
      "Pitched and closed developer-oriented collaborations with external parties.",
    ],
    tags: ["Communications", "Partnerships"],
    color: "#4285F4",
  },
  {
    org: "Sunway iLabs",
    role: "Student Associate",
    period: "Jun 2024 — Jul 2025",
    location: "Sunway University",
    kind: "leadership",
    points: [
      "Championed entrepreneurship on behalf of Sunway iLabs Foundry across the university.",
      "Emceed and hosted the LaunchX 2025 Demo Day - the organization's annual flagship event.",
    ],
    tags: ["Entrepreneurship", "Hosting"],
    color: "#C8102E",
    colorInk: "#EF4B63",
  },
  {
    org: "Sunway Analytics Society",
    role: "Subdirector, Event Management & Secretarial",
    period: "Jan 2024 — Jan 2025",
    location: "Sunway University",
    kind: "leadership",
    points: [
      "Directed event execution from concept to delivery, consistently meeting or exceeding expectations.",
      "Scouted and liaised with external parties to secure event prospects.",
    ],
    tags: ["Event Management", "Communications"],
    color: "#C8102E",
    colorInk: "#EF4B63",
  },
  {
    org: "Sunway Tech Club",
    role: "Management Core Team Member",
    period: "May 2024 — May 2025",
    location: "Sunway University",
    kind: "leadership",
    points: [
      "Directed and hosted the 11th iteration of the club's flagship bonding event, in collaboration with the Sunway Virtual Reality Club.",
      "Managed the club's internal operations and communications, ensuring smooth coordination across teams for successful event execution.",
    ],
    tags: ["Operations", "Hosting"],
    color: "#C8102E",
    colorInk: "#EF4B63",
  },
];

export const ventures: Experience[] = [
  {
    org: "Prism Lake",
    role: "Founder & Quantitative Trader",
    period: "Nov 2024 — Present",
    location: "Kuala Lumpur, Malaysia",
    kind: "venture",
    href: "https://prismlake.com/",
    blurb:
      "A Kuala Lumpur research and trading partnership among friends, working hybrid discretionary-systematic strategies in US equities and derivatives. We do not manage external capital.",
    points: [
      "Directed market research and strategy development for a hybrid discretionary-systematic trading partnership, focusing on US equities and derivatives.",
      "Authored several research articles on market strategy, microstructure, psychology, and news coverage."
    ],
    tags: ["Research Process", "Risk Framework", "Decision-making"],
    color: "#1B17FF",
    colorInk: "#7B78FF",
  },
  {
    org: "Waveform Capital",
    role: "Founder, Chief Investment Officer",
    period: "Nov 2024 — Jul 2025",
    location: "Hybrid",
    kind: "venture",
    blurb:
      "A student-founded organization built to be a serious investment community for the next generation of Malaysian talent. Wound down deliberately once it had outlived the need it was built for.",
    points: [
      "Outreached and built the committee, research process and guided the mission from zero, and recruited the people to run them.",
      "Practice at the thing consulting actually tests: standing up a function that didn't exist, staffing it, and giving it a standard to hold to.",
    ],
    tags: ["Founding", "Governance", "Team Building"],
    color: "#22C7D6",
  },
  {
    org: "Steam Community Market",
    role: "Independent Market Maker",
    period: "2020 — 2023",
    location: "Online",
    kind: "venture",
    href: "https://steamcommunity.com/id/darrancebeh",
    blurb:
      "Three years market-making digital goods on Steam's exchange, starting at fifteen. My first education in spreads, liquidity and incentives, run at a volume that made the lessons unavoidable.",
    points: [
      "Over 60,000 market transactions and 11,000 trades across the period, working bid-ask spread arbitrage and cross-exchange inefficiencies.",
      "A market with no professional participants, no reference pricing and very thin information — which is where I learned to build a view from incomplete data and size it against being wrong.",
      "The foundation for everything I later formalized in equities and derivatives.",
    ],
    links: [
      { label: "Steam profile", href: "https://steamcommunity.com/id/darrancebeh" },
    ],
    tags: ["Market Microstructure", "Arbitrage", "Behavioral Economics"],
    color: "#66C0F4",
  },
  {
    org: "VALORANT Malaysia & The Coffee Shop Discord Servers",
    role: "Founder & Community Manager",
    period: "2020 — 2022",
    location: "Discord",
    kind: "venture",
    blurb:
      "Two communities I solo-founded and built at 16, during the COVID-19 lockdown. VALORANT Malaysia reached 8,000 members in four months and was acquired into Riot Games' official VALORANT Asia server; The Coffee Shop became the fastest-growing MY/SG social server of its era.",
    points: [
      "Identified a gap in the market, twice - and built a solution that successfully scaled to fill it — organically.",
      "Solo-founded and scaled two of the largest online communities of its time, with unprecedented growth and activity during its time.",
      "VALORANT Malaysia reached 8,000 members in four months; The Coffee Shop was one of the most active social servers of its time, with several months of >20,000 messages a day.",
      "VALORANT Malaysia was acquired into Riot Games' official VALORANT Asia server, and The Coffee Shop became the fastest-growing MY/SG social server of its era.",
      "This was my first real lesson in growth, retention and community incentives, entirely on a whim.",
    ],
    tags: ["Community Growth", "Operations", "Team Management"],
    color: "#FF4655",
  },
];

export type Project = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  points: string[];
  tags: string[];
  href?: string;
  links?: { label: string; href: string }[];
  status: string;
};

export const projects: Project[] = [
  {
    title: "GARCH vs LSTM",
    subtitle: "Volatility forecasting under a proxy-robust lens",
    period: "Oct 2025 — Aug 2026",
    status: "Capstone",
    href: "https://garch-vs-lstm-capstone.vercel.app/",
    description:
      "A comparative study of GARCH-family econometric models against LSTM deep learning approaches for forecasting volatility in US equities and ETFs. The real question underneath it: does deep learning actually beat GARCH, or does it only look that way when your volatility proxy is quietly doing the work?",
    points: [
      "Final-year quantitative research and development capstone at Sunway University.",
      "Backtests GARCH, EGARCH and GJR-GARCH specifications against LSTM architectures across equity and ETF universes.",
      "Proxy-robust evaluation design, built specifically to control for the estimator bias that flatters machine learning models in naive comparisons.",
    ],
    tags: ["Python", "Econometrics", "Deep Learning", "Model Validation"],
    links: [{ label: "View the project", href: "https://garch-vs-lstm-capstone.vercel.app/" }],
  },
  {
    title: "The Portfolio",
    subtitle: "This site, and the four before it",
    period: "Dec 2025 — Present",
    status: "Live",
    href: "https://darrancebeh.com",
    description:
      "A personal site I keep rebuilding from scratch — each iteration an excuse to learn a new part of the frontend stack properly rather than superficially.",
    points: [
      "Built with Next.js, TypeScript and Tailwind, deployed on Vercel.",
      "Now in its fifth iteration.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    links: [{ label: "Visit the site", href: "https://darrancebeh.com" }],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Consulting & commercial",
    items: [
      "Commercial Strategy",
      "Business Analytics",
      "Consumer Market Intelligence",
      "Hypothesis-led Problem Solving",
      "Executive Reporting",
      "Model Risk & Governance",
    ],
  },
  {
    label: "Communication & leadership",
    items: [
      "Stakeholder Management",
      "Public Speaking",
      "Persuasion & Negotiation",
      "Team Leadership",
      "Impromptu Speaking",
      "Facilitation",
    ],
  },
  {
    label: "Data & engineering",
    items: ["Python", "SQL", "C++", "ELT / ETL Pipelines", "PowerBI", "TypeScript"],
  },
  {
    label: "Modeling",
    items: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Statistics",
      "Econometrics",
      "LSTM / RNN",
      "Transformers",
    ],
  },
  {
    label: "Platforms",
    items: ["Google Cloud Platform", "BigQuery", "Vercel", "Git"],
  },
];

export const languages = [
  { name: "English", level: "Native" },
  { name: "Mandarin Chinese", level: "Native" },
  { name: "Bahasa Melayu", level: "Professional" },
  { name: "Cantonese", level: "Professional" },
];

export type Education = {
  school: string;
  degree: string;
  grade: string;
  /** Optional single line of prose, rendered above the bullets. */
  detail?: string;
  /** Optional bullets — coursework, thesis, honours, activities. */
  points?: string[];
  period: string;
  location: string;
};

export const education: Education[] = [
  {
    school: "Sunway University",
    degree: "BSc (Hons) Computer Science, Artificial Intelligence",
    grade: "CGPA 3.86 / 4.00",
    detail:
      "Specialization in Big Data & Artificial Intelligence. Dual award with Lancaster University.",
    points: [
      "Awarded the highest quantum of the Jeffrey Cheah Entrance Scholarship, granted on pre-admission academic record.",
      "Final-year Capstone Project: a proxy-robust comparison of GARCH-family econometric models against LSTM deep learning for volatility forecasting in US equities.",
      "Consecutive Dean's List awardee for all semesters.",
    ],
    period: "Sep 2023 — Sep 2026",
    location: "Bandar Sunway, Malaysia",
  },
  {
    school: "Multimedia University",
    degree: "Foundation in Information Technology",
    grade: "CGPA 3.81 / 4.00",
    points: [
      "Consecutive Dean's List awardee for all 3 semesters.",
    ],
    period: "Aug 2022 — Aug 2023",
    location: "Cyberjaya, Malaysia",
  },
];

export type Award = { title: string; issuer: string; date: string; note: string };

export const awards: Award[] = [
  {
    title: "Outstanding All-Rounder Award",
    issuer: "Nestlé Malaysia",
    date: "Nov 2025",
    note: "Top 6 individuals out of more than 1,400 teams in the national Nescafé Youth Entrepreneurs Programme 2025.",
  },
  {
    title: "Jeffrey Cheah Entrance Scholarship",
    issuer: "Sunway University",
    date: "Sep 2023",
    note: "The highest scholarship quantum awarded, given to enrolling freshmen for academic excellence prior to admission.",
  },
  {
    title: "Most Outstanding Club Award",
    issuer: "Sunway University",
    date: "2025/2026",
    note: "Awarded to Sunway Business Investment Society for non-sport clubs during my tenure as Vice President.",
  },
  {
    title: "Uprising Club Award",
    issuer: "Sunway University",
    date: "2024/2025",
    note: "Awarded to Sunway Blockchain Club during my tenure as Head of Events.",
  },
];

export const certifications = [
  { name: "Machine Learning for Data Science Projects", issuer: "IBM", date: "Aug 2026" },
  { name: "AI Fluency for Builders", issuer: "Anthropic", date: "Aug 2026" },
];

export const facts: string[] = [
  "First and only person from my university to secure internships at both Citi and L'Oréal's data team.",
  "Reported directly to a CFO as an intern, with projects run in front of C-suite and director-level stakeholders.",
  "Directed a 17-analyst research team and co-led a 50-person committee to the university's Most Outstanding Club Award.",
  "Former state-level debater and public speaker; I've emceed, moderated or pitched for four different organizations.",
  "Funded my own degree through a portfolio I started at 15 — a useful early lesson that conviction has to survive contact with real money.",
];

export const bio = {
  title: "Beyond the résumé",
  lede: "I have a distinct inability to do things casually.",
  paragraphs: [
    "It started at 15 during the COVID lockdowns. While everyone else was hopping on the Dalgona coffee trend, I found myself trading digital commodities (skins) on the Steam Community Market, completely unaware at the time that I was essentially arbitrage trading. I started my trading journey with just RM600 (which I had to beg my parents to lend me), all in the mission for more allowance money. Five years later, that measly RM600 has compounded into fully paid-for tuition and a comfortable lifestyle for present me.",
    "Since young, I've started viewing the word through the lens of game theory and behavioral economics. I was, and am, obsessed with analyzing and predicting human behavior and irrationality, whether it's in the financial markets, competitive gaming, or social dynamics.",
    "This obsession explains why I treat hobbies like competitive sports. I didn't just play video games, I actually grinded to become a top-nation esports player in a game called Brawlhalla and osu!mania. I didn't just play VALORANT, I built the VALORANT Malaysia Discord until the official VALORANT Asia server absorbed us. I didn't just chat on Discord, I founded 'The Coffee Shop' and 'unintentionally' grew it into the region’s fastest-growing server, breaking growth records just to see if I could.",
    "Even my downtime is associated with competition. I used to be really into Chess (1500 FIDE), I was a KL state-level debater (I love adversarial thinking), a competitive programmer (I type and think fast), and a speedcuber (fast hands). When I’m not literally obsessing over the markets, I’m usually trying to bench press 1.5x my bodyweight (100kg @ 67kg) without passing out. I also love having deep, late-night talks and mock debates about existentialism because if we aren't challenging our priors, are we even learning?",
  ],
  trivia: [
    { label: "3×3 cube PR", value: "12.931s" },
    { label: "2×2 cube PR", value: "5.863s" },
    { label: "Chess", value: "1500 FIDE" },
    { label: "Bench press", value: "100kg @ 67kg" },
  ],
  loves: [
    "Steeps his own cold brews",
    "Strategy games & chess",
    "Hiking & nature",
  ],
  links: [
    { label: "Steam profile", href: "https://steamcommunity.com/id/darrancebeh" },
  ],
} as const;
