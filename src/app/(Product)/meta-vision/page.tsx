import Image from "next/image";
import {
  BadgeCheck,
  Sparkles,
  Layers,
  Eye,
  Users,
  Building2,
  ShoppingBag,
  Landmark,
  Globe,
} from "lucide-react";

export default function MetaVisionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-12">
        <Image
          src="/Layout/logo-blue.svg"
          alt="Meta Vision 대표 이미지"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      {/* Hero/소개 */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold text-[#339dff]">
                Meta vision 3D Software
              </h1>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base text-center">
              메타비전(meta vision)은 인공지능(머신러닝, 딥러닝)과
              포토그래메트리기술을 기반으로 카메라로 촬영된 다수의 사진 이미지를
              활용하여 소프트웨어적으로 3D 모델링 데이터를 추출하고 결과의
              정확도(정밀도)와 사용자 편의성을 향상시키기 위해 개발한 혁신적인
              3D 모델 복원 소프트웨어입니다.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/Product/MetaVision/metavision.png"
              alt="Meta Vision 대표 이미지"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* 주요 특징 */}
      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          메타비전 주요특징
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <Layers className="w-6 h-6 text-blue-500 mt-1" />
            <span>photogrammetry 기반 메타비전 PC/모바일 버전 출시</span>
          </div>
          <div className="flex items-start gap-3">
            <BadgeCheck className="w-6 h-6 text-green-500 mt-1" />
            <span>원스톱 이미지 정렬, 빌드 메쉬, 빌드 텍스츄어 기능</span>
          </div>
          <div className="flex items-start gap-3">
            <Eye className="w-6 h-6 text-indigo-500 mt-1" />
            <span>균일 재질의 평면 부분 3D모델 복원 정확도 향상 기술</span>
          </div>
          <div className="flex items-start gap-3">
            <Eye className="w-6 h-6 text-cyan-500 mt-1" />
            <span>투명 재질 부분 3D 모델 복원 정확도 향상 기술</span>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-yellow-500 mt-1" />
            <span>자동 배경 제거 기능</span>
          </div>
          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-pink-500 mt-1" />
            <span>개인 사용자 무료 버전 출시</span>
          </div>
          <div className="flex items-start gap-3">
            <BadgeCheck className="w-6 h-6 text-blue-500 mt-1" />
            <span>GS(good software) 인증</span>
          </div>
          <div className="flex items-start gap-3">
            <BadgeCheck className="w-6 h-6 text-purple-500 mt-1" />
            <span>신기술(NET) 인증, 신제품(NEP) 인증 추진</span>
          </div>
        </div>
      </section>

      {/* 3D 모델링 프로세스 */}
      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          3D 모델링 프로세스
        </h2>
        <div className="flex flex-col gap-16">
          {/* 1단계 */}
          <div className=" flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-1">1단계 모델 캡처</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              3D 모델링을 위한 다각도 촬영
            </p>
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/MetaVision/image_1.png"
                alt="1단계 모델 캡처"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/Product/MetaVision/arrow.svg"
              alt="arrow"
              width={50}
              height={50}
              className="object-contain rounded-lg"
            />
          </div>
          {/* 2단계 */}
          <div className=" flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-1">2단계 사진 업로드</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              자동 복원을 위해 메타비전 3D에 사진을 업로드합니다.
            </p>
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/MetaVision/image_2.png"
                alt="2단계 사진 업로드"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/Product/MetaVision/arrow.svg"
              alt="arrow"
              width={50}
              height={50}
              className="object-contain rounded-lg"
            />
          </div>

          {/* 3단계 */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-1">3단계 완료 확인</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              메타비전 3D S/W를 통해 완성된 3D 모델링을 최종적으로 확인합니다.
            </p>
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/MetaVision/image_3.png"
                alt="3단계 완료 확인"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/Product/MetaVision/arrow.svg"
              alt="arrow"
              width={50}
              height={50}
              className="object-contain rounded-lg"
            />
          </div>

          {/* 4단계 */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-1">4단계 3D 모델 업로드</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
              realmeta 웹사이트에 접속해서 공유합니다.
            </p>
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/MetaVision/image_4.png"
                alt="4단계 3D 모델 업로드"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 활용 분야 */}
      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300 flex items-center gap-2">
          <Globe className="w-6 h-6" /> 메타비전 활용 분야
        </h2>
        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col items-center gap-2 ">
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/MetaVision/meta1.png"
                alt="쇼핑"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-8 h-8 text-blue-600" />
              <span className="text-sm md:text-base font-semibold">쇼핑</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/MetaVision/meta2.png"
                alt="건축/건설"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-blue-600" />
              <span className="text-sm md:text-base font-semibold">
                건축/건설
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/MetaVision/meta3.png"
                alt="GIS/시설관리"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-8 h-8 text-blue-600" />
              <span className="text-sm md:text-base font-semibold">
                GIS/시설관리
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="relative w-full h-80 mb-2">
              <Image
                src="/Product/MetaVision/meta4.png"
                alt="박물관/전시/미술"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-8 h-8 text-blue-600" />
              <span className="text-sm md:text-base font-semibold">
                박물관/전시/미술
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
