import React from "react";
import { ProductItem } from ".";

const ProductList = (props) => {
  const { data, error } = props;
  if (error) {
    return (
      <p className="text-center text-red-500 mt-4">
        Đã xảy ra lỗi: {error.message}
      </p>
    );
  }
  return (
    <>
      {data?.length > 0 ? (
        data.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            sku={item.sku}
            vendor={item.vendor}
            price={item.price}
            sale={item.sale}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-4">
          Không có sản phẩm phù hợp.
        </p>
      )}
    </>
  );
};

export default ProductList;
