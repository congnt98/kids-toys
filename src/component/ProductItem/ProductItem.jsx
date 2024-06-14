import React from "react";
import { Link } from "react-router-dom";
import "./product_item.scss";
const ProductItem = (props) => {
  const { key, image, name, sku, vendor, price, price_sale } = props;
  return (
    <>
      <div className="product-item w-[calc(100%/3-8px)] mx-[4px] mb-6">
        <div className="product-header">
          <Link className="product-image">
            <img src={image} alt="#" />
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
              <div className="price">{price} Đ</div>
              <div className="price-sale">{price_sale} Đ</div>
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
