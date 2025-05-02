import HeroSection from "@/components/section/HeroSection";
import FeaturesSection from "@/components/section/FeaturesSection";
import ServicesSection from "@/components/section/ServicesSection";
import ContactSection from "@/components/section/ContactSection";
import KioskSection from "@/components/section/KioskSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 메인 컨텐츠 */}
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <KioskSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}
