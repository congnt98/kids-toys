import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanners } from "../../redux/features/banner/bannerSlice";

const Banner = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.banner.banners);
  const status = useSelector((state) => state.banner.status);
  const error = useSelector((state) => state.banner.error);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBanners());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiper = document.querySelector(".swiper-container").swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [banners]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="custom-swiper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="swiper-container"
      >
        {banners?.map((item, key) => (
          <SwiperSlide className="hero-slide-item" key={key}>
            <div className="hero-slide-bg">
              <img src={item.img} alt={item.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev custom-prev" ref={prevRef}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0607 25.0607L24.4393 29.4393C25.3843 30.3843 27 29.715 27 28.3787L27 19.6213C27 18.285 25.3843 17.6157 24.4393 18.5607L20.0607 22.9393C19.4749 23.5251 19.4749 24.4749 20.0607 25.0607Z"
            fill="#CF102D"
          ></path>
          <rect
            x="1.5"
            y="1.5"
            width="45"
            height="45"
            rx="22.5"
            stroke="#CF102D"
            strokeWidth="3"
          ></rect>
        </svg>
      </div>
      <div className="swiper-button-next custom-next" ref={nextRef}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0607 25.0607L24.4393 29.4393C25.3843 30.3843 27 29.715 27 28.3787L27 19.6213C27 18.285 25.3843 17.6157 24.4393 18.5607L20.0607 22.9393C19.4749 23.5251 19.4749 24.4749 20.0607 25.0607Z"
            fill="#CF102D"
          ></path>
          <rect
            x="1.5"
            y="1.5"
            width="45"
            height="45"
            rx="22.5"
            stroke="#CF102D"
            strokeWidth="3"
          ></rect>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
