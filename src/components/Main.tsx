import { HeroSection } from "@/sections/HeroSection/components";
import { FeaturesSection } from "@/sections/FeaturesSection/components";
import { PartnersSection } from "@/sections/PartnersSection/components";
import { BenefitsSection } from "@/sections/BenefitsSection/components";
import { EquipmentSection } from "@/sections/EquipmentSection/components";
import { TestimonialsSection } from "@/sections/TestimonialsSection/components";
import { FAQSection } from "@/sections/FAQSection/components";
import { ContactSection } from "@/sections/ContactSection/components";

export const Main = () => {
  return (
    <main className="box-border caret-transparent grow">
      <HeroSection />
      <FeaturesSection />
      <PartnersSection />
      <BenefitsSection />
      <EquipmentSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
};
