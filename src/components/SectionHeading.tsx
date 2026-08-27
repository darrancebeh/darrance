import Reveal from "./Reveal";

type Props = {
  index: string;
  title: string;
  lede?: string;
  accent?: string;
};

export default function SectionHeading({ index, title, lede, accent = "text-accent" }: Props) {
  return (
    <div className="rule pt-6">
      <div className="grid gap-6 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-4">
          <div className="flex items-baseline gap-4">
            <span className={`font-mono text-xs tracking-[0.2em] ${accent}`}>{index}</span>
            <h2 className="display-md">{title}</h2>
          </div>
        </Reveal>
        {lede ? (
          <Reveal delay={90} className="md:col-span-7 md:col-start-6">
            <p className="max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
              {lede}
            </p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
