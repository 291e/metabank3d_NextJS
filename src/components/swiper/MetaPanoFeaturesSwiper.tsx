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
  "딥 러닝 기반 자동 배경 제거 기능 지원",
  "배경 색상 변경 기능",
  "GIF / MP4 애니메이션 제작 기능",
  "이미지 회전 및 미세 각도 조절 기능",
  "HTML 기반의 360도 회전 인터랙션 제작 기능",
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
    <div className="flex items-center justify-center h-36 w-[120px ] mb-2 rounded-lg">
      <Image
        src={`/Product/MetaPano/${i + 1}.svg`}
        alt={`메타파노 특징 아이콘: ${text}`}
        width={64}
        height={64}
        className="object-contain max-h-full max-w-full p-1 rounded-lg"
        priority={i === 0}
      />
    </div>
    <span className="text-base md:text-lg text-gray-800 dark:text-gray-100 text-center w-full break-words">
      {text}
    </span>
  </div>
);

const MetaActionFeaturesSwiper: React.FC = () => (
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
    <div className="hidden sm:grid grid-cols-2 gap-6 w-full max-w-3xl">
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

export default memo(MetaActionFeaturesSwiper);
