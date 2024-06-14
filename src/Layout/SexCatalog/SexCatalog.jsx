import React from "react";
import "swiper/css/scrollbar";
import CarouselComponent from "component/CarouselCompoent/CarouselCompoent";

const SexCatalog = () => {
  const SexCatalogs = [
    {
      Name: "Đồ Chơi Mầm Non",
      CreatedDate: 1717472209,
      CreatedBy: "CreatedBy 1",
      Status: false,
      img: "https://www.mykingdom.com.vn/cdn/shop/files/D_ch_i_mo_hinh_nhan_v_t.jpg?v=1694141939",
      slug: "slug 1",
      oldYear: "oldYear 1",
      id: "1",
    },
    {
      Name: "Đồ Chơi Mầm Non",
      CreatedDate: 1717472209,
      CreatedBy: "CreatedBy 1",
      Status: false,
      img: "https://www.mykingdom.com.vn/cdn/shop/files/D_ch_i_mo_hinh_nhan_v_t.jpg?v=1694141939",
      slug: "slug 1",
      oldYear: "oldYear 1",
      id: "1",
    },
    {
      Name: "Đồ Chơi Mầm Non",
      CreatedDate: 1717472209,
      CreatedBy: "CreatedBy 1",
      Status: false,
      img: "https://www.mykingdom.com.vn/cdn/shop/files/D_ch_i_mo_hinh_nhan_v_t.jpg?v=1694141939",
      slug: "slug 1",
      oldYear: "oldYear 1",
      id: "1",
    },
    {
      Name: "Đồ Chơi Mầm Non",
      CreatedDate: 1717472209,
      CreatedBy: "CreatedBy 1",
      Status: false,
      img: "https://www.mykingdom.com.vn/cdn/shop/files/D_ch_i_mo_hinh_nhan_v_t.jpg?v=1694141939",
      slug: "slug 1",
      oldYear: "oldYear 1",
      id: "1",
    },
    {
      Name: "Đồ Chơi Mầm Non",
      CreatedDate: 1717472209,
      CreatedBy: "CreatedBy 1",
      Status: false,
      img: "https://www.mykingdom.com.vn/cdn/shop/files/D_ch_i_mo_hinh_nhan_v_t.jpg?v=1694141939",
      slug: "slug 1",
      oldYear: "oldYear 1",
      id: "1",
    },
    {
      Name: "Đồ Chơi Mầm Non",
      CreatedDate: 1717472209,
      CreatedBy: "CreatedBy 1",
      Status: false,
      img: "https://www.mykingdom.com.vn/cdn/shop/files/D_ch_i_mo_hinh_nhan_v_t.jpg?v=1694141939",
      slug: "slug 1",
      oldYear: "oldYear 1",
      id: "1",
    },
    {
      Name: "Đồ Chơi Mầm Non",
      CreatedDate: 1717472209,
      CreatedBy: "CreatedBy 1",
      Status: false,
      img: "https://www.mykingdom.com.vn/cdn/shop/files/D_ch_i_mo_hinh_nhan_v_t.jpg?v=1694141939",
      slug: "slug 1",
      oldYear: "oldYear 1",
      id: "1",
    },
  ];

  const res = {
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
  };

  return (
    <>
      <div className=" w-full">
        <div className="section-title mb-0 text-center ">
          <h2 className="title mb-2">Độ Tuổi</h2>
        </div>
      </div>

      <CarouselComponent
        dataCarousel={SexCatalogs}
        scrollbarDraggable={true}
        nameCarousel={"sex-catalog"}
        res={res}
      />
    </>
  );
};

export default SexCatalog;
