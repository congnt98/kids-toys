import React, {  useState } from "react";
import ProductItem from "component/ProductItem";
import { useQuery } from "@tanstack/react-query";
import ProductAPI from "api/ProductAPI";
import { useLocation, useParams } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import { MdOutlineGridOn } from "react-icons/md";
import Dropdown from "component/Dropdown";

const Product = () => {
  const [viewMode, setViewMode] = useState("grid-three");
  const [sortProduct, setSortProduct] = useState("default");
  const { category } = useParams();
  const location = useLocation();

  const sortOption = [
    { value: "default", label: "Mặc định" },
    { value: "asc", label: "A to Z" },
    { value: "desc", label: "Z to A" },
  ];

  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery({
    queryKey: ["allProduct"],
    queryFn: ProductAPI.getAllProducts,
  });

  const {
    data: productsByCategory,
    isLoading: productsByCategoryLoading,
    isError: productsByCategoryError,
  } = useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => ProductAPI.getProductsByCategory(category),
    enabled: !!category,
  });

  const {
    data: productNewArrivals,
    isLoading: productNewArrivalsLoading,
    isError: productNewArrivalsError,
  } = useQuery({
    queryKey: ["productNewArrivals"],
    queryFn: ProductAPI.getNewArrivals,
    enabled: location.pathname === "/product/new",
  });

  const {
    data: productBigSale,
    isLoading: productBigSalesLoading,
    isError: productBigSalesError,
  } = useQuery({
    queryKey: ["productBigSale"],
    queryFn: ProductAPI.getProductBigSale,
  });

  const productSort = (productsList) => {
    if (!productsList) return [];
    const sortedProducts = [...productsList];
    if (sortProduct === "asc") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortProduct === "desc") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortedProducts;
  };

  const productRender = (() => {
    if (location.pathname.startsWith("/product/sale"))
      return productSort(productBigSale);
    if (location.pathname.startsWith("/product/new"))
      return productSort(productNewArrivals);
    else if (category) return productSort(productsByCategory);
    else return productSort(products);
  })();

  const filteredProductCount = productRender ? productRender.length : 0;

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  if (
    productsLoading ||
    productsByCategoryLoading ||
    productNewArrivalsLoading ||
    productBigSalesLoading
  ) {
    return <p>Loading...</p>;
  }

  if (
    productsError ||
    productsByCategoryError ||
    productNewArrivalsError ||
    productBigSalesError
  ) {
    return <p>Error loading products.</p>;
  }

  return (
    <>
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
      <div className={`product-list flex flex-wrap mx-[-8px] ${viewMode}`}>
        {productRender?.length > 0 ? (
          productRender.map((item) => (
            <ProductItem
              key={item.id}
              image={item.image}
              name={item.name}
              sku={item.sku}
              vendor={item.vendor}
              price={item.price}
              sale={item.sale}
              viewMode={viewMode}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">
            Không có sản phẩm phù hợp.
          </p>
        )}
      </div>
    </>
  );
};

export default Product;
