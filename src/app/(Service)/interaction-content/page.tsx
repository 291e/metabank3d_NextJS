import Image from "next/image";

export default function InteractionContentPage() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-4 bg-[#F5F5F7]">
      <div className="w-full aspect-[16/9] relative">
        <Image
          src="/Product/MetaAction/use_1.png"
          alt="Real Meta 대표 이미지"
          fill
          className="object-contain px-4"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 px-4 pb-8">
        <h1 className="text-xl font-bold">
          메타파노 카메라 및 라이다센서 기반 인터랙션 콘텐츠 및 서비스{" "}
          <span className="text-[#339dff]">소개</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          메타액션(meta action)은 라이다센서 기반의 동작 인식 기술이나 카메라
          기반의 영상인식 기술을 활용하여 사용자의 몸이나 손동작을 통해 창의적인
          영상 등을 구현하는 인터랙션 콘텐츠입니다.
        </p>
      </div>

      <section className=" flex flex-col items-center w-full px-4 bg-white py-12 gap-12">
        <h2 className="text-xl font-bold self-start">
          메타액션 인터랙션 콘텐츠 및 서비스
          <span className="text-[#339dff]"> 주요 특징</span>
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
          {[
            "라이다센서 기반의 동작인식 기술",
            "카메라 기반의 영상인식 기술",
            "수준 높은 체험성과 고품격의 실감형 콘텐츠 제작",
            "메타액션 제품을 통한 독창적이고 차별화된 공간 조성",
            "고도화된 인터랙션 기술 기반의 체험 놀이형 콘텐츠 확대로 고객/ 관람객 증가",
            "기존의 일방향성 고정형 영상전시와는 차별화된 전시를 통한 관련 브랜드 강화",
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
          메타액션 인터랙션 콘텐츠 및 서비스{" "}
          <span className="text-[#339dff]">활용 사례</span>
        </h2>

        <div className="flex flex-col gap-4">
          <Image
            src="/Product/MetaAction/use_2.png"
            alt="Real Meta 활용 사례"
            width={1000}
            height={1000}
            className="object-contain"
          />
          <Image
            src="/Product/MetaAction/use_3.png"
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
