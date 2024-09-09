// src/context/CartContext.js
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import CartApi from "api/CartApi";
import { useUser } from "./UserContext"; // Import hook useUser để lấy thông tin người dùng

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { isAuthenticated, user } = useUser();
  const [cart, setCart] = useState([]);

  const syncCartWithServer = useCallback(
    async (localCart) => {
      try {
        const serverCart = await CartApi.getCart(user.id);
        const mergedCart = mergeCarts(localCart, serverCart);

        setCart(mergedCart);
        localStorage.setItem("cart", JSON.stringify(mergedCart));

        // Cập nhật giỏ hàng hợp nhất lên server
        await CartApi.updateCart(user.id, mergedCart);
      } catch (error) {
        console.error("Lỗi đồng bộ giỏ hàng với server:", error);
      }
    },
    [user]
  );

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (isAuthenticated && user) {
      syncCartWithServer(storedCart);
    } else {
      setCart(storedCart);
    }
  }, [isAuthenticated, user, syncCartWithServer]);

  const mergeCarts = (localCart, serverCart) => {
    const mergedCart = [...serverCart];

    localCart.forEach((localItem) => {
      const existingItem = mergedCart.find((item) => item.id === localItem.id);

      if (existingItem) {
        existingItem.quantity = Math.max(
          existingItem.quantity,
          localItem.quantity
        );
      } else {
        mergedCart.push(localItem);
      }
    });

    return mergedCart;
  };

  const addToCart = async (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1,
      };
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    if (isAuthenticated && user) {
      try {
        await CartApi.updateCart(user.id, updatedCart);
      } catch (error) {
        console.error("Lỗi khi cập nhật giỏ hàng trên server:", error);
      }
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    if (isAuthenticated && user) {
      CartApi.updateCart(user.id, updatedCart).catch((error) => {
        console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng trên server:", error);
      });
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    if (isAuthenticated && user) {
      CartApi.updateCart(user.id, updatedCart).catch((error) => {
        console.error("Lỗi khi cập nhật số lượng sản phẩm trên server:", error);
      });
    }
  };

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem("cart");

    if (isAuthenticated && user) {
      CartApi.clearCart(user.id).catch((error) => {
        console.error("Lỗi khi xóa giỏ hàng trên server:", error);
      });
    }
  }, [isAuthenticated, user]);

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
