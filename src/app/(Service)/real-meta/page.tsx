import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RealMetaPage() {
  return (
    <div className="flex flex-col items-center gap-4 bg-[#F5F5F7] md:bg-transparent">
      <div className="w-full aspect-[16/9] relative md:aspect-[21/9]">
        <Image
          src="/Service/realmeta/realmeta.png"
          alt="Real Meta 대표 이미지"
          fill
          className="object-contain px-4 md:px-0"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 px-4 md:text-center max-w-4xl">
        <h1 className="text-xl font-bold">
          리얼메타 제품 <span className="text-[#339dff]">소개</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          리얼메타(real meta)는 ㈜메타뱅크에서 제공하는 메타360 /메타비전S/W을
          활용하여 360도 및 3D 모델링 데이터로 복원하고 복원된 데이터를 전세계
          사용자들이 자유롭게 무료 또는 유료로 공유할 수 있도록 지원하는 데이터
          공유 플랫폼입니다.
        </p>
      </div>

      <div className="flex justify-center items-center bg-[#FF5454] text-white px-4 py-2 my-8 rounded-md gap-2">
        <Link href="https://360.metabank360.com/" className="">
          메타360 바로가기
        </Link>
        <ArrowRightIcon className="w-4 h-4" />
      </div>

      <section className=" flex flex-col items-center w-full px-4 bg-white py-12 gap-12">
        <h2 className="text-xl font-bold self-start md:self-center">
          리얼메타 <span className="text-[#339dff]">주요 특징</span>
        </h2>
        <ul className="grid grid-cols-1 gap-4 w-full max-w-3xl">
          {[
            "www.realmeta3d.com 데이터 공유 사이트 지원",
            "고품질 데이터 시각화를 위한 웹 3D 뷰어 지원",
            "회원제 운영(유, 무료 등급별 회원제 도입)",
            "회원간 데이터 유, 무료 공유 거래 시스템 지원",
            "데이터 제작 과정 동영상 강좌 무상 지원",
          ].map((feature, i) => (
            <li
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 text-gray-800 dark:text-gray-100 text-sm md:text-base flex items-center justify-center text-center"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className=" flex flex-col items-center w-full px-4 bg-white py-12 gap-12">
        <h2 className="text-xl font-bold self-start md:self-center">
          리얼메타 <span className="text-[#339dff]">활용 사례</span>
        </h2>

        <div className="flex flex-col gap-4">
          <Image
            src="/Service/realmeta/use_1.png"
            alt="Real Meta 활용 사례"
            width={1000}
            height={1000}
            className="object-contain"
          />
          <Image
            src="/Service/realmeta/use_2.png"
            alt="Real Meta 활용 사례"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}
