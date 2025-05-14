import Image from "next/image";

export default function ArchitectureConstructionEngineeringPage() {
  return (
    <div className="md:container md:mx-auto flex flex-col">
      <div className="flex flex-col gap-2 px-4 py-12 md:text-center max-w-4xl md:mx-auto">
        <h1 className="text-xl font-bold text-[#339dff]">
          Architecture, Construction, Engineering
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          메타버스 내에서의 건축 엔지니어링은 가상 세계에서 건축물을 설계, 구축,
          관리하는 혁신적인 분야입니다.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          이는 실제 건축과 유사한 프로세스와 원칙을 따르지만, 디지털 환경의
          특성상 더욱 창의적이고 실험적인 접근이 가능합니다.
        </p>
      </div>

      <div className="w-full aspect-[16/9] relative">
        <Image
          src="/Business/architecture/architecture.png"
          alt="Architecture, Construction, Engineering 대표 이미지"
          fill
          className="object-contain"
          priority
        />
      </div>

      <section className=" flex flex-col items-center w-full py-12 px-4 gap-2 mt-12 bg-[#f5f5f5] md:bg-transparent md:flex-row md:justify-center md:gap-8">
        <div>
          <div className="flex flex-col gap-2  self-start md:text-center max-w-md md:self-center">
            <h2 className="text-xl font-bold  text-[#339dff]">가상 건축</h2>
            <p className="text-gray-600 dark:text-gray-300">
              메타버스 내의 가상 공간에 건축물을 디자인하고 구현하는 것을
              의미합니다.
            </p>
          </div>
          <div className="w-full aspect-[4/3] relative mt-2">
            <Image
              src="/Business/architecture/image_1.png"
              alt="Architecture, Construction, Engineering 대표 이미지"
              fill
              className="object-contain w-full"
              priority
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col self-start gap-2 mt-14 md:text-center max-w-md md:self-center md:mt-0">
            <h2 className="text-xl font-bold text-[#339dff]">디지털 환경</h2>
            <p className="text-gray-600 dark:text-gray-300">
              모든 설계와 구축 과정이 디지털 방식으로 이루어지며, 물리적 제약이
              없습니다.
            </p>
          </div>
          <div className="w-full aspect-[4/3] relative mt-2">
            <Image
              src="/Business/architecture/image_2.png"
              alt="Architecture, Construction, Engineering 대표 이미지"
              fill
              className="object-contain w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center w-full py-12 gap-8 bg-[#f5f5f5] px-5 md:bg-transparent md:flex-row">
        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5 md:shadow-sm">
          <h2 className="text-xl font-bold">창의성 및 혁신</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            실제 세계의 물리적 제약이 없기 때문에, 더욱 창의적이고 혁신적인
            디자인이 가능합니다.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full pt-5 md:shadow-sm md:py-5">
          <h2 className="text-xl font-bold">사용자 맞춤형 설계</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            사용자의 요구와 취향에 맞춰 개인화된 공간을 제공할 수 있습니다.
          </p>
          <div className="w-full  aspect-[16/9] relative md:hidden">
            <Image
              src="/Business/architecture/image_3.png"
              alt="Architecture, Construction, Engineering 대표 이미지"
              fill
              className="object-contain w-full object-bottom-center"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5 md:shadow-sm">
          <h2 className="text-xl font-bold">상호작용 및 몰입감</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            가상 건축물은 사용자와의 상호작용을 통해 더욱 몰입감 있는 경험을
            제공할 수 있습니다.
          </p>
        </div>
      </section>

      <section className=" flex flex-col items-center w-full py-12 bg-[#f5f5f5] md:bg-transparent">
        <h2 className="text-xl font-bold text-[#339dff] px-5">기술적 요소</h2>
        <div className="flex flex-col gap-2 w-full h-full py-5 md:text-center max-w-4xl md:self-center md:flex-row">
          <div>
            <div className="w-full flex justify-center items-center py-12 border-b border-gray-200 md:min-h-[260px]">
              <Image
                src="/Business/shopping/icon_1.svg"
                alt="Real Estate 대표 이미지"
                width={100}
                height={100}
                className="object-cover object-center"
                priority
              />
            </div>
            <div>
              <div className="flex flex-col gap-2 items-center text-center pt-8 px-9">
                <h3 className="text-lg font-bold">블록체인 및 스마트 계약</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  거래의 투명성과 보안을 위해 블록체인 기술과 스마트 계약이
                  사용됩니다.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center items-center py-12 border-b border-gray-200 md:min-h-[260px]">
              <Image
                src="/Business/museum/icon_1.svg"
                alt="Real Estate 대표 이미지"
                width={100}
                height={100}
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="flex flex-col gap-2 items-center text-center pt-8 px-9">
              <h3 className="text-lg font-bold">NFT(Non-Fungible Token)</h3>
              <p className="text-gray-600 dark:text-gray-300">
                가상 부동산의 독특하고 변경 불가능한 소유권 증명을 위해 NFT가
                사용될 수 있습니다.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center items-center py-12 border-b border-gray-200 md:min-h-[260px]">
              <Image
                src="/Business/real-estate/icon_1.svg"
                alt="Real Estate 대표 이미지"
                width={100}
                height={100}
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="flex flex-col gap-2 items-center text-center pt-8 px-9">
              <h3 className="text-lg font-bold">블록체인 및 NFT</h3>
              <p className="text-gray-600 dark:text-gray-300">
                건축물의 소유권, 저작권 관리 및 거래에 블록체인 기술이 활용될 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
