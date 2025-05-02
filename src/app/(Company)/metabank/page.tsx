"use client";

import { Sparkles, TrendingUp, Globe } from "lucide-react";
import Image from "next/image";

const historyData = [
  {
    year: "2024",
    image: "/Main/Metabank/image_1.jfif",
    position: "right",
    items: [
      "02월 대한민국 산업대상 K-R&D 대상 수상",
      "02월 ISO 9001 인증 획득",
      "01월 미국라스베거스 2024 CES 참가",
    ],
  },
  {
    year: "2023",
    image: "/Main/Metabank/image_2.png",
    position: "left",
    items: [
      "08월 충남대학교 창업지원단 2023년 지역기술창업육성 지원사업 선정",
      "07월 2023 대덕특구 액셀러레이팅 지원사업 선정",
      "07월 한남대학교 창업보육센터 2023년 공공기술 실용화 지원사업 선정",
      "07월 대전정보문화산업진흥원 유니:콘프로토타입 제작 지원사업 선정",
      "06월 한국인정기구(KOLAS)기술인증 획득",
      "04월 대덕연구개발특구 연구소기업 등록",
      "03월 한남대학교 기술지주회사 자회사 편입",
    ],
  },
  {
    year: "2022",
    image: "/Main/Metabank/image_3.png",
    position: "right",
    items: [
      "11월 한국정보통신기술협회(TTA)기술인증 획득",
      "09월 대전창조경제혁신센터 대전스타트업타운 디브릿지 지원사업 선정",
      "09월 창업진흥원실험실 특화 초기창업패키지사업 선정",
      "07월 중소벤처기업부 창업성장기술개발 사업디딤돌(첫걸음) 선정",
      "05월 중소벤처기업부 산학R&D 예비연구 선정",
      "02월 ㈜메타뱅크 기업부설연구소 설립",
    ],
  },
  {
    year: "2021",
    image: "/Main/Metabank/image_4.png",
    position: "left",
    items: [
      "12월 ㈜메타뱅크 법인설립",
      "10월 한남대학교 교수 실험실 창업 허가",
      "06월 과학기술정보통신부주관 실험실특화형 창업선도대학 창업유망기술 선정",
      "02월 3D모델복원방법관련특허등록및출원완료(총11건)",
    ],
  },
];

function HistoryItem({
  year,
  image,
  position,
  items,
}: (typeof historyData)[0]) {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#012B52] rounded-full" />

      {/* 왼쪽 컨텐츠 */}
      <div
        className={`w-1/2 ${
          position === "right" ? "pr-8" : "flex justify-end"
        }`}
      >
        {position === "left" ? (
          <div className="relative w-[200px] md:w-[300px] h-[140px] md:h-[200px] rounded-lg overflow-hidden -translate-x-8">
            <Image
              src={image}
              alt={`${year}년 메타뱅크`}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {year}년
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 오른쪽 컨텐츠 */}
      <div
        className={`w-1/2 ${
          position === "right" ? "flex justify-start" : "pl-8"
        }`}
      >
        {position === "right" ? (
          <div className="relative w-[200px] md:w-[300px] h-[140px] md:h-[200px] rounded-lg overflow-hidden translate-x-8">
            <Image
              src={image}
              alt={`${year}년 메타뱅크`}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {year}년
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MetabankPage() {
  return (
    <div>
      {/* Company Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/Layout/logo-blue.svg"
                alt="메타뱅크 로고"
                width={150}
                height={50}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                기업개요
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                ㈜메타뱅크는 사실적인 가상 환경이나 메타버스 환경 구축을 위해
                인공지능(Artificial Intelligence)기술과
                포토그래메트리(Photogrammetry) 기술을 활용하여 카메라로 촬영된
                사진 이미지들을 2D 또는 3D 데이터로 추출하는 소프트웨어 기술과
                관련 솔루션을 개발하는 기업입니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    설립일
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    2021년 12월
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    사업분야
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    3D 스캔, 메타버스 솔루션
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Goals Section */}
      <section className="py-20 bg-[#012B52] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/Layout/logo-white.svg"
                alt="메타뱅크 로고"
                width={150}
                height={50}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">사업목표</h2>
              <p className="text-lg text-gray-200">
                ㈜메타뱅크는 자체 개발된 메타 360(meta360) S/W와 메타비전(meta
                vision) S/W를 기반으로 리얼메타(real meta) 플랫폼, 메타파노(meta
                pano) 메타버스 콘텐츠, 메타액션(meta action) 인터랙션 콘텐츠
                등의 제품군을 통해 전 세계 사용자들이 쉽고 저렴하게 고품질의 2D
                및3D 데이터를 생성하고 자유롭게 플랫폼을 통해 데이터를 공유하고
                판매할 수 있도록 하는 것을 그 목표로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              기업가치
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              ㈜메타뱅크의 핵심적인 기업가치
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                최상의 리얼리티 구현
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                고품질의 2D 및 3D 데이터 생성
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                저비용 고품질 원스톱 서비스
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                사용자 친화적인 플랫폼 제공
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                양질의 데이터 전세계 공유
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                글로벌 데이터 플랫폼 구축
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            회사 연혁
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-12">
              {historyData.map((item, index) => (
                <HistoryItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
