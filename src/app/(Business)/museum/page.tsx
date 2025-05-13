import Image from "next/image";

export default function MuseumPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 px-4 py-12">
        <h1 className="text-xl font-bold text-[#339dff]">
          Museum / Exhibition Hall
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          메타버스 박물관은 디지털 기술을 활용해 가상 공간에서 예술작품, 역사적
          유물, 교육적 콘텐츠 등을 전시하는 혁신적인 공간입니다.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          또한 문화, 예술, 교육 분야에서 혁신적인 변화를 가져오고 있고, 기술의
          발전과 함께, 이러한 가상 공간은 더욱 다양하고 풍부한 경험을 제공 할
          잠재력을 가지고 있습니다.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          이러한 박물관은 가상 현실(VR), 증강 현실(AR), 3D 모델링과 같은 기술을
          통해 전 세계의 관람객들 에게 새로운 형태의 문화적 경험을 제공합니다.
        </p>
      </div>

      <div className="w-full aspect-[16/9] relative">
        <Image
          src="/Business/museum/museum.png"
          alt="Museum / Exhibition Hall 대표 이미지"
          fill
          className="object-contain"
          priority
        />
      </div>

      <section className=" flex flex-col items-center w-full py-12 gap-8 bg-[#f5f5f5] px-5">
        <div className="flex flex-col gap-2 items-center bg-white w-full h-full py-5">
          <h2 className="text-xl font-bold">접근성</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            메타버스 박물관은 위치에 구애받지 않고, 전 세계 어디에서나 접근할 수
            있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full pt-5">
          <h2 className="text-xl font-bold">상호작용성</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            방문자들은 작품에 대해 더 깊이 있게 배우고, 가상 환경 내에서
            상호작용할 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center bg-white w-full h-full pt-5">
          <h2 className="text-xl font-bold">맞춤형 경험</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center px-4">
            AI와 데이터 분석을 활용하여 개인의 관심사와 선호에 맞춘 맞춤형
            투어를 제공할 수 있습니다.
          </p>
          <div className="w-full  aspect-[4/3] relative">
            <Image
              src="/Business/museum/image_1.png"
              alt="Museum / Exhibition Hall 대표 이미지"
              fill
              className="object-contain w-full object-bottom-right"
              priority
            />
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center w-full py-12 bg-[#f5f5f5]">
        <div className="flex flex-col gap-2 w-full h-full py-5">
          <h2 className="text-xl font-bold text-[#339dff]">기술적 요소</h2>
          <div className="w-full flex justify-center items-center py-12 border-b border-gray-200">
            <Image
              src="/Business/shopping/icon_1.svg"
              alt="Shopping / Retail 대표 이미지"
              width={100}
              height={100}
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 items-center text-center pt-8 px-9">
            <h3 className="text-lg font-bold">가상 현실(VR)</h3>
            <p className="text-gray-600 dark:text-gray-300">
              실감 나는 3D 환경을 통해 마치 실제 박물관에 있는 것처럼 느껴지게
              합니다.
            </p>
          </div>

          <div className="w-full flex justify-center items-center py-12 border-b border-gray-200">
            <Image
              src="/Business/museum/icon_1.svg"
              alt="Shopping / Retail 대표 이미지"
              width={100}
              height={100}
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 items-center text-center pt-8 px-9">
            <h3 className="text-lg font-bold">증강 현실(AR)</h3>
            <p className="text-gray-600 dark:text-gray-300">
              실제 세계와 디지털 정보를 결합하여 새로운 시각적 경험을
              제공합니다.
            </p>
          </div>

          <div className="w-full flex justify-center items-center py-12 border-b border-gray-200">
            <Image
              src="/Business/museum/icon_2.svg"
              alt="Shopping / Retail 대표 이미지"
              width={100}
              height={100}
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 items-center text-center pt-8 px-9">
            <h3 className="text-lg font-bold">3D 스캐닝 및 모델링</h3>
            <p className="text-gray-600 dark:text-gray-300">
              유물과 예술품을 디지털화하여 가상 공간에 재현합니다. 이는 실제와
              같은 디테일을 가상 환경에서 체험할 수 있게 해줍니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
