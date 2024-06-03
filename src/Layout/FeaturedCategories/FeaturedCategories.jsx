import { CardImageItem } from "component/CardImageItem/CardImageItem";
import React from "react";
const FeaturedCategories = () => {
  return (
    <>
      <div className="row md:mb-10 mb-6">
        <div className=" w-full">
          <div className="section-title mb-0 text-center ">
            <h2 className="title mb-2">Featured Collection</h2>
            <p>Add featured products to weekly lineup</p>
          </div>
        </div>
      </div>
      <div className="row">
        <CardImageItem />
      </div>
    </>
  );
};

export default FeaturedCategories;
