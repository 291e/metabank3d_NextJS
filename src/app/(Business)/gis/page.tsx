import Image from "next/image";

export default function GISPage() {
  return (
    <div className="flex flex-col md:container md:mx-auto">
      <div className="flex flex-col gap-2 px-4 py-12 md:text-center max-w-4xl md:mx-auto">
        <h1 className="text-xl font-bold text-[#339dff]">GIS</h1>
        <p className="text-gray-600 dark:text-gray-300">
          메타버스 GIS (Geographic Information System) 는 메타버스 환경 내에서
          지리적 정보를 수집, 관리, 분석, 시각화하는 시스템입니다.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          이는 가상 세계에 서의 공간적 데이터를 관리하고, 이를 통해 사용자
          경험을 향상시키는 데 중요한 역할을 합니다.
        </p>
      </div>

      <div className="w-full aspect-[16/9] relative">
        <Image
          src="/Business/gis/gis.png"
          alt="Insurance 대표 이미지"
          fill
          className="object-contain"
          priority
        />
      </div>

      <section className=" flex flex-col items-center w-full py-12 px-4 gap-2 mt-12 bg-[#f5f5f5] md:bg-transparent md:flex-row  md:justify-center md:gap-8">
        <div>
          <div className="flex flex-col gap-2  self-start md:text-center max-w-md md:self-center">
            <h2 className="text-xl font-bold  text-[#339dff]">
              가상 공간의 지리적 정보
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              메타버스 내에 존재하는 다양한 가상 공간과 그 속성을 지리적으로
              분석하고 표현합니다.
            </p>
          </div>
          <div className="w-full aspect-[4/3] relative mt-2 md:w-[450px]">
            <Image
              src="/Business/gis/image_1.png"
              alt="Insurance 대표 이미지"
              fill
              className="object-contain w-full"
              priority
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col self-start gap-2 mt-14 md:text-center max-w-md md:self-center md:mt-0">
            <h2 className="text-xl font-bold text-[#339dff]">
              디지털 자산 보호
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              메타버스 내에서 구매하고 거래하는 디지털 자산 (예: NFT, 가상
              부동산 등)의 손실이나 도난을 보호합니다.
            </p>
          </div>
          <div className="w-full aspect-[4/3] relative mt-2 md:w-[450px]">
            <Image
              src="/Business/insurance/image_3.png"
              alt="Insurance 대표 이미지"
              fill
              className="object-contain w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center w-full py-12 gap-8 bg-[#f5f5f5] px-5 md:bg-transparent md:flex-row md:justify-center md:gap-8">
        <div className="flex flex-col gap-2 items-center bg-white w-full h-full pt-5 md:shadow-sm md:py-5">
          <h2 className="text-xl font-bold">공간적 인식 강화</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            메타버스 내에서 사용자 위치, 이동 경로, 가상 환경의 구조 등을
            정확하게 파악하고 제공합니다.
          </p>
          <div className="w-full  aspect-[4/3] relative md:hidden">
            <Image
              src="/Business/gis/image_3.png"
              alt="Insurance 대표 이미지"
              fill
              className="object-contain w-full object-bottom-center"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5 md:shadow-sm">
          <h2 className="text-xl font-bold">상호작용 및 사용자 경험 개선</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            공간적 정보를 기반으로 사용자와 가상 환경 간의 상호작용을 강화하고,
            보다 맞춤화된 경험을 제공합니다.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5 md:shadow-sm">
          <h2 className="text-xl font-bold">디지털 자산의 손실 보장</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            투자한 디지털 자산이 기술적 결함, 사기, 해킹 등으로 인해 손실될 경우
            이에 대한 보상을 제공합니다.
          </p>
        </div>
      </section>

      <section className=" flex flex-col items-center w-full py-12 bg-[#f5f5f5]">
        <h2 className="text-xl font-bold text-[#339dff] px-5">기술적 요소</h2>
        <div className="flex flex-col gap-2 w-full h-full py-5 md:text-center max-w-4xl md:self-center md:flex-row">
          <div className="flex-1">
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
            <div className="flex flex-col gap-2 items-center text-center pt-8 px-9">
              <h3 className="text-lg font-bold">3D 모델링</h3>
              <p className="text-gray-600 dark:text-gray-300">
                가상 세계를 현실감 있게 표현하기 위한 3D 모델링 기술이
                필수적입니다.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full flex justify-center items-center py-12 border-b border-gray-200">
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
              <h3 className="text-lg font-bold">가상 현실 및 증강 현실</h3>
              <p className="text-gray-600 dark:text-gray-300">
                사용자가 메타버스 내에서 공간 정보를 경험하고 상호작용하는 데 VR
                및 AR 기술이 활용됩니다.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full flex justify-center items-center py-12 border-b border-gray-200">
              <Image
                src="/Business/shopping/icon_2.svg"
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
                대규모의 공간 데이터를 처리하고 분석하기 위한 고급 데이터 분석
                도구와 알고리즘이 필요합니다. 이를 통해 메타버스 내에서의 사용자
                행동 패턴, 공간 사용 효율성 등을 분석할 수 있 습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
