import React from "react";
import { Link } from "react-router-dom";
import { convertSlug } from "@utils/stringUtils";

export const CardImageItem = (props) => {
  const { dataCard, className } = props;
  return (
    <>
      <div className={`card-item  ${className}`}>
        <div className="card-wrapper">
          <div className="image rounded-[16px] overflow-hidden ">
            <img className="w-full" src={dataCard.image} alt="" />
          </div>
          <div className="card-info mb-6 mt-7 text-center ">
            <h3 className="text-lg lg:text-3xl text-[#050505] font-bold">
              {dataCard.name}
            </h3>
            <Link
              to={dataCard.path ? convertSlug(dataCard.path) : "#"}
              className="btn-default mt-3 py-2 px-[30px] text-color text-xs lg:text-base md:border-[3px] border-solid border-2 border-red rounded-[40px] mt-3  inline-block"
            >
              Xem Thêm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
