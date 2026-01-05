import { FooterGrid } from "@/sections/Footer/components/FooterGrid";
import { FooterDivider } from "@/sections/Footer/components/FooterDivider";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 py-16 md:px-8">
      <FooterGrid />
      <FooterDivider />
      <FooterBottom />
    </div>
  );
};
