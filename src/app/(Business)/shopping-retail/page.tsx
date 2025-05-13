import Image from "next/image";

export default function ShoppingRetailPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 px-4 py-12">
        <h1 className="text-xl font-bold text-[#339dff]">Shopping / Retail</h1>
        <p className="text-gray-600 dark:text-gray-300">
          (주)메타뱅크의 메타버스 쇼핑몰은 가상 현실 환경에서 제공되는 쇼핑
          경험을 말합니다.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          이는 전통적인 온라인 쇼핑과는 다른 새로운 차원의 소비자 경험을
          제공합니다.
        </p>
      </div>

      <div className="w-full aspect-[16/9] relative">
        <Image
          src="/Business/shopping/shopping.png"
          alt="Shopping / Retail 대표 이미지"
          fill
          className="object-contain"
          priority
        />
      </div>

      <section className=" flex flex-col items-center w-full py-12 gap-2 mt-12 bg-[#f5f5f5]">
        <div className="flex flex-col gap-2 px-4 self-start">
          <h2 className="text-xl font-bold  text-[#339dff]">가상 현실 기반</h2>
          <p className="text-gray-600 dark:text-gray-300">
            메타버스 쇼핑몰은 사용자가 가상 현실(VR)이나 증강 현실(AR) 기술을
            통해 경험하는 디지털 상업 공간입니다.
          </p>
        </div>
        <div className="w-full aspect-[4/3] relative mt-2">
          <Image
            src="/Business/shopping/image_1.png"
            alt="Shopping / Retail 대표 이미지"
            fill
            className="object-contain w-full"
            priority
          />
        </div>

        <div className="flex flex-col self-start gap-2 px-4 mt-14">
          <h2 className="text-xl font-bold text-[#339dff]">3D 인터페이스</h2>
          <p className="text-gray-600 dark:text-gray-300">
            제품을 3차원 형태로 보고, 상호작용할 수 있는 인터페이스를
            제공합니다.
          </p>
        </div>
        <div className="w-full aspect-[4/3] relative mt-2">
          <Image
            src="/Business/shopping/image_2.png"
            alt="Shopping / Retail 대표 이미지"
            fill
            className="object-contain w-full"
            priority
          />
        </div>
      </section>

      <section className=" flex flex-col items-center w-full py-12 gap-8 bg-[#f5f5f5]">
        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5">
          <h2 className="text-xl font-bold">몰입감 있는 쇼핑 경험</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            사용자는 가상 공간에서 실제와 유사한 쇼핑 경험을 할 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full pt-5">
          <h2 className="text-xl font-bold">인터랙티브 요소</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            사용자는 제품을 가상으로 만져보고, 시험해볼 수 있으며, 가상의 판매
            직원과 상호작용할 수도 있습니다.
          </p>
          <div className="w-full  aspect-[16/9] relative">
            <Image
              src="/Business/shopping/image_3.png"
              alt="Shopping / Retail 대표 이미지"
              fill
              className="object-contain w-full object-right"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5">
          <h2 className="text-xl font-bold">개인화 및 맞춤화</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            AI 기술을 통해 사용자의 취향과 선호도에 맞춘 맞춤형 쇼핑 경험을
            제공합니다.
          </p>
        </div>
      </section>

      <section className=" flex flex-col items-center w-full py-12 bg-[#f5f5f5]">
        <div className="flex flex-col gap-2 w-full h-full py-5">
          <h2 className="text-xl font-bold text-[#339dff]">기술적 요소</h2>
          <div className="w-full flex justify-center items-center py-12">
            <Image
              src="/Business/shopping/icon_1.svg"
              alt="Shopping / Retail 대표 이미지"
              width={100}
              height={100}
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 items-center text-center border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold">VR 및 AR</h3>
            <p className="text-gray-600 dark:text-gray-300">
              메타버스는 주로 VR과 AR 기술을 활용하여 사용자에게 실감나는 가상
              환경을 제공합니다.
            </p>
          </div>

          <div className="w-full flex justify-center items-center py-12">
            <Image
              src="/Business/shopping/icon_2.svg"
              alt="Shopping / Retail 대표 이미지"
              width={100}
              height={100}
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 items-center text-center border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold">블록체인 및 NFT</h3>
            <p className="text-gray-600 dark:text-gray-300">
              디지털 자산의 소유권과 거래를 위해 블록체인 기술과 NFT가 사용될 수
              있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
