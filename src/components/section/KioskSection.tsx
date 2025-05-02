"use client";

import Image from "next/image";

export default function KioskSection() {
  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-start"
      style={{
        background:
          "linear-gradient(0deg, rgba(252, 192, 137, 0.60) 0%, rgba(248, 185, 136, 0.62) 25%, rgba(235, 164, 134, 0.67) 46%, rgba(214, 129, 130, 0.76) 66%, rgba(186, 80, 125, 0.88) 86%, #9F2379 100%)",
        paddingTop: "80px",
        paddingBottom: "20px",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-11">
          {/* 로고 영역 */}
          <div className="flex flex-col bg-white rounded-lg w-16 h-16 items-center justify-center font-bold text-[#EE7AAA]">
            <span>BOGO</span>
            <span>FIT</span>
          </div>
          {/* 오른쪽: 키오스크 설명 */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-white gap-7">
            <div className="border border-white rounded-xl w-full max-w-[190px] flex items-center justify-center h-11">
              <div className="text-lg">보고핏 키오스크</div>
            </div>

            <div className="flex flex-col gap-4 mb-8 text-gray-200 items-center text-sm md:text-base">
              <p>오프라인에서 직접 경험하는 AI 가상 피팅</p>
              <p>보고핏(BOGOFIT) Kiosk는 AI 기반 가상 피팅 솔루션으로,</p>
              <p>매장에서 사진을 촬영하거나 프리셋을 선택해</p>
              <p>
                다양한 스타일을 실감나게 체험할 수 있는 스마트 키오스크입니다.
              </p>
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            <div className="absolute w-full max-w-[300px] h-[600px] -top-36">
              <Image
                src="/Section1/section1.png"
                alt="보고핏 모바일 앱 화면"
                fill
                quality={100}
                className="object-contain"
              />
            </div>
          </div>

          <div className=" gap-4 flex z-10 pt-58">
            <div className="w-full max-w-[155px] h-[300px]">
              <Image
                src="/Section1/image_1.png"
                alt="보고핏 모바일 앱 화면"
                width={155}
                height={300}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[155px] h-[300px]">
              <Image
                src="/Section1/image_2.png"
                alt="보고핏 모바일 앱 화면"
                width={155}
                height={300}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[155px] h-[300px]">
              <Image
                src="/Section1/image_3.png"
                alt="보고핏 모바일 앱 화면"
                width={155}
                height={300}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[155px] h-[300px]">
              <Image
                src="/Section1/image_4.png"
                alt="보고핏 모바일 앱 화면"
                width={155}
                height={300}
                quality={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
