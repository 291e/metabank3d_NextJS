import Image from "next/image";
import MetaActionFeaturesSwiper from "@/components/swiper/MetaActionFeaturesSwiper";

export default function MetaActionPage() {
  return (
    <div className="py-8 flex flex-col items-center gap-12">
      {/* Hero/소개 */}
      <section className="p-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/Product/MetaAction/logo.svg"
                alt="Meta Action"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-base text-center max-w-4xl">
              <span className="text-[#339dff]">메타액션(meta action)</span>은
              라이다 센서 기반의 동작인식 기술이나 카메라 기반의 영상인식 기술을
              활용하여 사용자의 몸이나 손동작을 통해 창의적인 영상 등을 구현하는
              인터랙션 콘텐츠입니다.
            </p>
          </div>
          <div className="relative w-full h-80">
            <Image
              src="/Product/MetaAction/metaAction.png"
              alt="Meta Action"
              fill
              className="object-contain rounded"
            />
          </div>
        </div>
      </section>

      {/* 주요 특징 */}
      <section className="pb-12 pt-6 flex flex-col items-center bg-[#F6F6F6] md:bg-transparent px-5 w-full">
        <h2 className="text-xl md:text-2xl mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          메타액션 주요특징
        </h2>
        <MetaActionFeaturesSwiper />
      </section>

      {/* 활용 분야 */}
      <section className="mb-12 flex flex-col items-center p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          메타비전 활용 분야
        </h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col items-center ">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/MetaAction/use_1.png"
                alt="쇼핑"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/MetaAction/use_2.png"
                alt="건축/건설"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/MetaAction/use_3.png"
                alt="GIS/시설관리"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
