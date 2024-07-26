import React from "react";
import FilterCatItem from "component/FilterCatItem";
import { useQuery } from "@tanstack/react-query";
import CategoryAPI from "api/CategoryAPI";

const FilterProduct = () => {
  const {
    isLoading,
    error,
    data: dataCategory,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: CategoryAPI.getAllCategory,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="left-content md:w-[284px] w-full relative">
      <div className="filter-tree py-4 border-b-[1px] border-[#ededed]">
        <div className="filter-label mb-6">
          <button className="text-red font-Jakarta font-extrabold text-lg capitalize">
            Danh Mục
          </button>
        </div>
        <div className="filter-wrapper max-h-[350px] overflow-auto pr-[10px]">
          <ul className="filter-items p-0 m-0">
            {dataCategory?.map((category, index) => (
              <FilterCatItem
                key={index}
                cat={category}
                subCat={category.subcategory}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
