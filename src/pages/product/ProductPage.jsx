import React, { useEffect, useState } from "react";
import ProductItem from "component/ProductItem";
import { useQuery } from "@tanstack/react-query";
import productAPI from "api/productAPI";
import { useParams } from "react-router-dom";
import { convertSlug } from "utils/stringUtils";
import { CiGrid41 } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import { MdOutlineGridOn } from "react-icons/md";
import Dropdown from "component/Dropdown";

const Product = () => {
  const [sortProduct, setSortProduct] = useState("asc");
  const [viewMode, setViewMode] = useState("grid-three");
  const [filterProductByCat, setFilterProductByCat] = useState(null);
  const { cat } = useParams();

  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: productAPI.getAllProducts,
  });

  useEffect(() => {
    setFilterProductByCat(cat || null);
  }, [cat]);

  const productRender = data?.filter((product) =>
    filterProductByCat !== null
      ? convertSlug(product.category.toString()) === filterProductByCat
      : true
  );

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
          <span className="label">sắp xếp theo</span>
          <Dropdown />
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
              price_sale={item.price_sale}
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
