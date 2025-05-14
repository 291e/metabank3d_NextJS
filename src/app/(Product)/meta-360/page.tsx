import Image from "next/image";
import Meta360FeaturesSwiper from "@/components/swiper/Meta360FeaturesSwiper";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
export default function Meta360Page() {
  return (
    <div className="py-8 flex flex-col items-center gap-12">
      {/* Hero/소개 */}
      <section className="px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-8">
            <div className="flex-1 flex justify-center">
              <Image
                src="/Product/Meta360/meta360.png"
                alt="Meta 360 대표 이미지"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Product/Meta360/logo.svg"
                alt="Meta 360"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-base text-center max-w-4xl">
              <span className="text-[#FF5454]">메타 360(meta 360)</span>은
              온라인(가상/메타버스 환경) 쇼핑몰에 상품을 시각화 하기 위해 딥
              러닝 기술을 기반으로 이미지들을 자동 배경 제거하고 GIF
              애니메이션과 제거하고 GIF 애니메이션과 HTML 기반의 360도 회전
              인터랙션을 쉽고 빠르게 제작할 수 있도록 지원하는 소프트웨어 및
              솔루션입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주요 특징 */}
      <section className="pb-12 pt-6 flex flex-col items-center bg-[#012B52] md:bg-transparent px-5 w-full">
        <h2 className="text-xl md:text-2xl mb-6 text-white md:text-red-300 flex items-center gap-2">
          메타360 주요특징
        </h2>
        <Meta360FeaturesSwiper />
      </section>

      {/* 3D 모델링 프로세스 */}
      <section className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          3D 모델링 프로세스
        </h2>
        <div className="flex flex-col gap-8">
          {/* 1단계 */}
          <div className=" flex flex-col items-center">
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/Meta360/image_1.png"
                alt="1단계 모델 캡처"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">1단계 모델 캡처</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              3D 모델링을 위한 다각도 촬영
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/Product/Meta360/arrow.png"
              alt="arrow"
              width={50}
              height={50}
              className="object-contain rounded-lg"
            />
          </div>
          {/* 2단계 */}
          <div className=" flex flex-col items-center">
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/Meta360/image_2.png"
                alt="2단계 사진 업로드"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">2단계 사진 업로드</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              메타 360에 사진을 업로드합니다.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/Product/Meta360/arrow.png"
              alt="arrow"
              width={50}
              height={50}
              className="object-contain rounded-lg"
            />
          </div>

          {/* 3단계 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/Meta360/image_3.png"
                alt="3단계 완료 확인"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">3단계 완료 확인</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              메타 360 S/W를 통해 완성된 360도 회전 인터랙션을 최종적으로
              확인합니다.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/Product/Meta360/arrow.png"
              alt="arrow"
              width={50}
              height={50}
              className="object-contain rounded-lg"
            />
          </div>

          {/* 4단계 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/Meta360/image_4.png"
                alt="4단계 3D 모델 업로드"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">4단계 3D 모델 업로드</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              Meta360 웹사이트에 접속해서 공유합니다.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center bg-[#FF5454] text-white px-4 py-2 rounded-md gap-2">
        <Link href="https://360.metabank360.com/" className="">
          메타360 바로가기
        </Link>
        <ArrowRightIcon className="w-4 h-4" />
      </div>

      {/* 활용 분야 */}
      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          메타360 활용 분야
        </h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col items-center ">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/Meta360/use_1.png"
                alt="쇼핑"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex justify-center w-full h-full mb-4">
              <Image
                src="/Product/Meta360/arrow.png"
                alt="arrow"
                width={50}
                height={50}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/Meta360/use_2.png"
                alt="건축/건설"
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
