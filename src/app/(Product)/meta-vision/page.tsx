import Image from "next/image";
import MetaVisionFeaturesSwiper from "@/components/swiper/MetaVisionFeaturesSwiper";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
export default function MetaVisionPage() {
  return (
    <div className="py-8 flex flex-col items-center gap-12">
      {/* Hero/소개 */}
      <section className=" px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-8">
            <div className="flex-1 flex justify-center">
              <Image
                src="/Product/MetaVision/metavision.png"
                alt="Meta Vision 대표 이미지"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Product/MetaVision/logo.svg"
                alt="Meta Vision"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-base text-center max-w-4xl">
              <span className="text-[#339dff]">메타비전(meta vision)</span>은
              인공지능(머신러닝, 딥러닝)과 포토그래메트리기술을 기반으로
              카메라로 촬영된 다수의 사진 이미지를 활용하여 소프트웨어적으로 3D
              모델링 활용하여 소프트웨어적으로 3D 모델링 데이터를 추출하고
              결과의 정확도(정밀도)와 사용자 편의성을 향상시키기 위해 개발한
              혁신적인 3D 모델 복원 소프트웨어입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주요 특징 */}
      <section className="pb-12 pt-6 flex flex-col items-center bg-[#012B52] md:bg-transparent px-5 w-full">
        <h2 className="text-xl md:text-2xl mb-6 text-white md:text-blue-300 flex items-center gap-2">
          메타비전 주요특징
        </h2>
        <MetaVisionFeaturesSwiper />
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
                src="/Product/MetaVision/image_1.png"
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
              src="/Product/MetaVision/arrow.svg"
              alt="arrow"
              width={50}
              height={50}
              className="object-contain rounded-lg"
            />
          </div>
          {/* 2단계 */}
          <div className=" flex flex-col items-center">
            <div className="relative w-full h-80">
              <Image
                src="/Product/MetaVision/image_2.png"
                alt="2단계 사진 업로드"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">2단계 사진 업로드</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              자동 복원을 위해 메타비전 3D에 사진을 업로드합니다.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/Product/MetaVision/arrow.svg"
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
                src="/Product/MetaVision/image_3.png"
                alt="3단계 완료 확인"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">3단계 완료 확인</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              메타비전 3D S/W를 통해 완성된 3D 모델링을 최종적으로 확인합니다.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/Product/MetaVision/arrow.svg"
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
                src="/Product/MetaVision/image_4.png"
                alt="4단계 3D 모델 업로드"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">4단계 3D 모델 업로드</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              realmeta 웹사이트에 접속해서 공유합니다.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center bg-[#012B52] text-white px-4 py-2 rounded-md gap-2">
        <Link href="https://realmeta3d.com" className="">
          메타비전 바로가기
        </Link>
        <ArrowRightIcon className="w-4 h-4" />
      </div>

      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          메타비전 활용 분야
        </h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col items-center ">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/MetaVision/meta1.png"
                alt="쇼핑"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold">쇼핑</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/MetaVision/meta2.png"
                alt="건축/건설"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold">
                건축/건설
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/MetaVision/meta3.png"
                alt="GIS/시설관리"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold">
                GIS/시설관리
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center w-full min-h-64 h-full mb-4">
              <Image
                src="/Product/MetaVision/meta4.png"
                alt="박물관/전시/미술"
                width={840}
                height={840}
                className="object-fit"
              />
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold">
                박물관/전시/미술
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
