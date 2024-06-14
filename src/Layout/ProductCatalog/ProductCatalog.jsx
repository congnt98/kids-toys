import React from "react";
import "swiper/css/scrollbar";
import CarouselComponent from "component/CarouselCompoent/CarouselCompoent";

const ProductCatalog = () => {
  const ProductCatalogs = [
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
      Name: "Đồ Chơi Sưu Tập",
      CreatedDate: 1717472149,
      CreatedBy: "CreatedBy 2",
      Status: false,
      img: "https://www.mykingdom.com.vn/cdn/shop/files/D_ch_i_mo_hinh_nhan_v_t.jpg?v=1694141939",
      slug: "slug 2",
      oldYear: "oldYear 2",
      id: "2",
    },
    {
      Name: "Đồ Chơi Lắp Ghép",
      CreatedDate: 1717472089,
      CreatedBy: "CreatedBy 3",
      Status: false,
      img: "https://www.mykingdom.com.vn/cdn/shop/files/D_ch_i_mo_hinh_nhan_v_t.jpg?v=1694141939",
      slug: "slug 3",
      oldYear: "oldYear 3",
      id: "3",
    },
  ];
  return (
    <>
      <div className=" w-full">
        <div className="section-title mb-0 text-center ">
          <h2 className="title mb-2">Danh Mục Sản Phẩm Theo Mùa</h2>
        </div>
      </div>

      <CarouselComponent
        dataCarousel={ProductCatalogs}
        scrollbarDraggable={true}
        scrollbarEl={""}
        nameCarousel={"product-catalog"}
      />
    </>
  );
};

export default ProductCatalog;
