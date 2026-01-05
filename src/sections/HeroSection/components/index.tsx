import { HeroBackground } from "@/sections/HeroSection/components/HeroBackground";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { HeroDivider } from "@/sections/HeroSection/components/HeroDivider";

export const HeroSection = () => {
  return (
    <section className="relative box-border caret-transparent overflow-hidden pt-24 pb-10 md:pt-28">
      <HeroBackground />
      <HeroContent />
      <HeroDivider />
    </section>
  );
};
