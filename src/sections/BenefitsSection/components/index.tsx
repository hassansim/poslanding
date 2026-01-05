import { BenefitsBackground } from "@/sections/BenefitsSection/components/BenefitsBackground";
import { BenefitsContent } from "@/sections/BenefitsSection/components/BenefitsContent";

export const BenefitsSection = () => {
  return (
    <section className="box-border caret-transparent">
      <BenefitsBackground variant="h-40 w-40 left-10 top-20" />
      <BenefitsBackground variant="h-60 w-60 right-10 bottom-10" />
      <BenefitsContent />
    </section>
  );
};
