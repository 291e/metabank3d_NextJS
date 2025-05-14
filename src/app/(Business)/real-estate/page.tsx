import Image from "next/image";

export default function RealEstatePage() {
  return (
    <div className="md:container md:mx-auto flex flex-col">
      <div className="flex flex-col gap-2 px-4 py-12 md:text-center max-w-4xl md:mx-auto">
        <h1 className="text-xl font-bold text-[#339dff]">Real Estate</h1>
        <p className="text-gray-600 dark:text-gray-300">
          메타버스 부동산은 디지털 세계 내에서의 가상 공간을 말하며, 사용자들이
          이 공간을 구매, 임대, 개발할 수 있습니다.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          이 형태의 부동산은 실제 부동산과 유사한 방식으로 거래되며, 가상
          세계에서의 경제 활동에 중요한 역할을 합니다.
        </p>
      </div>

      <div className="w-full aspect-[16/9] relative md:hidden">
        <Image
          src="/Business/real-estate/real-estate.png"
          alt="Real Estate 대표 이미지"
          fill
          className="object-contain"
          priority
        />
      </div>

      <section className=" flex flex-col items-center w-full py-12 px-4 gap-2 mt-12 bg-[#f5f5f5] md:bg-transparent md:flex-row">
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <div className="flex flex-col gap-2 self-start md:text-center max-w-4xl md:self-center md:min-h-[84px] ">
            <h2 className="text-xl font-bold  text-[#339dff]">
              가상 공간의 소유권
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              메타버스 내에서 지정된 가상 공간이나 땅의 소유권을 의미합니다.
            </p>
          </div>
          <div className="w-full aspect-[4/3] relative mt-2">
            <Image
              src="/Business/real-estate/image_1.png"
              alt="Real Estate 대표 이미지"
              fill
              className="object-contain w-full"
              priority
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <div className="flex flex-col self-start gap-2 mt-14 md:text-center max-w-4xl md:self-center md:mt-0">
            <h2 className="text-xl font-bold text-[#339dff]">3D 인터페이스</h2>
            <p className="text-gray-600 dark:text-gray-300">
              메타버스 부동산은 블록체인 기술을 사용하여 소유권이 기록되고,
              전송되는 자산으로 취급됩니다.
            </p>
          </div>
          <div className="w-full aspect-[4/3] relative mt-2">
            <Image
              src="/Business/real-estate/image_2.png"
              alt="Real Estate 대표 이미지"
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
        <div className="flex flex-col gap-2 items-center bg-white w-full h-full pt-5 md:shadow-sm">
          <h2 className="text-xl font-bold">거래 가능성</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4 md:py-5">
            사용자들은 가상 부동산을 구매, 판매, 임대할 수 있으며, 이는 실제
            돈이나 암호화폐로 거래될 수 있습니다.
          </p>
          <div className="w-full  aspect-[16/9] relative md:hidden">
            <Image
              src="/Business/real-estate/image_3.png"
              alt="Real Estate 대표 이미지"
              fill
              className="object-contain w-full object-bottom-center"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5 md:shadow-sm">
          <h2 className="text-xl font-bold">개발 및 사용자화</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            소유자는 자신의 부동산을 개발하거나 사용자화 할 수 있으며, 이는
            상업적, 거주적, 엔터테인먼트 목적 등 다양한 용도로 활용될 수
            있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5 md:shadow-sm">
          <h2 className="text-xl font-bold">경제적 가치</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            메타버스 내에서의 위치, 크기, 인접한 공간과의 연계성 등에 따라
            가치가 달라집니다.
          </p>
        </div>
      </section>

      <section className=" flex flex-col items-center w-full py-12 bg-[#f5f5f5] md:bg-transparent">
        <h2 className="text-xl font-bold text-[#339dff] px-5">기술적 요소</h2>
        <div className="flex flex-col gap-2 w-full h-full py-5 md:flex-row ">
          <div className="flex-1">
            <div className="w-full flex justify-center items-center py-12 border-b border-gray-200 md:min-h-[200px]">
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
              <h3 className="text-lg font-bold">블록체인 및 스마트 계약</h3>
              <p className="text-gray-600 dark:text-gray-300">
                거래의 투명성과 보안을 위해 블록체인 기술과 스마트 계약이
                사용됩니다.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full flex justify-center items-center py-12 border-b border-gray-200 md:min-h-[200px]">
              <Image
                src="/Business/real-estate/icon_2.svg"
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
        </div>
      </section>
    </div>
  );
}
