import { Hero } from "@/components/sections/hero";
import { Positions } from "@/components/sections/positions";
import { Breakout } from "@/components/sections/breakout";
import { Alpha } from "@/components/sections/alpha";
import { Thesis } from "@/components/sections/thesis"; // Import new section
import { Liquidity } from "@/components/sections/liquidity";

export default function Portfolio() {
  return (
    <div className="min-h-screen pb-20">
      <Hero />
      <Positions />
      <Thesis /> {/* Added here */}
      <Breakout />
      <Alpha />
      <Liquidity />
    </div>
  );
}