import React, { useEffect, useState } from "react";
import ProductItem from "component/ProductItem";
import { useQuery } from "@tanstack/react-query";
import ProductAPI from "api/ProductAPI";
import { useLocation, useParams } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import { MdOutlineGridOn } from "react-icons/md";
import Dropdown from "component/Dropdown";
import { parseAge, sortArr } from "utils/stringUtils";

const Product = () => {
  const [viewMode, setViewMode] = useState("grid-three");
  const [productByAge, setProductByAge] = useState([]);
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

  useEffect(() => {
    const ProductByage = () => {
      if (ageParam) {
        const [filterAgeMin, filterAgeMax] = parseAge(ageParam);
        const productByAge = products?.filter((product) => {
          const [productAgeMin, productAgeMax] = parseAge(product.age);
          return (
            filterAgeMin <= productAgeMax &&
            (filterAgeMax === Infinity || filterAgeMax >= productAgeMin)
          );
        });
        setProductByAge(productByAge);
      } else setProductByAge(products);
    };
    ProductByage();
  }, [ageParam, products]);

  const productRender = (() => {
    if (ageParam) return sortArr(productByAge, "name", sortProduct);
    else if (location.pathname.startsWith("/product/sale"))
      return sortArr(productBigSale, "name", sortProduct);
    else if (location.pathname.startsWith("/product/new"))
      return sortArr(productNewArrivals, "name", sortProduct);
    else if (category) return sortArr(productsByCategory, "name", sortProduct);
    else return sortArr(products, "name", sortProduct);
  })();

  const filteredProductCount = productRender ? productRender.length : 0;

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

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
