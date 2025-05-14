import Image from "next/image";

export default function MetaverseMuseumPage() {
  return (
    <div className="flex flex-col items-center gap-4 bg-[#F5F5F7] md:bg-transparent">
      <div className="w-full aspect-[16/9] relative md:aspect-[21/9]">
        <Image
          src="/Product/MetaPano/use_1.png"
          alt="Real Meta 대표 이미지"
          fill
          className="object-contain px-4 md:px-0"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 px-4 pb-8 md:text-center max-w-4xl">
        <h1 className="text-xl font-bold">
          메타파노 박물관/전시관 <span className="text-[#339dff]">소개</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          메타버스 박물관/전시관은 메타비전S/W를 활용하여 박물관/전시관을
          제작하고 전세계 사용자들이 사실적인 메타버스 공간에 자유롭게
          박물관/전시관을 관람하고 개인적 공유와 문화(교육) 체험이 가능한
          서비스를 재미있고 현장감 있게 즐길 수 있는 사실성이 뛰어난 새로운
          개념의 메타버스 플랫폼입니다.
        </p>
      </div>

      <section className=" flex flex-col items-center w-full px-4 bg-white py-12 gap-12">
        <h2 className="text-xl font-bold self-start md:self-center">
          메타파노 박물관/전시관
          <span className="text-[#339dff]"> 주요 특징</span>
        </h2>
        <ul className="grid grid-cols-1 gap-4 w-full max-w-3xl">
          {[
            "사실적인 3D 전시물 모델링 서비스",
            "유,무료 3D 전시물 모델링 서비스 및 등록",
            "전시와 교육체험 에듀테인먼트 동시 만족",
            "무제한 전시장 확장 가능(m2 당 가격 책정)",
            "노출 광고비 무료",
            "지속적인 전시장 관리 시스템(월별 업데이트)",
            "해외 유명 박물관, 전시관(갤러리) 등 다양한 전시별 공간",
            "작가별 NFT 거래시스템 탑재",
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

      <section className=" flex flex-col items-center w-full px-4 bg-white py-12 gap-12">
        <h2 className="text-xl font-bold self-start md:self-center">
          메타파노 박물관/전시관{" "}
          <span className="text-[#339dff]">활용 사례</span>
        </h2>

        <div className="flex flex-col gap-4">
          <Image
            src="/Service/metaMuseum/use_1.png"
            alt="Real Meta 활용 사례"
            width={1000}
            height={1000}
            className="object-contain"
          />
          <Image
            src="/Service/metaMuseum/use_2.png"
            alt="Real Meta 활용 사례"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}
