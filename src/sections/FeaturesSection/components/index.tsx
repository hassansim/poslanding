import { FeaturesBackground } from "@/sections/FeaturesSection/components/FeaturesBackground";
import { FeaturesContent } from "@/sections/FeaturesSection/components/FeaturesContent";

export const FeaturesSection = () => {
  return (
    <section className="relative box-border caret-transparent overflow-hidden">
      <FeaturesBackground variant="blur-3xl h-64 w-64 right-0 top-0" />
      <FeaturesBackground variant="blur-2xl h-48 w-48 left-10 bottom-20" />
      <FeaturesContent />
    </section>
  );
};
