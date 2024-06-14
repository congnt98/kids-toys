import { CardImageItem } from "component/CardImageItem/CardImageItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCat } from "../../redux/features/cardImage/cardImageSlice";
const FeaturedCategories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.cardImage.status);
  const cardImages = useSelector((state) => state.cardImage.cardImage);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCat());
    }
  }, [status, dispatch]);

  const listCard6 = cardImages
    .slice(0, 6)
    .map((card, index) => (
      <CardImageItem
        key={index}
        dataCard={card}
        className={index === 0 || index === 3 ? "w-full" : "w-1/2"}
      />
    ));

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
      <div className="w-full flex flex-wrap mx-[15px]">{listCard6}</div>
    </>
  );
};

export default FeaturedCategories;
