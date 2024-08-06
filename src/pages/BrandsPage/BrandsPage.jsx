import { useQuery } from "@tanstack/react-query";
import BrandsAPI from "api/BrandsAPI";
import Loader from "component/Loading";
import React from "react";
import { Link } from "react-router-dom";

const BrandsPage = () => {
  const { data: brands,isLoading } = useQuery({
    queryKey: ["Brands"],
    queryFn: BrandsAPI.getAllBrands,
    staleTime: 60000,
    cacheTime: 3600000,
    refetchOnWindowFocus: false
  });

  if(isLoading) return <Loader/>

  return (
    <>
      <div className="brand-pages">
        <div className="container">
          <h1 className="title-page">Thương hiệu</h1>
          <ul>
            {brands?.map((brand, index) => (
              <li key={index}>
                <Link to={`/product/${brand.name}`}>{brand.name}</Link>
                {/* <img src={brand.logo} alt={brand.name} /> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BrandsPage;
