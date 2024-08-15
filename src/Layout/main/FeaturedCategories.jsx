import { CardImageItem } from "component/CardImageItem";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryAPI from "api/CategoryAPI";
import Loader from "component/Loading";

const FeaturedCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: CategoryAPI.getAllCategory,
    staleTime: 60000,
    cacheTime: 3600000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="row md:mb-10 mb-6">
        <div className="w-full">
          <div className="section-title mb-0 text-center">
            <h2 className="title mb-2">Danh Mục Nổi Bật</h2>
          </div>
        </div>
      </div>
      <div className="card-items w-full flex flex-wrap">
        {data?.slice(0, 3).map((card, index) => (
          <CardImageItem
            key={index}
            image={card.image}
            path={card.path}
            name={card.name}
            className={index === 0 || index === 3 ? "w-full" : ""}
          />
        ))}
      </div>
    </>
  );
};

export default FeaturedCategories;
