import React from "react";
import "swiper/css/scrollbar";
import CarouselComponent from "component/CarouselCompoent";
import { useQuery } from "@tanstack/react-query";
import AgeAPI from "api/AgeAPI";
import Loader from "component/Loading";

const AgeCatalog = () => {
  const { data: AgeCatalogs, isLoading } = useQuery({
    queryKey: ["age"],
    queryFn: AgeAPI.getAllAge,
    staleTime: 60000,
    cacheTime: 3600000,
    refetchOnWindowFocus: false
  });

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

  if (isLoading) return <Loader />;

  return (
    <>
      <div className=" w-full">
        <div className="section-title mb-0 text-center ">
          <h2 className="title mb-2">Độ Tuổi</h2>
        </div>
      </div>

      <CarouselComponent
        dataCarousel={AgeCatalogs}
        scrollbarDraggable={true}
        nameCarousel={"sex-catalog"}
        res={res}
      />
    </>
  );
};

export default AgeCatalog;
