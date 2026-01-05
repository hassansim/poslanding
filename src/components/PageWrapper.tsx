import { Header } from "@/sections/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";
import { FloatingButton } from "@/components/FloatingButton";

export const PageWrapper = () => {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-[1000px] overflow-hidden">
      <Header />
      <Main />
      <Footer />
      <FloatingButton />
    </div>
  );
};
