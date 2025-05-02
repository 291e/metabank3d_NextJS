export default function FeaturesSection() {
  return (
    <section id="features" className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-[1000px] mx-auto">
          <video
            src="/Main/bogofit.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
