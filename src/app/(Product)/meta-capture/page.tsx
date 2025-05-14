import Image from "next/image";

export default function MetaCapturePage() {
  return (
    <div className="py-8 flex flex-col items-center gap-12">
      {/* Hero/소개 */}
      <section className="px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/Product/MetaCapture/logo.svg"
                alt="Meta Capture"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-base text-center max-w-4xl">
              <span className="text-[#339dff]">메타캡쳐(meta capture)</span>는
              포토그래메트리 기술을 기반으로 3D 모델링 데이터를 복원하기 위해
              데이터를 복원하기 위해 인체 전신을 촬영하기 위해 개발한 전신 인체
              촬영용 3D 포토 스캐너입니다.
            </p>
          </div>
          <div className="relative w-full h-80">
            <Image
              src="/Product/MetaCapture/metaCapture.png"
              alt="Meta Capture"
              fill
              className="object-contain rounded"
            />
          </div>
        </div>
      </section>

      {/* 활용 분야 */}
      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          메타캡쳐 활용 분야
        </h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col items-center ">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/MetaCapture/use_1.png"
                alt="쇼핑"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold">
                인체/ 패션몰
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/MetaCapture/use_2.png"
                alt="건축/건설"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold">
                의류/ 패션쇼
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/MetaCapture/use_3.png"
                alt="GIS/시설관리"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold">
                전통 의류
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
