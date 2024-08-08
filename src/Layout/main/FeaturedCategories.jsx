import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryAPI from "@api/CategoryAPI";
import { CardImageItem } from "@components/CardImageItem";

const FeaturedCategories = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: CategoryAPI.getAllCategory, 
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const listCard6 = data
    ?.slice(0, 6)
    .map((card, index) => (
      <CardImageItem
        key={index}
        dataCard={card}
        className={index === 0 || index === 3 ? "w-full" : ""}
      />
    ));

  return (
    <>
      <div className="row md:mb-10 mb-6">
        <div className="w-full">
          <div className="section-title mb-0 text-center">
            <h2 className="title mb-2">Danh Mục Nổi Bật</h2>
          </div>
        </div>
      </div>
      <div className="card-items w-full flex flex-wrap">{listCard6}</div>
    </>
  );
};

export default FeaturedCategories;
