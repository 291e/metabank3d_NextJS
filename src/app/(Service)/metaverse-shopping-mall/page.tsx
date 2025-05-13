import Image from "next/image";

export default function MetaverseShoppingMallPage() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-4 bg-[#F5F5F7]">
      <div className="w-full aspect-[16/9] relative">
        <Image
          src="/Product/MetaPano/use_2.png"
          alt="Real Meta 대표 이미지"
          fill
          className="object-contain px-4"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 px-4 pb-8">
        <h1 className="text-xl font-bold">
          메타파노 쇼핑몰 <span className="text-[#339dff]">소개</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          메타버스 쇼핑몰은 메타비전S/W를 활용하여 쇼핑몰 상품을 제작하고 전세계
          사용자들이 사실적인 메타버스 공간에 자유롭게 쇼핑과 여가활동을 즐길 수
          있는 사실성이 뛰어난 새로운 개념의 메타버스 플랫폼입니다.
        </p>
      </div>

      <section className=" flex flex-col items-center w-full px-4 bg-white py-12 gap-12">
        <h2 className="text-xl font-bold self-start">
          메타파노 쇼핑몰 <span className="text-[#339dff]">주요 특징</span>
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
          {[
            "사실적인 3D 쇼핑몰(백화점) 환경 구축",
            "해외 유명 쇼핑몰, 백화점 등 다양한 테마별 공간(템플릿)",
            "유, 무료3D 상품 모델링 서비스 및 등록",
            "쇼핑과 엔터테인먼트(테마파크, 어트랙션, 게임등)동시 만족",
            "무제한쇼핑몰(백화점) 확장가능(m2 당 가격 책정)",
            "노출 광고비 무료",
            "지속적인 쇼핑몰(백화점) 관리시스템(월별 업데이트)",
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

      <section className=" flex flex-col items-center w-full px-4 bg-white py-12 gap-12">
        <h2 className="text-xl font-bold self-start">
          메타파노 쇼핑몰 <span className="text-[#339dff]">활용 사례</span>
        </h2>

        <div className="flex flex-col gap-4">
          <Image
            src="/Service/metaShopping/use_1.png"
            alt="Real Meta 활용 사례"
            width={1000}
            height={1000}
            className="object-contain"
          />
          <Image
            src="/Service/metaShopping/use_2.png"
            alt="Real Meta 활용 사례"
            width={1000}
            height={1000}
            className="object-contain"
          />
          <Image
            src="/Service/metaShopping/use_3.png"
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
