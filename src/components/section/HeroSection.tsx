"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      image: "/Main/Slide/mainP_2.png",
      alt: "메타버스 뱅킹 1",
    },
    {
      id: 2,
      image: "/Main/Slide/mainP_3.png",
      alt: "메타버스 뱅킹 2",
    },
    {
      id: 3,
      image: "/Main/Slide/mainP_4.png",
      alt: "메타버스 뱅킹 3",
    },
    {
      id: 4,
      image: "/Main/Slide/mainP_5.png",
      alt: "메타버스 뱅킹 4",
    },
    {
      id: 5,
      image: "/Main/Slide/mainP_6.png",
      alt: "메타버스 뱅킹 5",
    },
    {
      id: 6,
      image: "/Main/Slide/mainP_7.png",
      alt: "메타버스 뱅킹 6",
    },
  ];

  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="absolute top-0 left-0 w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover min-h-[250px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper {
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          text-align: center;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.5);
          transform: scale(1.1);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-pagination {
          bottom: 10px;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
          background: white;
        }

        .swiper-pagination-bullet:hover {
          opacity: 0.8;
        }

        .swiper-button-next {
          right: 10px;
        }

        .swiper-button-prev {
          left: 10px;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 32px;
            height: 32px;
            display: none;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 16px;
          }

          .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>
    </section>
  );
}
