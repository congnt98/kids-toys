import React from "react";

export const CardImageItem = () => {
  return (
    <>
      <div className="card-item">
        <div className="image rounded-[16px] overflow-hidden ">
          <img
            src="https://www.mykingdom.com.vn/cdn/shop/files/D_ch_i_mo_hinh_nhan_v_t.jpg?v=1694141939"
            alt=""
          />
        </div>
        <div className="card-info mb-6 mt-7 ">
          <h3 className="text-3xl text-[#000]">Đồ chơi mầm non</h3>
        </div>
      </div>
    </>
  );
};
