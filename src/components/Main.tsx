import { HeroSection } from "@/sections/HeroSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { PartnersSection } from "@/sections/PartnersSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { EquipmentSection } from "@/sections/EquipmentSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FAQSection } from "@/sections/FAQSection";
import { ContactSection } from "@/sections/ContactSection";

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
