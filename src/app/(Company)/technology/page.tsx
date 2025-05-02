"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TechnologyPage() {
  return (
    <div>
      {/* 보유기술개요 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                보유기술개요
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                ㈜메타뱅크는 딥러닝과 포토그래메트리 기반 소프트웨어 및 하드웨어
                기술과 함께 기존의 선진기술과 차별화되는 혁신적인 360 모델과 3D
                모델 복원 및 솔루션 기술을 보유하고 있습니다.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                slidesPerView={1}
                loop={false}
                className="rounded-lg shadow-lg w-full max-w-[400px] sm:max-w-[500px] px-4"
              >
                {[1, 2, 3, 4].map((num) => (
                  <SwiperSlide key={num}>
                    <div
                      className="relative w-full h-[220px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden flex items-center justify-center bg-white dark:bg-gray-900"
                      style={{ minWidth: 0, minHeight: 0 }}
                    >
                      <Image
                        src={`/Main/Technology/${num}.png`}
                        alt={`보유기술 이미지 ${num}`}
                        fill
                        className="object-contain"
                        priority={num === 1}
                        sizes="100vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* 보유기술소개 섹션 */}
      <section className="py-10 bg-[#012b52] dark:bg-gray-800">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-2xl md:text-3xl font-bold  mb-8">보유기술소개</h2>
          <div className="space-y-8">
            <p className="text-base md:text-lg ">
              ㈜메타뱅크는 인공지능과 포토그래메트리기반 소프트웨어 및 하드웨어
              기술과 함께 기존의 선진기술과 차별화되는 혁신적인 360 모델과 3D
              모델 복원 및 솔루션 기술을 보유하고 있습니다.
            </p>
            <ul className="space-y-2 text-red-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                인공지능, 딥러닝과 포토그래메트리 기반 360 모델과 3D 모델 복원
                소프트웨어 및 하드웨어 기술
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                3D 모델 복원 기술을 활용한 3D 모델링 데이터 공유 플랫폼 기술
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                3D 모델 복원 기술 기반의 사실적인 메타버스 플랫폼 기술
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                카메라 및 라이다 센서 기반 인터랙션 콘텐츠 기술
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 특허 현황 섹션 */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[200px]">
            <Image
              src="/Main/Technology/auth.png"
              alt="특허 현황"
              fill
              className="object-contain"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="space-y-2">
                <div className="text-blue-600 dark:text-blue-400 font-semibold">
                  2023.11.02
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    특허출원 3차원 스캐닝 장치
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    (10-2023-0150121)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="space-y-2">
                <div className="text-blue-600 dark:text-blue-400 font-semibold">
                  2023.06.30
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    특허출원 투명 물체의 3D 복원 방법 및 그 장치
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    (10-2023-0084923)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="space-y-2">
                <div className="text-blue-600 dark:text-blue-400 font-semibold">
                  2022.11.30
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    특허출원 3차원 객체 표면 복원 방법 및 그 장치
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    (10-2022-0164718)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="space-y-2">
                <div className="text-blue-600 dark:text-blue-400 font-semibold">
                  2022.05.20
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    특허등록 RGBD 센서를 이용한 3D 모델 복원 방법
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    (10-2401831)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="space-y-2">
                <div className="text-blue-600 dark:text-blue-400 font-semibold">
                  2022.01.24
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    특허출원 딥러닝 기반 단일 비디오 실시간 3D 모델 복원 방법
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    (10-2022-0009916)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="space-y-2">
                <div className="text-blue-600 dark:text-blue-400 font-semibold">
                  2022.01.24
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    특허출원 딥러닝 기반 단일 이미지 3D 모델 복원 방법
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    (10-2022-0009907)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메타비전 핵심 기술 섹션 */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            메타비전 핵심 기술
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/Main/Technology/tech1.png"
                  alt="평면 피팅 기술"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  평면 피팅(plane fitting) 기술
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  메타비전(meta vision)은 딥러닝과 포토그래메트리 기술을
                  기반으로 카메라로 촬영된 다수의 사진 이미지를 활용하여
                  소프트웨어적으로 3D 모델링 데이터를 복원하고 결과의
                  정확도(정밀도)와 사용자 편의성을 향상시키기 위해 개발한
                  혁신적인 3D 모델 복원 소프트웨어입니다.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/Main/Technology/tech2.png"
                  alt="투명 재질 복원 기술"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  투명 재질 복원 기술
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  기존의 포토그래메트리 기술은 반사와 굴절로 인한 복잡한 빛의
                  경로로 인해 투명한 오브젝트를 3D 모델로 복원하는 것은 난제
                  기술입니다. 메타비전은 투명 물체의 3D 모델 복원을 위해 샘플용
                  쉐이프와 대응되는 투명 쉐이프의 형상을 시각적 견본으로
                  초기화합니다. 또한 환경맵과 데이터셋으로부터 초기화된 투명
                  쉐이프의 법선을 복원하는 단계와 딥러닝을 이용하여 포인트
                  클라우드를 복원하는 방법을 적용하였습니다.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/Main/Technology/tech3.png"
                  alt="자동 배경제거 기술"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  자동 배경제거 기술
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  메타비전(meta vision)은 정확한 모델 구현을 위해 자동으로
                  배경을 제거하여 최상의 모델링 파일을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
