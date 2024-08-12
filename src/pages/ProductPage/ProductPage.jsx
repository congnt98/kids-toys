import React, { useMemo, useState } from "react";
import { ProductList } from "component/ProductCompoent/";
import { useQuery } from "@tanstack/react-query";
import ProductAPI from "api/productAPI";
import { useLocation } from "react-router-dom";
import { parseAge, sortArr } from "utils/stringUtils";
import FilterProduct from "Layout/LeftSidebar/FilterProduct";
import Loader from "component/Loading";
import Toolbar from "component/Toolbar";

const ProductPage = () => {
  const [viewMode, setViewMode] = useState("grid-three");
  const [sortProduct, setSortProduct] = useState("default");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ageParam = searchParams.get("age");
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  const sortOption = [
    { value: "default", label: "Mặc định" },
    { value: "asc", label: "A to Z" },
    { value: "desc", label: "Z to A" },
  ];

  const queryKey = useMemo(() => {
    if (location.pathname === "/product/new") return ["productNewArrivals"];
    if (location.pathname === "/product/sale") return ["productBigSale"];
    return ["Products"];
  }, [location.pathname]);

  const queryFn = useMemo(() => {
    if (location.pathname === "/product/new") return ProductAPI.getNewArrivals;
    if (location.pathname === "/product/sale")
      return ProductAPI.getProductBigSale;
    return ProductAPI.getAllProducts;
  }, [location.pathname]);

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey,
    queryFn,
    enabled: queryKey.length > 0,
    staleTime: 60000,
    cacheTime: 3600000,
    refetchOnWindowFocus: false,
  });

  const filteredProducts = useMemo(() => {
    let productList = products;

    if (ageParam) {
      const [filterAgeMin, filterAgeMax] = parseAge(ageParam);
      productList = productList?.filter((product) => {
        const [productAgeMin, productAgeMax] = parseAge(product.age);
        return (
          filterAgeMin <= productAgeMax &&
          (filterAgeMax === Infinity || filterAgeMax >= productAgeMin)
        );
      });
    }

    if (category) {
      productList = productList?.filter((product) => {
        return product.category === category;
      });
    }

    if (subcategory) {
      productList = productList?.filter((product) => {
        return product.subcategory === subcategory;
      });
    }

    return sortArr(productList, "name", sortProduct);
  }, [ageParam, category, subcategory, products, sortProduct]);

  const filteredProductCount = filteredProducts?.length || 0;

  const handleViewChange = (mode) => setViewMode(mode);

  if (isLoading) return <Loader />;

  return (
    <div className="container">
      <div className="main-layout gap-[40px] flex justify-between mt-10 max-w-full flex-wrap md:flex-nowrap ">
        <FilterProduct />
        <div className="main-content mb-20 w-full md:w-[calc(100%-284px)]">
          <Toolbar
            handleViewChange={handleViewChange}
            sortOption={sortOption}
            numberOfProduct={filteredProductCount}
            setSortProduct={setSortProduct}
            sortProduct={sortProduct}
          />
          <div className={`product-list flex flex-wrap mx-[-8px] ${viewMode}`}>
            <ProductList data={filteredProducts} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
