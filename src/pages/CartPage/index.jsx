import React from "react";
import "./cart.scss";
import { useUser } from "context/UserContext";

const CartPage = () => {
  const { cart } = useUser();
  console.log(cart);

  return (
    <>
      <div className="cart-container">
        <div className="cart-item">
          <img src="" alt="Sản phẩm 1" className="cart-item-image" />
          <div className="cart-item-details">
            <h3 className="cart-item-name">Sản phẩm 1</h3>
            <p className="cart-item-price">100.000đ</p>
          </div>
        </div>

        <div className="cart-total">Tổng cộng: 450.000đ</div>

        <button className="btn">Thanh toán</button>
      </div>
    </>
  );
};

export default CartPage;
