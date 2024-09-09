import React from "react";
import { Trash2 } from "lucide-react";
import "./cart.scss";
import { useCart } from "context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Giỏ hàng của bạn</h1>
        {cart.length === 0 ? (
          <p>Giỏ hàng của bạn đang trống.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      {item.price.toLocaleString("vi-VN")}đ
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        className="bg-gray-200 px-2 py-1 rounded"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="bg-gray-200 px-2 py-1 rounded"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="text-xl font-semibold">
                Tổng cộng: {calculateTotal().toLocaleString("vi-VN")}đ
              </div>
              <button className="payment mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Thanh toán
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
