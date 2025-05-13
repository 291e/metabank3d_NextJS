import Image from "next/image";

export default function FacilityManagementPage() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-[#339dff]">
          Facility Management
        </h1>
        <div className="flex flex-col gap-3">
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            메타버스 시설관리는 가상 세계 내에서 다양한 시설과 공간을 효율적으로
            운영, 유지 및 관리하는 활동을 말합니다.
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            이는 실제 세계의 시설 관리와 유사한 개념을 따르지만, 메타버스의
            디지털 특성에 맞춰 적용됩니다.
          </p>
        </div>
      </div>

      <div className="w-full aspect-[16/9] relative max-w-5xl mx-auto">
        <Image
          src="/Business/facility/facility.png"
          alt="Facility Management 대표 이미지"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />
      </div>

      <section className="flex flex-col items-center w-full py-8 md:py-12 px-4 md:px-6 gap-6 mt-8 md:mt-12 bg-[#f5f5f5]">
        <div className="flex flex-col gap-3 w-full max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-[#339dff]">
            가상 공간의 관리
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            메타버스 내의 건물, 인프라, 그리고 다양한 가상 시설의 운영과 유지를
            포함합니다.
          </p>
        </div>
        <div className="w-full max-w-4xl aspect-[4/3] relative">
          <Image
            src="/Business/facility/image_1.png"
            alt="가상 공간 관리 이미지"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        <div className="flex flex-col gap-3 w-full max-w-4xl mt-8 md:mt-14">
          <h2 className="text-xl md:text-2xl font-bold text-[#339dff]">
            디지털 환경 최적화
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            메타버스 사용자들에게 최적의 경험을 제공하기 위해 가상 공간을
            지속적으로 관리하고 개선합니다.
          </p>
        </div>
        <div className="w-full max-w-4xl aspect-[4/3] relative">
          <Image
            src="/Business/facility/image_2.png"
            alt="디지털 환경 최적화 이미지"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      </section>

      <section className="flex flex-col items-center w-full py-8 md:py-12 gap-6 md:gap-8 bg-[#f5f5f5] px-4 md:px-6">
        <div className="flex flex-col gap-3 items-center bg-white w-full max-w-4xl p-6 rounded-lg shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold">사용자 경험 중심</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-center">
            메타버스 내에서의 사용자 경험과 상호작용을 개선하는 데 초점을
            맞춥니다.
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center bg-white w-full max-w-4xl p-6 rounded-lg shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold">개발 및 사용자화</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-center">
            가상 공간은 지속적인 모니터링과 업데이트가 필요하여, 이는 시설관리의
            핵심 요소가 됩니다.
          </p>
          <div className="w-full aspect-[4/3] relative mt-4">
            <Image
              src="/Business/facility/image_3.png"
              alt="개발 및 사용자화 이미지"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center bg-white w-full max-w-4xl p-6 rounded-lg shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold">경제적 가치</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-center">
            사용자 행동 데이터, 공간 사용 패턴 등을 분석하여 효율적인 관리
            전략을 수립합니다.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center w-full py-8 md:py-12 bg-[#f5f5f5]">
        <div className="flex flex-col gap-6 w-full max-w-4xl px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#339dff]">
            기술적 요소
          </h2>

          <div className="flex flex-col gap-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center items-center py-8 border-b border-gray-200">
              <Image
                src="/Business/facility/icon_1.svg"
                alt="3D 모델링 아이콘"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col gap-3 items-center text-center px-6 pb-8">
              <h3 className="text-lg md:text-xl font-bold">
                3D 모델링 및 시뮬레이션
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                가상 시설의 설계 및 변경을 위한 3D 모델링 도구가 중요합니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center items-center py-8 border-b border-gray-200">
              <Image
                src="/Business/museum/icon_1.svg"
                alt="VR/AR 아이콘"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col gap-3 items-center text-center px-6 pb-8">
              <h3 className="text-lg md:text-xl font-bold">
                가상 현실 및 증강 현실
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                사용자가 메타버스 내에서 공간 정보를 경험하고 상호작용하는 데 VR
                및 AR 기술이 활용됩니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center items-center py-8 border-b border-gray-200">
              <Image
                src="/Business/facility/icon_2.svg"
                alt="AI 아이콘"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col gap-3 items-center text-center px-6 pb-8">
              <h3 className="text-lg md:text-xl font-bold">인공지능(AI)</h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                AI를 활용해 시설 운영의 효율성을 높이고, 문제를 사전에 예측하며
                해결 방안을 제시할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
