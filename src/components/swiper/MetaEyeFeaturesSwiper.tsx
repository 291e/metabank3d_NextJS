"use client";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

const features = [
  "소품 촬영용 테이블 회전형 3D 포토 스캐너 출시",
  "2축 모션 제어",
  "자동제어 프로그램",
  "원스톱 스캔 방식",
  "2.0 버전 시제품 개발 완료",
];

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 24,
  slidesPerView: 1,
  navigation: true,
  pagination: { clickable: true },
  autoplay: { delay: 3500, disableOnInteraction: false },
  className: "meta-action-swiper w-full max-w-3xl",
};

const Card = ({ text, i }: { text: string; i: number }) => (
  <div
    role="group"
    aria-label={text}
    className="h-48 w-full flex flex-col justify-center items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow transition hover:shadow-md"
  >
    <div className="flex items-center justify-center h-36 w-[120px ] mb-2">
      <Image
        src={`/Product/MetaEye/${i + 1}.svg`}
        alt={`메타아이 특징 아이콘: ${text}`}
        width={64}
        height={64}
        className="object-contain max-h-full max-w-full p-1"
        priority={i === 0}
      />
    </div>
    <span className="text-base md:text-lg text-gray-800 dark:text-gray-100 text-center w-full break-words">
      {text}
    </span>
  </div>
);

const MetaEyeFeaturesSwiper: React.FC = () => (
  <>
    {/* 모바일: Swiper */}
    <div className="container mx-auto sm:hidden shadow-md rounded-lg">
      <Swiper {...swiperOptions}>
        {features.map((text, i) => (
          <SwiperSlide key={text + i}>
            <Card text={text} i={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {/* 태블릿/PC: 그리드 카드 */}
    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-3xl md:max-w-4xl">
      {features.map((text, i) => (
        <Card key={text + i} text={text} i={i} />
      ))}
    </div>
    <style jsx global>{`
      .meta-action-swiper .swiper-button-next,
      .meta-action-swiper .swiper-button-prev {
        color: #012b52;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 9999px;
        width: 1.5rem;
        height: 1.5rem;
        font-size: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s, transform 0.2s;
      }
      .meta-action-swiper .swiper-button-next:hover,
      .meta-action-swiper .swiper-button-prev:hover {
        background: #dbeafe;
        transform: scale(1.1);
      }
      .meta-action-swiper .swiper-button-disabled {
        opacity: 0.3;
        pointer-events: none;
      }
    `}</style>
  </>
);

export default memo(MetaEyeFeaturesSwiper);
