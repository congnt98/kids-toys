import { useQuery } from "@tanstack/react-query";
import BrandsAPI from "api/BrandsAPI";
import React from "react";
import { Link } from "react-router-dom";

const BrandsPage = () => {
  const { data: brands } = useQuery({
    queryKey: ["Brands"],
    queryFn: BrandsAPI.getAllBrands,
  });

  return (
    <>
      <div className="brand-pages">
        <div className="container">
          <h1 className="title-page">Thương hiệu</h1>
          <ul>
            {brands?.map((brand, index) => (
              <li key={index}>
                <Link to={`/product/${brand.name}`}>{brand.name}</Link>
                <img src={brand.logo} alt={brand.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BrandsPage;
