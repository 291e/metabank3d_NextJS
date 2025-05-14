import Image from "next/image";
import MetaEyeFeaturesSwiper from "@/components/swiper/MetaEyeFeaturesSwiper";

export default function MetaEyePage() {
  return (
    <div className=" py-8 flex flex-col items-center gap-12">
      {/* Hero/소개 */}
      <section className="px-4 ">
        <div className="flex flex-col items-center gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/Product/MetaEye/logo.svg"
                alt="Meta Eye"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-base text-center max-w-4xl">
              <span className="text-[#339dff]">메타아이(meta eye)</span>는
              포토그래메트리 기술을 기반으로 3D 모델링 데이터를 복원하기 위해
              전문가뿐만 아니라 일반인 누구나 쉽게 사물을 촬영하기 위해 자체
              촬영하기 위해 자체 개발한 소품 촬영용 회전식 3D 포토 스캐너입니다.
            </p>
          </div>
          <div className="relative w-full h-80">
            <Image
              src="/Product/MetaEye/metaEye.png"
              alt="Meta Eye"
              fill
              className="object-contain rounded"
            />
          </div>
        </div>
      </section>

      {/* 주요 특징 */}
      <section className="pb-12 pt-6 flex flex-col items-center bg-[#F6F6F6] md:bg-transparent px-5 w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          메타아이 주요특징
        </h2>
        <MetaEyeFeaturesSwiper />
      </section>
    </div>
  );
}
