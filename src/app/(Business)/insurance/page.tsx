import Image from "next/image";

export default function InsurancePage() {
  return (
    <div className="md:container md:mx-auto flex flex-col">
      <div className="flex flex-col gap-2 px-4 py-12 md:text-center max-w-4xl md:mx-auto">
        <h1 className="text-xl font-bold text-[#339dff]">Insurance</h1>
        <p className="text-gray-600 dark:text-gray-300">
          메타버스 보험은 가상 세계 내에서 발생할 수 있는 다양한 리스크와 관련된
          금융 서비스를 말합니다.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          메타버스 환경이 점점 복잡해지고, 경제적 가치가 커짐 에 따라, 관련
          리스크를 관리하기 위한 보험 상품과 서비스가 등장하고 있습니다.
        </p>
      </div>

      <div className="w-full aspect-[16/9] relative">
        <Image
          src="/Business/insurance/image_1.png"
          alt="Insurance 대표 이미지"
          fill
          className="object-contain"
          priority
        />
      </div>

      <section className=" flex flex-col items-center w-full py-12 px-4 gap-2 mt-12 bg-[#f5f5f5] md:bg-transparent md:flex-row md:justify-between">
        <div>
          <div className="flex flex-col gap-2  self-start md:text-center md:max-w-md md:self-center">
            <h2 className="text-xl font-bold  text-[#339dff]">
              가상 세계의 리스크 관리
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              메타버스 내에서 발생할 수 있는 다양한 위험들 (예: 디지털 자산 손실
              사이버 보안 위협 등)에 대응하기 위한 보험입니다.
            </p>
          </div>
          <div className="w-full aspect-[4/3] relative mt-2 md:w-[450px]">
            <Image
              src="/Business/insurance/image_2.png"
              alt="Insurance 대표 이미지"
              fill
              className="object-contain w-full"
              priority
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col self-start gap-2 mt-14 md:text-center md:max-w-md md:self-center md:mt-0">
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

      <div className="hidden md:block text-center text-xl font-bold text-[#339dff]">
        주요 특징
      </div>

      <section className=" flex flex-col items-center w-full py-12 gap-8 bg-[#f5f5f5] px-5 md:bg-transparent md:flex-row">
        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5 md:shadow-sm">
          <h2 className="text-xl font-bold">사이버 보안 리스크 커버</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            메타버스 내에서 발생할 수 있는 해킹, 데이터 유출, 사기 등 사이버
            보안 관련 위험에 대한 보장을 제공합니다.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5 md:shadow-sm">
          <h2 className="text-xl font-bold">맞춤형 보험 상품</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            메타버스 사용자의 특정 필요와 활동에 맞춘 맞춤형 보험 상품을
            제공합니다
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full pt-5 md:py-5 md:shadow-sm">
          <h2 className="text-xl font-bold">디지털 자산의 손실 보장</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            투자한 디지털 자산이 기술적 결함, 사기, 해킹 등으로 인해 손실될 경우
            이에 대한 보상을 제공합니다.
          </p>
          <div className="w-full  aspect-[4/3] relative md:hidden">
            <Image
              src="/Business/insurance/image_4.png"
              alt="Insurance 대표 이미지"
              fill
              className="object-contain w-full object-bottom-center"
              priority
            />
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center w-full py-12 bg-[#f5f5f5]">
        <h2 className="text-xl font-bold text-[#339dff] px-5">기술적 요소</h2>
        <div className="flex flex-col gap-2 w-full h-full py-5 md:flex-row md:justify-between">
          <div className="flex-1">
            <div className="w-full flex justify-center items-center py-12 border-b border-gray-200 md:min-h-[200px]">
              <Image
                src="/Business/insurance/icon_1.svg"
                alt="Real Estate 대표 이미지"
                width={100}
                height={100}
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="flex flex-col gap-2 items-center text-center pt-8 px-9">
              <h3 className="text-lg font-bold">블록체인 기술</h3>
              <p className="text-gray-600 dark:text-gray-300">
                거래의 투명성과 보안을 강화하기 위해 블록체인 기술이 활용됩니다.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full flex justify-center items-center py-12 border-b border-gray-200 md:min-h-[200px]">
              <Image
                src="/Business/insurance/icon_2.svg"
                alt="Real Estate 대표 이미지"
                width={100}
                height={100}
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="flex flex-col gap-2 items-center text-center pt-8 px-9">
              <h3 className="text-lg font-bold">스마트 계약</h3>
              <p className="text-gray-600 dark:text-gray-300">
                보험 계약의 자동화와 효율성을 위해 스마트 계약이 사용 될 수
                있습니다. 이는 조건이 충족될 때 자동으로 보험금을 지급하는
                시스템을 가능하게 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
