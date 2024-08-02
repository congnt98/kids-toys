import React, { useMemo, useState } from "react";
import { ProductList } from "component/ProductCompoent/";
import { useQuery } from "@tanstack/react-query";
import ProductAPI from "api/ProductAPI";
import { useLocation, useParams } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import { MdOutlineGridOn } from "react-icons/md";
import Dropdown from "component/Dropdown";
import { parseAge, sortArr } from "utils/stringUtils";
import FilterProduct from "Layout/LeftSidebar/FilterProduct";

const ProductPage = () => {
  const [viewMode, setViewMode] = useState("grid-three");
  const [sortProduct, setSortProduct] = useState("default");
  const { category } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ageParam = searchParams.get("age");

  const sortOption = [
    { value: "default", label: "Mặc định" },
    { value: "asc", label: "A to Z" },
    { value: "desc", label: "Z to A" },
  ];

  const { data: products } = useQuery({
    queryKey: ["allProduct"],
    queryFn: ProductAPI.getAllProducts,
  });

  const { data: productsByCategory } = useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => ProductAPI.getProductsByCategory(category),
    enabled: !!category,
  });

  const { data: productNewArrivals } = useQuery({
    queryKey: ["productNewArrivals"],
    queryFn: ProductAPI.getNewArrivals,
    enabled: location.pathname === "/product/new",
  });

  const { data: productBigSale } = useQuery({
    queryKey: ["productBigSale"],
    queryFn: ProductAPI.getProductBigSale,
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
    } else if (location.pathname.startsWith("/product/sale"))
      return (productList = productBigSale);
    else if (location.pathname.startsWith("/product/new"))
      return (productList = productNewArrivals);
    else if (category) return (productList = productsByCategory);

    return sortArr(productList, "name", sortProduct);
  }, [
    ageParam,
    category,
    location.pathname,
    productBigSale,
    productNewArrivals,
    products,
    productsByCategory,
    sortProduct,
  ]);

  const filteredProductCount = filteredProducts ? filteredProducts.length : 0;

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <>
      <div className="container">
        <div className="main-layout gap-[40px] flex justify-between mt-10 max-w-full flex-wrap md:flex-nowrap ">
          <FilterProduct />
          <div className="main-content mb-20 w-full md:w-[calc(100%-284px)]">
            <div className="toolbar">
              <div className="view">
                <span className="label">kiểu xem</span>
                <div className="view-tooltip">
                  <div
                    data-tooltip-id="my-tooltip-grid-two"
                    data-tooltip-content="Chế độ xem lưới 2"
                    className=" icon show-three"
                    onClick={() => {
                      handleViewChange("grid-two");
                    }}
                  >
                    <CiGrid41 />
                  </div>
                  <div
                    data-tooltip-id="my-tooltip-grid-three"
                    data-tooltip-content="Chế độ xem lưới 3"
                    className=" icon show-three"
                    onClick={() => {
                      handleViewChange("grid-three");
                    }}
                  >
                    <MdOutlineGridOn />
                  </div>

                  <Tooltip id="my-tooltip-grid-two" />
                  <Tooltip id="my-tooltip-grid-three" />
                </div>
              </div>
              <div className="count">
                <span className="label">tổng</span>
                <div className="text-count">{filteredProductCount}</div>
              </div>
              <div className="top">
                <Dropdown
                  name={"sort-product"}
                  label={"sắp xếp theo"}
                  options={sortOption}
                  value={sortProduct}
                  onChange={setSortProduct}
                />
              </div>
            </div>
            <div
              className={`product-list flex flex-wrap mx-[-8px] ${viewMode}`}
            >
              <ProductList data={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
