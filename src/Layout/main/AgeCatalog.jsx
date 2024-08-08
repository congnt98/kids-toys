import React from "react";
import "swiper/css/scrollbar";
import { useQuery } from "@tanstack/react-query";
import CarouselComponent from "@components/CarouselComponent";
import AgeAPI from "@api/AgeAPI";

const AgeCatalog = () => {
  const { data: AgeCatalogs } = useQuery({
    queryKey: ["age"],
    queryFn: AgeAPI.getAllAge,
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
