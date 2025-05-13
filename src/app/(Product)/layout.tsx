import HeroSection from "@/components/section/HeroSection";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      {children}
    </div>
  );
}
