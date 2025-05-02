import Image from "next/image";

export default function Meta360Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-12">
        <Image
          src="/Layout/logo-blue.svg"
          alt="Meta 360 로고"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold text-[#339dff]">
                Meta 360
              </h1>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base text-center">
              Meta 360은 360도 파노라마 이미지와 비디오를 위한 전문 솔루션으로,
              완벽한 가상 투어를 구현합니다.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/Product/Meta360/meta360.png"
              alt="Meta 360 대표 이미지"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          주요 기능
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">주요 기능</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-center">
              <li>360도 파노라마 촬영</li>
              <li>실시간 스티칭</li>
              <li>가상 투어 제작</li>
              <li>모바일 호환성</li>
            </ul>
            <div className="flex gap-4 mt-6 w-full justify-center">
              <div className="relative w-32 h-20">
                <Image
                  src="/Product/Meta360/use_1.png"
                  alt="활용 예시 1"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <div className="relative w-32 h-20">
                <Image
                  src="/Product/Meta360/use_2.png"
                  alt="활용 예시 2"
                  fill
                  className="object-contain rounded"
                />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">제품 이미지</h3>
            <div className="relative w-full h-64">
              <Image
                src="/Product/Meta360/meta360.png"
                alt="Meta 360 대표 이미지"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="flex gap-4 mt-6 w-full justify-center">
              <div className="relative w-32 h-20">
                <Image
                  src="/Product/Meta360/image_1.png"
                  alt="제품 이미지 1"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <div className="relative w-32 h-20">
                <Image
                  src="/Product/Meta360/image_2.png"
                  alt="제품 이미지 2"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <div className="relative w-32 h-20">
                <Image
                  src="/Product/Meta360/image_3.png"
                  alt="제품 이미지 3"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <div className="relative w-32 h-20">
                <Image
                  src="/Product/Meta360/image_4.png"
                  alt="제품 이미지 4"
                  fill
                  className="object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
