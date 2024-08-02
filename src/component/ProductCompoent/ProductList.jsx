import React from "react";
import { ProductItem } from ".";

const ProductList = (props) => {
  const { data } = props;
  return (
    <>
      {data?.length > 0 ? (
        data.map((item) => (
          <ProductItem
            key={item.id}
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
