import { Hero } from "@/components/sections/hero";
import { Positions } from "@/components/sections/positions";
import { Breakout } from "@/components/sections/breakout";
import { Alpha } from "@/components/sections/alpha";
import { TechStack } from "@/components/sections/tech-stack";
import { Thesis } from "@/components/sections/thesis";
import { Liquidity } from "@/components/sections/liquidity";
import { Footer } from "@/components/sections/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Positions />
      <Thesis />
      <Breakout />
      <Alpha />
      <TechStack />
      <Liquidity />
      <Footer />
    </div>
  );
}