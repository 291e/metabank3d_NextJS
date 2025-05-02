import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="py-8 md:py-12 z-10 relative bg-white">
      <div className=" mx-auto flex flex-col items-center justify-center gap-10">
        {/* image_1.png */}
        <div className="relative w-full max-w-[668px] mx-auto mb-8">
          <Image
            src="/Section3/image_1.png"
            alt="MetaBank3D 문의 페이지 1"
            width={1000}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Section3.png - 전체 너비 */}
        <div className="relative w-full mb-8">
          <Image
            src="/Section3/Section3.png"
            alt="MetaBank3D 문의 페이지 2"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* image_2.png */}
        <div className="relative w-full max-w-[668px] mx-auto mb-8">
          <Image
            src="/Section3/image_2.png"
            alt="MetaBank3D 문의 페이지 3"
            width={1000}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* image_3.png */}
        <div className="relative w-full max-w-[668px] mx-auto mb-8">
          <Image
            src="/Section3/image_3.png"
            alt="MetaBank3D 문의 페이지 4"
            width={1000}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* image_4.png */}
        <div className="relative w-full max-w-[450px] mx-auto">
          <Image
            src="/Section3/image_4.png"
            alt="MetaBank3D 문의 페이지 5"
            width={1000}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
