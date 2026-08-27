# darrancebeh.com

Personal portfolio site — the fifth iteration.

Built with **Next.js 16** (App Router, Turbopack), **TypeScript**, and **Tailwind CSS v4**.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

> Note: the build fetches Google Fonts at build time via `next/font/google`.
> It needs outbound access to `fonts.googleapis.com` — fine on Vercel and on
> any normal dev machine.

## Deploying to Vercel

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new).
No environment variables, no build config — the defaults are correct.

Afterwards, point `darrancebeh.com` at the project under **Settings → Domains**.

## Editing content

**Everything you'd want to change lives in one file: [`src/content/profile.ts`](src/content/profile.ts).**
No JSX editing required to update your CV.

| Export | What it drives |
| --- | --- |
| `profile` | Name, headline chip, tagline, the "Who I am" paragraphs, contact links |
| `statement` | The narrative band under the hero — an array of paragraphs; the first is set large |
| `workedWith` | The logo strip at the bottom of that band. See `public/logos/README.md` for how to add real logo files |
| `professional` | PwC, Citi, L'Oréal — the "Professional" section (02) |
| `ventures` | Prism Lake, Waveform Capital, the Discord communities — the "Things I built" section (05) |
| `leadership` | Clubs and societies — the "Leading & convincing" section (03) |
| `projects` | The project cards. Optional `href` links the title; optional `links: [{ label, href }]` renders a row of labelled links under the bullets |
| `bio` | The "Beyond the markets" essay, personal bests, off-the-clock list, and links |
| `skills` | Grouped skill chips |
| `education` | The standalone Education section (02). `grade` renders right-aligned; `detail` (one line of prose) and `points` (bullets) are both optional |
| `languages`, `awards`, `certifications`, `facts` | Sidebar blocks |

Each experience entry takes an optional `href` (links the org name) and `links: [{ label, href }]`
(a row of labelled links above the tags), plus its organization's brand color:

- `color` — the brand hex. Drives the hover bar on the left of the entry and the tag borders.
- `colorInk` — optional. A lightened variant used for the role line and bullets, since several
  brand colours (Prism Lake's `#1B17FF`, Citi's `#056DAE`, PwC's `#D04A02`) fall below readable
  contrast on the near-black background. Omit it and `color` is used for everything.

Current mapping: PwC `#D04A02` · Citi `#056DAE` · L'Oréal `#D4B25F` · Sunway entities `#C8102E` ·
GDGoC `#4285F4` · Prism Lake `#1B17FF` · Waveform `#22C7D6` · VALORANT/Coffee Shop `#FF4655`.

To add a new section, drop a new array in `profile.ts` and render it in
`src/app/page.tsx` with `<SectionHeading />` + `<ExperienceList />`.

## Design system

Tokens are defined in `src/app/globals.css` under `@theme`:

- `--color-ink` / `--color-ink-2` / `--color-ink-3` — background layers
- `--color-bone` — primary text
- `--color-lime` / `--color-violet` / `--color-amber` — accents
- Fonts: Bricolage Grotesque (display), Inter (body), JetBrains Mono (labels),
  Instrument Serif (italic pull-quotes)

Custom utilities: `display-xl`, `display-lg`, `display-md`, `eyebrow`, `rule`.
Effects: `.grain`, `.reveal` (scroll-in), `.marquee`, `.grid-lines`,
`.text-outline`, `.link-line`. All motion respects
`prefers-reduced-motion: reduce`.

## Structure

```
src/
  app/
    layout.tsx             fonts + metadata
    page.tsx               section composition + JSON-LD
    globals.css            design tokens and utilities
    opengraph-image.tsx    generated 1200×630 social card
    sitemap.ts, robots.ts
  components/              Hero, Nav, Metrics, About, ExperienceList, ...
  content/profile.ts       ← all copy lives here
```
