import React from "react";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  const { image, name, sku, vendor, price, sale } = props;
  return (
    <>
      <div className="product-item w-[calc(100%/3-8px)] mx-[4px] mb-6">
        <div className="product-header">
          <Link className="product-image">
            <img src={image} alt="#" />
            <span className="highlight-sale">
              <span>-{sale}%</span>
            </span>
          </Link>
        </div>
        <Link className="product-footer">
          <div className="product-info">
            <div className="vendor-sku">
              <div className="vendor">{vendor}</div>
              <div className="sku">
                <span>sku:</span>
                <span>{sku}</span>
              </div>
            </div>
            <div className="name">{name}</div>
            <div className="price-wrapper">
              <div className="price">{price - price * (sale / 100)} Đ</div>
              <div className="price-sale">{price} Đ</div>
            </div>
          </div>
          <div className="product-link">
            <div className="add-product">Thêm Vào Giỏ Hàng</div>
            <div className="wishlist">
              <button className="btn-wishlist active">
                <span className="swym-tooltip swym-inject">
                  <span className="swym-tooltip-text">Add to wishlist</span>
                </span>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductItem;
