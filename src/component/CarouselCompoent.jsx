import React from "react";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import { CardImageItem } from "component/CardImageItem";

const CarouselComponent = ({
  dataCarousel,
  nameCarousel,
  spaceBetween,
  slidesPerView,
  scrollbarDraggable,
  scrollbarDragSize,
  scrollbarSnapOnRelease,
  res,
}) => {
  return (
    <>
      <div className="w-full">
        <Swiper
          spaceBetween={spaceBetween || 32}
          slidesPerView={slidesPerView || 2}
          scrollbar={{
            draggable: scrollbarDraggable || false,
            dragSize: scrollbarDragSize || 15,
            el: `.swiper-scrollbar-custom.${nameCarousel}-scrollbar` || "",
            snapOnRelease: scrollbarSnapOnRelease || true,
          }}
          breakpoints={
            res || {
              575: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 4,
              },
            }
          }
          modules={[Scrollbar]}
          className={`${nameCarousel}-swiper swiper-progressbar-scrollbar`}
        >
          {dataCarousel?.map((dataCarouselItem, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <CardImageItem dataCard={dataCarouselItem} />
            </SwiperSlide>
          ))}
        </Swiper>

        {scrollbarDraggable && (
          <div className={`swiper-scrollbar-custom ${nameCarousel}-scrollbar `}>
            <div className="swiper-scrollbar mt-[50px] md:mt-[70px]">
              <div className="swiper-scrollbar-drag">
                <div className="minion"></div>
              </div>
              <div className="swiper-scrollbar-highlight"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CarouselComponent;
