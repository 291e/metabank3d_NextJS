import MetaPanoFeaturesSwiper from "@/components/swiper/MetaPanoFeaturesSwiper";
import Image from "next/image";

export default function MetaPanoPage() {
  return (
    <div className="py-8 flex flex-col items-center">
      {/* Hero/소개 */}
      <section className="px-4 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/Product/MetaPano/logo.svg"
                alt="Meta Pano"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base text-center max-w-4xl">
              <span className="text-[#339dff]">메타파노(meta pano)</span>는
              메타비전 S/W를 활용하여 3D 데이터를 생성하고 생성한 모델링
              데이터와 ㈜메타뱅크에서 자체 개발한 3D 웹 뷰어 및 전용 서버를
              활용하여 전세계 사용자들이 메타버스 공간에 입장하여 쇼핑몰이나
              전용 서버를 활용하여 전세계 사용자들이 메타버스 공간에 입장하여
              쇼핑몰이나 박물관, 미술관, 사무 공간과 같은 다양한 실생활 콘텐츠
              및 문화(교육) 체험 서비스를 재미있고 현장감 있게 즐길 수 있는
              사실성이 뛰어난 새로운 개념의 메타버스 콘텐츠 및 플랫폼입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주요 특징 */}
      <section className="pb-12 pt-6 flex flex-col items-center bg-[#F6F6F6] md:bg-transparent px-5 w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          메타파노 주요특징
        </h2>
        <MetaPanoFeaturesSwiper />
      </section>

      {/* 활용 분야 */}
      <section className="py-12 text-white flex flex-col items-center bg-[#202F4E] px-4 mb-12 w-full">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          메타파노 활용 분야 - 쇼핑몰 콘텐츠
        </h2>
        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col items-center ">
            <div className="flex items-center pt-4">
              <span className="text-sm md:text-base text-center max-w-3xl">
                메타파노는 메타비전 소프트웨어를 활용하여 만들어진 3D 모델링
                데이터와 ㈜메타뱅크에서 자체 개발한 3D 웹 뷰어 및 전용 서버를
                활용하여 전 세계 사용자들이 메타버스 공간에 입장할 수 있는
                플랫폼입니다.
              </span>
            </div>
            <div className="relative w-full h-80 md:my-12">
              <Image
                src="/Product/MetaPano/use_2.png"
                alt="쇼핑"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base text-center max-w-3xl">
                이 플랫폼은 쇼핑몰, 박물관, 미술관, 사무 공간 등과 같은 다양한
                실생활 콘텐츠 및 문화 체험 서비스를 제공합니다. 사용자들은 이를
                통해 재미있고 현장감 있게 즐길 수 있으며, 사실성이 뛰어난 새로운
                개념의 메타버스 콘텐츠와 플랫폼을 경험할 수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          메타파노 쇼핑몰 주요특징
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mb-8">
          {[
            "사실적인 3D 쇼핑몰 (백화점)환경 구축",
            "해외유명 쇼핑몰,백화점 등 다양한 테마별 공간(템플릿)",
            "유, 무료3D 상품모델링 서비스 및 등록",
            "쇼핑과 엔터테인먼트 (테마파크,어트랙션,게임 등) 동시 만족",
            "무제한 쇼핑몰(백화점) 확장 가능(m2 당 가격 책정)",
            "지속적인 쇼핑몰(백화점) 관리 시스템(월별 업데이트)",
            "노출 광고비 무료",
            "개인별 상품 NFT 거래 시스템 탑재",
          ].map((feature, i) => (
            <li
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 text-gray-800 dark:text-gray-100 text-sm md:text-base flex items-center justify-center text-center"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* 활용 분야 */}
      <section className="mb-12 flex flex-col items-center p-4 bg-[#F4FAFD] py-12 w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-900  flex items-center gap-2">
          메타파노 활용 분야 - 박물관/전시관
        </h2>
        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col items-center">
            <div className="flex items-center pt-4">
              <span className="text-sm md:text-base text-center max-w-3xl">
                메타버스 박물관 또는 전시관은 유물이나 전시물을 전세계
                사용자들이 메타버스 공간에서 관람하고 개인적 공유와 문화(교육)
                체험이 가능한 서비스를 재미있고 현장감 있게 즐길 수 있는
                사실성이 뛰어난 새로운 개념의 메타버스 플랫폼입니다.
              </span>
            </div>
            <div className="relative w-full h-80">
              <Image
                src="/Product/MetaPano/use_1.png"
                alt="쇼핑"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          메타파노 박물관/전시관 주요특징
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mb-8">
          {[
            "사실적인 3D 전시물 모델링 서비스",
            "유, 무료 3D 전시물 모델링 서비스 및 등록",
            "전시와 교육 체험 에듀테인먼트 동시 만족",
            "무제한 전시장 확장 가능 (m2 당 가격 책정)",
            "노출 광고비 무료",
            "지속적인 전시장 관리 시스템(월별 업데이트)",
            "해외 유명 박물관, 전시관 (갤러리) 등 다양한 전시별 공간",
          ].map((feature, i) => (
            <li
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 text-gray-800 dark:text-gray-100 text-sm md:text-base flex items-center justify-center text-center"
            >
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl justify-center items-center">
          <div className="relative w-full sm:w-1/2 h-64">
            <Image
              src="/Product/MetaPano/image_1.png"
              alt="메타파노 쇼핑몰 이미지 1"
              fill
              className="object-contain rounded"
            />
          </div>
          <div className="relative w-full sm:w-1/2 h-64">
            <Image
              src="/Product/MetaPano/image_2.png"
              alt="메타파노 쇼핑몰 이미지 2"
              fill
              className="object-contain rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
