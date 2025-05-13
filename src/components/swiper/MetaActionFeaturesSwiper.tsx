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
  "라이다 센서 기반의 동작인식 기술",
  "메타액션 제품을 통한 독창적이고 차별화된 공간 조성",
  "고도화된 인터랙션 기술 기반의 체험 놀이형 콘텐츠 확대로 고객/관람객 증가",
  "기존의 일방향성 고정형  영상 전시와는 차별화된 전시를 통한 관련 브랜드 강화",
  "카메라 기반의 영상인식 기술",
  "수준 높은 체험성과 고품격의 실감형 콘텐츠 제작",
];

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 24,
  slidesPerView: 1,
  navigation: true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  className: "meta-action-swiper w-full max-w-3xl",
};

const Card = ({ text, i }: { text: string; i: number }) => (
  <div
    role="group"
    aria-label={text}
    className="h-auto min-h-[12rem] w-full flex flex-col justify-center items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow transition hover:shadow-md"
  >
    <div className="relative w-full max-w-[120px] aspect-square mb-2">
      <Image
        src={`/Product/MetaAction/${i + 1}.svg`}
        alt={`메타액션 특징 아이콘: ${text}`}
        fill
        sizes="(max-width: 768px) 80px, 120px"
        className="object-contain p-1"
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
    <div className="container mx-auto sm:hidden">
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
