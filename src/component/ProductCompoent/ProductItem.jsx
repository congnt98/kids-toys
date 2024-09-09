import { useCart } from "context/CartContext";
import { useNotification } from "context/NotificationContext";
import React from "react";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  const { id, image, name, sku, vendor, price, sale } = props;

  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const handleAddToCart = () => {
    const product = {
      id: id,
      name,
      price: price - price * (sale / 100),
      salePrice: price,
      sale,
      image,
      vendor,
      sku,
      quantity: 1, // Initial quantity
    };
    addToCart(product);
    showNotification(`Đã thêm "${name}" vào giỏ hàng thành công`, "success");

    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt mà lên đầu trang
    });
  };
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
        <div className="product-footer">
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
            <div className="add-product" onClick={handleAddToCart}>
              Thêm Vào Giỏ Hàng
            </div>
            <div className="wishlist">
              <button className="btn-wishlist active">
                <span className="swym-tooltip swym-inject">
                  <span className="swym-tooltip-text">Add to wishlist</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
